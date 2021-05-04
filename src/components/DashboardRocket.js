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
                key={img}
                borderRadius="full"
                boxSize={imgBoxSize}
                src={img}
                alt={singleRocket.name}
            />
        )
    })
    
    return(
        <Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)"  opacity="99%">
                {singleRocket.name}
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.200, blue.900)" opacity="99%">
                <Stack direction="row">
                    {oneImage}
                </Stack>
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" opacity="99%">
                <AspectRatio maxW="500px" ratio={1}>
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