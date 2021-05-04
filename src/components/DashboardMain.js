import { Box, Spacer, Center, Flex, Button, Grid, Image, Text, GridItem, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"
import RocketLaunchSuccessRate from './RocketLaunchSuccessRate'
import { format } from "date-fns"

function DashboardMain({allRockets, allLaunches, allLaunchpads}) {


    const seeLaunches = allLaunches.map(l => {
        if (l.upcoming == true){
            return(
                <Box key={l.id} padding="4">
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md">
                    {l.name} Launch on {l.launch_date_time.substring(0,10)}
                    </Text>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md">
                    Launching the {l.rocket.name} from {l.launchpad.full_name}
                    </Text>
                </Box>
            )
        }else {
            return null
        }
    })

    return(
        <Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" >
                <RocketLaunchSuccessRate allRockets={allRockets}/>
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.200, blue.900)" >
                <Flex>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="4xl">Upcoming Launches </Text>
                    {seeLaunches}
                </Flex>
            </Box>
        </Box>
    )
}

export default DashboardMain