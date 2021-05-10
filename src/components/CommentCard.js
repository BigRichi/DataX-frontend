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
  
function CommentCard({review}) {
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
            src={
              'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'
            }
            objectFit={'cover'}
          />
          <Box p={2}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {review.reviewer ? review.reviewer : "anonymous"}
              </Heading>
            </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{review.comment}</Text>
              </Stack>
          </Box>
        </Box>
      </Center>
    );
}

export default CommentCard