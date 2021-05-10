import { AspectRatio, Box, Stack,Image, Text,  Grid, GridItem} from "@chakra-ui/react"

function DashboardRocket({singleRocket}) {

    const imgBoxSize = `${95 / singleRocket.flickr_images.length}%`
    
    const lastLaunchVideo = () => {
        if (singleRocket.last_launch === null) {
            return "https://www.youtube.com/embed/05DqIGS_koU"
        }else{
            return singleRocket.last_launch.webcast.replace(/watch/g, "embed/").replace(/[?v=]/g,"").replace(/youtu.be/g,"youtube.com/embed") 
        }
    }
    
    const oneImage = singleRocket.flickr_images.map(img => {
        return(
            <Image
                alignSelf="center"
                padding={2}
                key={img}
                borderRadius="full"
                boxSize="50%"
                src={img}
                alt={singleRocket.name}
            />
        )
    })

    const details = () => {
        return ( 
            <Grid templateColumns="repeat(5, 1fr)"  gap={0} padding={5} >
                <GridItem colStart={2} colSpan={3} paddingTop={5} paddingLeft={5} paddingRight={5}>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        This is the {singleRocket.name} rocket
                    </Text>
                    <br/>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Height: {singleRocket.height} meters
                    </Text>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Diameter:   {singleRocket.diameter} meters
                    </Text>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Mass:       {singleRocket.mass} kg
                    </Text>
                    <br/>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Details: {singleRocket.description}
                    </Text>
                    <br/>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Total Launches: {singleRocket.launches.length}
                    </Text>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Cost Per launches: ${singleRocket.cost_per_launch}
                    </Text>
                </GridItem>
            </Grid>
        )
    }
    
    return(
        <Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)">
                {details()}
            </Box>
            <Box w="100%" maxH="500px" overflowY="scroll"  padding={5} bgGradient="linear(to-t, blue.200, blue.900)">
                <Stack direction="column" >
                    {oneImage}
                </Stack>
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" padding={5} align="center" >
                <AspectRatio w="450px" ratio={1}  >
                    <iframe
                        title="Last Launch"
                        src={lastLaunchVideo()}
                        allowFullScreen
                    />
                </AspectRatio>
            </Box>
        </Box>
    )
}

export default DashboardRocket