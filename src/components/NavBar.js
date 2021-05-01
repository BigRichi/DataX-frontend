import { Box, Center, Button, Grid, Image, Text, GridItem, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"
import { Spin as Hamburger } from 'hamburger-react'
import {useState, useEffect} from "react"


function NavBar() {

// ---------- States ---------- //
    const [isOpen, setOpen] = useState(false)

// ---------- useEffects that will pull all Rockets Launches and Launchpads ---------- //
//*  Setting State here for Rockets Launches and Launchpads   *//





// ---------- Map for NavBar Rockets Launches Launchpads ---------- //
    const allRockets = (
        <MenuItem>
            Rocket
        </MenuItem>
    )

    const allLaunches = (
        <MenuItem>
            Launch
        </MenuItem>
    )

    const allLaunchpads = (
        <MenuItem>
            Launchpad
        </MenuItem>
    )

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
                                    {allRockets}
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
                                    {allLaunches}
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
                                    {allLaunchpads}
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