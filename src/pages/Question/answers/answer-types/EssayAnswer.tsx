import { useAnswer } from "@/store/useAnswer"
import { Flex, Textarea } from "@chakra-ui/react"

const EssayAnswer = () => {
    const { setEssayValue } = useAnswer()
    return (
        <Flex flexDirection='column' gap='3' mt='6' overflow='auto'>
            <Textarea onChange={(e) => setEssayValue(e.target.value)} />
        </Flex>
    )
}
export default EssayAnswer