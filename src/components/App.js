import '../App.css';
import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import NavBar from './NavBar'
import { Button, chakra, Grid, Flex, Box, Text, Spacer } from "@chakra-ui/react"

function App() {

// ---------- States ---------- //
  const [allRockets, setAllRockets] = useState([])
  const [allLaunches, setAllLaunches] = useState([])
  const [allLaunchpads, setAllLaunchpads] = useState([])

  const [singleRocket, setSingleRocket] = useState({})
  const [singleLaunch, setSingleLaunch] = useState({})
  const [singleLaunchpad, setSingleLaunchpad] = useState({})

  console.log(singleRocket)
  console.log(singleLaunch)
  console.log(singleLaunchpad)

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
    <NavBar 
      allRockets={allRockets} 
      allLaunches={allLaunches}
      allLaunchpads={allLaunchpads}
      setSingleRocket={setSingleRocket}
      setSingleLaunch={setSingleLaunch}
      setSingleLaunchpad={setSingleLaunchpad}
    />
  );
}

export default App;
