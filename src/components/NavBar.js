import { Box, Center, Button, Grid, Image, Text, GridItem, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"
import { Spin as Hamburger } from 'hamburger-react'
import {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"


function NavBar({allRockets, allLaunches, allLaunchpads, setSingleRocket, setSingleLaunch, setSingleLaunchpad }) {
// ---------- History ---------- //
    const history = useHistory()
// ---------- States ---------- //
    const [isOpen, setOpen] = useState(false)
    
// ---------- Menu Buttons on clicks ---------- //
    const handleRocket = (r) => {
        setSingleRocket(r)
        history.push("/rocket")
    }
    
    const handleLaunch = (l) => {
        setSingleLaunch(l)
        history.push("/launch")
    }
    
    const handleLaunchpad = (lp) => {
        setSingleLaunchpad(lp)
        history.push("/launchpad")
    }
    
// ---------- Map for NavBar Rockets Launches Launchpads ---------- //
    const seeRockets = allRockets.map(r => {
        return(
            <MenuItem key={r.id} onClick={() => handleRocket(r)}>
                {r.name}
            </MenuItem>
        )
    })
    const seeLaunches = allLaunches.map(l => {
        return(
            <MenuItem key={l.id} onClick={() => handleLaunch(l)}>
                {l.name}
            </MenuItem>
        )
    })
    const seeLaunchpads = allLaunchpads.map(lp => {
        return(
            <MenuItem key={lp.id} onClick={() => handleLaunchpad(lp)}>
                {lp.name}
            </MenuItem>
        )
    })


// ---------- DOM ---------- //
    return(
        <Box w="100%" h="100px" bgGradient="linear(to-t, blue.200, blue.900)" >
            <Grid templateColumns="repeat(5, 1fr)" gap={6} >
                <Text
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="semibold"
                >
                    DataX
                </Text>
                {isOpen ? (
                    <>
                        <GridItem justifySelf="center" padding="6" colStart={2}>
                            <Menu>  
                                <MenuButton
                                    px={4}
                                    py={2}
                                    transition="all 1.2s"
                                    borderRadius="full"
                                    borderWidth="1px"
                                    _hover={{ bg: "gray.400" }}
                                    _expanded={{ bg: "blue.400" }}
                                    _focus={{ boxShadow: "outline" }}
                                >
                                    ROCKETS
                                </MenuButton>
                                <MenuList>
                                    {seeRockets}
                                </MenuList>
                            </Menu>
                        </GridItem>
                        <GridItem justifySelf="center" padding="6" colStart={3}>
                            <Menu>  
                                <MenuButton
                                    px={4}
                                    py={2}
                                    transition="all 1.2s"
                                    borderRadius="full"
                                    borderWidth="1px"
                                    _hover={{ bg: "gray.400" }}
                                    _expanded={{ bg: "blue.400" }}
                                    _focus={{ boxShadow: "outline" }}
                                >
                                    LAUNCHES
                                </MenuButton>
                                <MenuList>
                                    {seeLaunches}
                                </MenuList>
                            </Menu>
                        </GridItem>
                        <GridItem justifySelf="center" padding="6" colStart={4}>
                            <Menu>  
                                <MenuButton
                                    px={4}
                                    py={2}
                                    transition="all 1.2s"
                                    borderRadius="full"
                                    borderWidth="1px"
                                    _hover={{ bg: "gray.400" }}
                                    _expanded={{ bg: "blue.400" }}
                                    _focus={{ boxShadow: "outline" }}
                                >
                                    LAUNCHPADS
                                </MenuButton>
                                <MenuList>
                                    {seeLaunchpads}
                                </MenuList>
                            </Menu>
                        </GridItem>
                    </>
                ) : null}
                <GridItem justifySelf="right" padding="5" colStart={5}>
                    <Hamburger label="Show Menu" toggled={isOpen} toggle={setOpen} />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default NavBar;