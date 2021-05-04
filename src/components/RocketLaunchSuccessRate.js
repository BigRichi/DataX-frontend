import { Box, Spacer, Center, Flex, Button, Grid, Image, Text, GridItem, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"
import {Bar} from 'react-chartjs-2'

function RocketLaunchSuccessRate({allRockets}) {
    
    const rocketNames = allRockets.map(al => al.name)

    const rocketSuccess = allRockets.map(al => al.successful_launches_rate)

    const rocketUnsuccessful = allRockets.map(al => al.unsuccessful_launches_rate)

    const data = {
        labels: rocketNames,
        datasets: [
            {
                type: 'bar',
                label: '% Successful',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: rocketSuccess,
            },
            {
                type: 'bar',
                label: '% Unsuccessful',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: rocketUnsuccessful,
            }
        ]
    };


    return (
        <Flex padding="5" justifyContent="center" alignItems="center"  width="100%">
            <Box width="900px">
                <Bar
                    data={data}
                    options={{
                    maintainAspectRatio: true
                    }}
                />
            </Box>
        </Flex>
    )
}

export default RocketLaunchSuccessRate