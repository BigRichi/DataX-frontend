import { Box, Flex, Text, Grid, GridItem} from "@chakra-ui/react"
import RocketLaunchSuccessRate from './RocketLaunchSuccessRate'
import { format } from "date-fns"
import UpcomingLaunchCard from "./UpcomingLaunchCard"

function DashboardMain({allRockets, allLaunches, allLaunchpads}) {


    const seeLaunches = allLaunches.map(l => {
        if (l.upcoming == true){
            return(
                <Box key={l.id} padding="4">
                    <UpcomingLaunchCard l={l} />
                </Box>
            )
        }else {
            return null
        }
    })

    return(
        <Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" paddingBottom="20">
                <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="4xl"> Rocket Launch Success rate  </Text>
                <RocketLaunchSuccessRate allRockets={allRockets}/>
            </Box>
            <Box w="100%" h="500px" overflow="scroll" bgGradient="linear(to-t, blue.200, blue.900)" paddingTop="20" paddingBottom="20">
                <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="4xl">Upcoming Launches </Text>
                {seeLaunches}
            </Box>
        </Box>
    )
}

export default DashboardMain