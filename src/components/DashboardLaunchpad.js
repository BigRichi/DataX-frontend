import { Box, Spacer, Center, Flex, Button, Grid, Image, Text, GridItem, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"

function DashboardLaunchpad({singleLaunchpad}) {

    return(
        <Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" >
                <div>LaunchPads</div>
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.200, blue.900)" >

            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" >
                
            </Box>
        </Box>
    )
}

export default DashboardLaunchpad