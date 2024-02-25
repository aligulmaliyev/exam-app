import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Box, Button, FormControl, Input, FormLabel, Heading } from '@chakra-ui/react'

// import { EXAM_KEY } from '@/constants';
// import { useCoreService } from '@/hooks/useCoreService';
// import { useNotify } from '@/hooks/useNotify';
// import { TExam } from '@/types/exam';


const SignIn = () => {
  const [examCode, setExamCode] = useState<string>('');
  // const { postRequest } = useCoreService();
  // const navigate = useNavigate();
  // const { errorToast } = useNotify();

  const signIn = async () => {
    // navigate('/app/pre-question');
    // if (examCode == null || examCode == undefined || examCode == '') {
    //   errorToast({ description: 'The exam code cannot be empty.' });
    //   return;
    // }

    // const result = await postRequest<{ Code: string }, TExam>('/training/signin', { Code: examCode })

    // if (result?.data?.ShowResult && result.data.FinishedExam) {
    //   navigate('/app/answers');
    // }

    // else if (result.data && result.data.FullName && !result.data.FinishedExam) {
    //   localStorage.setItem(EXAM_KEY, JSON.stringify(result.data));
    //   navigate('/app/pre-question');
    // }
    // else if (result.statusText == "Unknown Error") {
    //   errorToast({ description: ' The server isn\'t responding. ;(' })
    // }
    // else {
    //   errorToast({ description: 'The exam code you have entered is invalid. ;(' })
    // }
  }

  return (
    <Box display='flex' alignItems='center' justifyContent='center' h='100vh'>
      <Card bg='white' w={'24rem'} >
        <CardHeader>
          <Heading as='h4' size='md' textAlign='center'>
            Sign in to start an Exam
          </Heading>
        </CardHeader>
        <CardBody>
          <FormControl>
            <FormLabel fontSize={'md'} htmlFor="examCode" >
              Exam Code
            </FormLabel>
            <Input name='examCode' id='examCode' defaultValue={examCode} onChange={(e) => setExamCode(e.target.value)} />
          </FormControl>
        </CardBody>
        <CardFooter display='flex' justifyContent='center'><Button onClick={signIn} colorScheme='blue'>SIGN IN</Button></CardFooter>
      </Card>
    </Box>
  )
}
export default SignIn;