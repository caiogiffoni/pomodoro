import { Box, Icon, Text } from "@chakra-ui/react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
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
        <Box display="flex" mt="15px" gap="50px">
          <Box fontSize="30px">
            <Text>Break Length</Text>
            <Box
              display="flex"
              gap="20px"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={AiOutlineArrowDown} />
              <Text>5</Text>
              <Icon as={AiOutlineArrowUp} />
            </Box>
          </Box>
          <Box fontSize="30px">
            <Text>Session Length</Text>
            <Box
              display="flex"
              gap="20px"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={AiOutlineArrowDown} />
              <Text>25</Text>
              <Icon as={AiOutlineArrowUp} />
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
          <Text fontSize="30px">Session</Text>
          <Text fontSize="80px">25:00</Text>
        </Box>
        {/* Controls */}
        <Box mt="20px" display="flex" gap="12px">
          <Icon w="40px" h="40px" as={BsFillPlayFill} />
          <Icon w="40px" h="40px" as={BsFillPauseFill} />
          <Icon w="40px" h="40px" as={BiRefresh} />
        </Box>
        <Text>Coded by</Text>
        <Text color="teal.200">Caio Giffoni</Text>
      </Box>
    </Box>
  );
}

export default App;
