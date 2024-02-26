import { Box, Button,  Text } from "@chakra-ui/react"
import { IoIosMenu } from "react-icons/io"

import { useSidebar } from "@/store/useSidebar"

export const Header = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <Box  w='full' bg='white' display="flex" justifyContent='space-between' alignItems='center' py='2' px='6'>
      <IoIosMenu fontSize='25' cursor='pointer' onClick={toggleSidebar} />
      <Text w='100%' textAlign='center'>30 of 33</Text>
      <Button variant='outline' fontWeight='normal' color='red'>
          Leave
      </Button>
    </Box>
  )
}
