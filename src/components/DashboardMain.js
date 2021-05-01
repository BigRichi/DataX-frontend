import { Box, Center, Button, Grid, Image, Text, GridItem} from "@chakra-ui/react"

function DashboardMain({allRockets, allLaunches, allLaunchpads}) {

    return(
        <Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" >
                <div>MAIN 1</div>
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.200, blue.900)" >
                <div>MAIN 2</div>
            </Box>
        </Box>
    )
}

export default DashboardMain