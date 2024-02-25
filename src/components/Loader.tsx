import { Box, Spinner } from '@chakra-ui/react'

export const Loader = () => {
  return (
    <Box position='absolute' width='100%' h='100vh' bg='#edf2f6' left='0' top='0' zIndex='999' display='flex' alignItems='center' justifyContent='center'>
         <Spinner size='xl' />
    </Box>
  )
}
