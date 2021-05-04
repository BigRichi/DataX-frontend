import { Box, Spacer, Center, Flex, Button, Grid, Image, Text, GridItem, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"

function DashboardLaunch({singleLaunch}) {

    const details = () => {
        return ( 
            <Grid>

            </Grid>
        )
    }

    return(
        <Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" >
                {singleLaunch.name}
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.200, blue.900)" >

            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" >
                
            </Box>
        </Box>
    )
}

export default DashboardLaunch