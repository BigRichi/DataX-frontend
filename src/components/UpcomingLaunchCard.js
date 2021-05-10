import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
function UpcomingLaunchCard({l}) {
  
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            alt={l.rocket.name}
            src={l.rocket.flickr_images[0]}
            objectFit={'cover'}
          />
          <Box p={2}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'md'} fontWeight={500} fontFamily={'body'}>
                {l.name}
              </Heading>
              <Text color={'gray.500'}>Launch: {l.launch_date_time.substring(0,10)} </Text>
            </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{l.comment}</Text>
              </Stack>
          </Box>
        </Box>
      </Center>
    );
}

export default UpcomingLaunchCard