import { Box, Button, Hide, Show, Text } from "@chakra-ui/react"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { IoIosMenu } from "react-icons/io"

import { useSidebar } from "@/store/useSidebar"

export const Header = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <Box  w='full' bg='white' display="flex" justifyContent='space-between' alignItems='center' py='2' px='6'>
      <IoIosMenu fontSize='25' cursor='pointer' onClick={toggleSidebar} />
      <Text w='100%' textAlign='center'>Lesson 30 of 33</Text>

      <Button variant='outline'>
        <Show below='md'>
          <FaArrowAltCircleRight />
        </Show>
        <Hide below='md'>
          Next Lesson
        </Hide>
      </Button>
    </Box>
  )
}
