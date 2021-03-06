import '../App.css';
import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import NavBar from './NavBar'
import DashboardMain from './DashboardMain'
import DashboardRocket from './DashboardRocket'
import DashboardLaunch from './DashboardLaunch'
import DashboardLaunchpad from './DashboardLaunchpad'

function App() {

// ---------- States ---------- //
  const [allRockets, setAllRockets] = useState([])
  const [allLaunches, setAllLaunches] = useState([])
  const [allLaunchpads, setAllLaunchpads] = useState([])

  // const [allComments, setAllComments] = useState([])

  const [singleRocket, setSingleRocket] = useState({})
  const [singleLaunch, setSingleLaunch] = useState({})
  const [singleLaunchpad, setSingleLaunchpad] = useState({})

// ---------- useEffects that will pull all Rockets Launches and Launchpads ---------- //
//*  Setting State here for Rockets Launches and Launchpads   *//
  useEffect(() => {
      fetch("http://localhost:3000/rockets")
      .then(resp => resp.json())
      .then(rocketsArr => setAllRockets(rocketsArr))
  }, [])
  useEffect(() => {
      fetch("http://localhost:3000/launches")
      .then(resp => resp.json())
      .then(launchesArr => setAllLaunches(launchesArr))
  }, [])
  useEffect(() => {
      fetch("http://localhost:3000/launchpads")
      .then(resp => resp.json())
      .then(launchpadsArr => setAllLaunchpads(launchpadsArr))
  }, [])

// ---------- New Comment form handler ---------- //
const handelForm = (e) => {
    e.preventDefault()
    const p = e.target.present.value
    const present = () => {
        if (p === "true"){
            return Boolean(p)
        }else{
            return Boolean(!p)
        }
    }
    
    const newComment = {
        launch_id: singleLaunch.id,
        reviewer: e.target.reviewer.value,
        present_at_launch: present(),
        comment: e.target.comment.value
    }

    fetch("http://localhost:3000/launch_reviews",{
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Accept': 'Application/json'
        },
        body: JSON.stringify(newComment)
    })
    .then(resp => resp.json())
    .then(launch => setSingleLaunch(launch))
}

  return (
    <Box>
      <NavBar 
        allRockets={allRockets} 
        allLaunches={allLaunches}
        allLaunchpads={allLaunchpads}
        setSingleRocket={setSingleRocket}
        setSingleLaunch={setSingleLaunch}
        setSingleLaunchpad={setSingleLaunchpad}
      />
      <Box alignContent="center">
        <Switch>
          <Route path="/rocket">
            <DashboardRocket
              singleRocket={singleRocket}
            />
          </Route>
          <Route path="/launch">
            <DashboardLaunch
              singleLaunch={singleLaunch}
              // allComments={allComments}
              handelForm={handelForm}
            />
          </Route>
          <Route path="/launchpad">
            <DashboardLaunchpad
              singleLaunchpad={singleLaunchpad}
            />
          </Route>
          <Route path="/">
            <DashboardMain
              allRockets={allRockets} 
              allLaunches={allLaunches}
              allLaunchpads={allLaunchpads}
            />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default App;
