import { Box, Button,  Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box  w='full' bg='white' display="flex" justifyContent='space-between' alignItems='center' py='2' px='6'>
     <span></span>
      <Text w='100%' textAlign='center'>30 of 33</Text>
      <Button variant='outline' fontWeight='normal' color='red'>
          Leave
      </Button>
    </Box>
  )
}
