import '../App.scss';
import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { Button, chakra, Grid, Flex, Box, Text, Spacer } from "@chakra-ui/react"
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
