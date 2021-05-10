import CommentCard from './CommentCard'
import {RadioGroup, HStack, Radio, Input, FormControl, FormLabel, FormHelperText, AspectRatio, Box, Text, Grid, GridItem} from "@chakra-ui/react"
import {useState, useEffect} from "react"


function DashboardLaunch({singleLaunch, allComments, handelForm}) {

    // const [allComments, setAllComments] = useState([])

    const lastLaunchVideo = () => {
        if (singleLaunch.webcast === null) {
            return "https://www.youtube.com/embed/05DqIGS_koU"
        }else{
            return singleLaunch.webcast.replace(/watch/g, "embed/").replace(/[?v=]/g,"").replace(/youtu.be/g,"youtube.com/embed") 
        }
    }

    console.log(lastLaunchVideo())
    console.log(singleLaunch.id)
    

    const details = () => {
        return ( 
            <Grid templateColumns="repeat(5, 1fr)"  gap={6}>
                <GridItem colStart={2} colSpan={3} rowStart={1}>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        The {singleLaunch.name} Launch on of the {singleLaunch.rocket.name} happened on {singleLaunch.launch_date_time.substring(0,10)}
                    </Text>
                    <br/>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Details: {singleLaunch.details}
                    </Text>
                </GridItem>
            </Grid>
        )
    }
    const mappedComments = singleLaunch.launch_reviews.map(review =>{
       return <CommentCard review={review}/> 
    })
    
    const comments = () =>{
        if (singleLaunch.launch_reviews.length > 0){
            return <Box w="100%" h="500px" bgGradient="linear(to-t, blue.200, blue.900)" padding="2" overflow="scroll">
                {mappedComments}
            </Box>
            
        }else{
            return null
        }
    }

    return(
        <Box>
            <Box w="100%"  bgGradient="linear(to-t, blue.900, blue.200)" paddingTop="20" paddingBottom="20">
                {details()}
            </Box>
            <Box w="100%" bgGradient="linear(to-t, blue.200, blue.900)" align="center" padding={5}>
                <AspectRatio maxW="500px" ratio={1}>
                    <iframe
                        title="Last Launch"
                        src={lastLaunchVideo()}
                        allowFullScreen
                    />
                </AspectRatio>
            </Box>
            <Box w="100%"  bgGradient="linear(to-t, blue.900, blue.200)" paddingTop="20" paddingBottom="20">
                <Grid templateColumns="repeat(5, 1fr)"  gap={6}>
                    <GridItem colStart={2} colSpan={3} rowStart={1}>
                        <form onSubmit={handelForm}>
                            <FormControl id="present" isRequired>
                                <FormLabel>Were you present at during the launch</FormLabel>
                                <RadioGroup>
                                    <HStack spacing="24px">
                                        <Radio value="true">Yes</Radio>
                                        <Radio value="false">No</Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                            <FormControl id="reviewer">
                                <FormLabel>Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="comment" isRequired>
                                <FormLabel>Comment</FormLabel>
                                <Input type="text" />
                                <FormHelperText>Please Leave a Comment on the Launch</FormHelperText>
                            </FormControl>
                            <Input type="submit"/>
                        </form>
                    </GridItem>
                </Grid>
            </Box>
            {comments()}
        </Box>
    )
}

export default DashboardLaunch