import {RadioGroup, HStack, Radio, Input, FormControl, FormLabel, FormHelperText, AspectRatio, Box, Text, Grid, GridItem} from "@chakra-ui/react"
import {useState, useEffect} from "react"


function DashboardLaunch({singleLaunch}) {

    const [allComments, setAllComments] = useState([])
    const [newComment, setNewComment] = useState(false)

    const lastLaunchVideo = () => {
        if (singleLaunch.webcast === null) {
            return "https://www.youtube.com/embed/05DqIGS_koU"
        }else{
            return singleLaunch.webcast.replace(/watch/g, "embed/").replace(/[?v=]/g,"").replace(/youtu.be/g,"youtube.com/embed") 
        }
    }

    const details = () => {
        return ( 
            <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(2, 1fr)" gap={6}>
                <GridItem colStart={2} colSpan={2} rowStart={1}>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        The {singleLaunch.name} Launch on of the {singleLaunch.rocket.name} happened on {singleLaunch.launch_date_time.substring(0,10)}
                    </Text>
                </GridItem>
                <GridItem colStart={2} colSpan={4} rowStart={2}>
                    <Text fontFamily="'Dancing Script', cursive" fontWeight="200" fontSize="md" >
                        Details: {singleLaunch.details}
                    </Text>
                </GridItem>
            </Grid>
        )
    }


    const handelForm = (e) => {
        e.preventDefault()
        const p = e.target.present.value
        const present = () => {
            if (p === "true"){
                return Boolean(p)
            }else{
                return Boolean(!p)
            }
        }
        
        const newComment = {
            launch_id: singleLaunch.id,
            reviewer: e.target.reviewer.value,
            present_at_launch: present(),
            comment: e.target.comment.value
        }

        fetch("http://localhost:3000/launch_reviews",{
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        //set all comments
    }
// Move this up
    useEffect(() => {
        fetch(`http://localhost:3000/launches/${singleLaunch.id}`)
        .then(resp => resp.json())
        .then(launch => {
            setAllComments(launch.launch_reviews)
        })
    }, [newComment])

    const comments = () =>{

    }

    return(
        <Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" padding="2">
                {details()}
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.200, blue.900)" >
                <AspectRatio maxW="500px" ratio={1}>
                    <iframe
                        title="Last Launch"
                        src={lastLaunchVideo()}
                        allowFullScreen
                    />
                </AspectRatio>
            </Box>
            <Box w="100%" h="500px" bgGradient="linear(to-t, blue.900, blue.200)" >
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
            </Box>

        </Box>
    )
}

export default DashboardLaunch