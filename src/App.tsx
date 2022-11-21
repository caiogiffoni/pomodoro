import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";

function App() {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgColor="#1E555C"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="500px"
        minH="440"
        color="white"
        fontFamily="Times new roman"
        display="flex"
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Text fontSize="50px">25 + 5 Clock</Text>
        {/* Set Time Components */}
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          mt="15px"
          gap={["10px", "10px", "50px"]}
        >
          <Box fontSize="30px">
            <Text id="break-label">Break Length</Text>
            <Box
              display="flex"
              gap="20px"
              justifyContent="center"
              alignItems="center"
            >
              <Icon id="break-decrement" as={AiOutlineArrowDown} />
              <Text id="break-length">5</Text>
              <Icon id="break-increment" as={AiOutlineArrowUp} />
            </Box>
          </Box>
          <Box fontSize="30px">
            <Text id="session-label">Session Length</Text>
            <Box
              display="flex"
              gap="20px"
              justifyContent="center"
              alignItems="center"
            >
              <Icon id="session-decrement" as={AiOutlineArrowDown} />
              <Text id="session-length">25</Text>
              <Icon id="session-increment" as={AiOutlineArrowUp} />
            </Box>
          </Box>
        </Box>
        {/* Clock */}
        <Box
          w="274px"
          h="194px"
          border="7px solid #13353a"
          borderRadius="50px"
          mt="20px"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text id="timer-label" fontSize="30px">
            Session
          </Text>
          <Text id="time-left" fontSize="80px">
            25:00
          </Text>
        </Box>
        {/* Controls */}
        <Box mt="20px" display="flex" gap="12px">
          <Box id="start_stop">
            <Icon w="40px" h="40px" as={BsFillPlayFill} mr="-20px" />
            <Icon w="40px" h="40px" as={BsFillPauseFill} />
          </Box>
          <Icon id="reset" w="40px" h="40px" as={BiRefresh} />
        </Box>
        {/* Contact */}
        <Text>Coded by</Text>
        <Text color="teal.200">Caio Giffoni</Text>
        <HStack spacing={5} mt="10px">
          <Box>
            <Link href="https://www.linkedin.com/in/caiocgfg" target="_blank">
              <Icon boxSize="30px" as={AiFillLinkedin} />
            </Link>
          </Box>
          <Box>
            <Link href="https://github.com/caiogiffoni" target="_blank">
              <Icon boxSize="30px" as={AiFillGithub} />
            </Link>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}

export default App;
