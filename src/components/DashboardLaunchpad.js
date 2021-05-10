import { Box, Spacer, Center, Flex, Button, Grid, Image, Text, GridItem, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"

function DashboardLaunchpad({singleLaunchpad}) {
    console.log(singleLaunchpad)
    const details = () => {
        return ( 
            <Grid templateColumns="repeat(5, 1fr)"  gap={0} padding={5} >
                <GridItem colStart={2} colSpan={3} paddingTop={5} paddingLeft={5} paddingRight={5}>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        This is the {singleLaunchpad.full_name} launchpad
                    </Text>
                    <br/>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Located in {singleLaunchpad.region} 
                    </Text>
                    <br/>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Details: {singleLaunchpad.details}
                    </Text>
                    <br/>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Total Launches: {singleLaunchpad.launches.length}
                    </Text>
                </GridItem>
            </Grid>
        )
    }


    return(
        <Box>
            <Box w="100%" h="100%" bgGradient="linear(to-t, blue.900, blue.200)" paddingBottom="20">
                {details()}
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.200, blue.900)" >

            </Box>
        </Box>
    )
}

export default DashboardLaunchpad