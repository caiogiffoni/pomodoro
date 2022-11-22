import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { useEffect, useState } from "react";
import Countdown, { calcTimeDelta, CountdownApi } from "react-countdown";

interface ITime {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(Date.now() + 25 * 1000 * 60);
  // const [play, setPlay] = useState(true);
  const [session, setSession] = useState(true);

  let countdownApi: CountdownApi | null = null;

  const audio: HTMLVideoElement = document.querySelector(`#beep`)!;

  const renderer = ({ hours, minutes, seconds, completed }: ITime) => {
    // if (seconds == 0 && completed) {
    //   //   console.log("comple");
    //   //   // await new Promise((r) => setTimeout(r, 1000));
    //   startCount();
    // }
    // Render a countdown
    if (hours === 1) minutes = 60;
    return (
      <Text id="time-left" fontSize="80px">
        {minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 })}:
        {seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      </Text>
    );
  };

  const startCount = async () => {
    audio.play();
    await new Promise((r) => setTimeout(r, 1000));
    countdownApi?.stop();
    // console.log("chegio");
    // console.log(timeLeft);
    // console.log(breakLength);
    // console.log("cabou");
    if (session) {
      setTimeLeft(Date.now() + breakLength * 1000 * 60);
      // countdownApi?.start();
    } else {
      setTimeLeft(Date.now() + sessionLength * 1000 * 60);
    }
    countdownApi?.start();
    // setTimeLeft(Date.now() + breakLength * 1000);
    // console.log(countdownApi?.start);
    // console.log(countdownApi?.isStarted());
    // if (countdownApi?.isStarted()) {
    //   countdownApi?.pause();
    // } else {
    //   countdownApi?.start();
    // }
    setSession(!session);
  };

  useEffect(() => {
    setTimeLeft(Date.now() + sessionLength * 1000 * 60);
  }, [sessionLength]);

  const resetInfo = () => {
    setBreakLength(5);
    setSessionLength(25);
    countdownApi?.stop();
    setSession(true);
    audio.pause();
    audio.load();
  };

  const setRef = (countdown: Countdown | null): void => {
    if (countdown) {
      countdownApi = countdown.getApi();
    }
  };

  const sessionIncDec = (n: number) => {
    if (
      sessionLength + n === 0 ||
      sessionLength + n > 60 ||
      countdownApi?.isStarted()
    )
      return;
    setSessionLength(sessionLength + n);
  };
  const breakIncDec = (n: number) => {
    if (
      breakLength + n === 0 ||
      breakLength + n > 60 ||
      countdownApi?.isStarted()
    )
      return;
    setBreakLength(breakLength + n);
  };

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
              gap="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                as="button"
                id="break-decrement"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => breakIncDec(-1)}
              >
                <Icon as={AiOutlineArrowDown} />
              </Box>
              <Text id="break-length">{breakLength}</Text>
              <Box
                as="button"
                id="break-increment"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => breakIncDec(1)}
              >
                <Icon as={AiOutlineArrowUp} />
              </Box>
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
              <Box
                as="button"
                id="session-decrement"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => sessionIncDec(-1)}
              >
                <Icon as={AiOutlineArrowDown} />
              </Box>
              <Text id="session-length">{sessionLength}</Text>
              <Box
                as="button"
                id="session-increment"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => sessionIncDec(1)}
              >
                <Icon as={AiOutlineArrowUp} />
              </Box>
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
            {session ? "Session" : "Break"}
          </Text>
          <Countdown
            date={timeLeft}
            ref={setRef}
            autoStart={false}
            renderer={renderer}
            onComplete={(time, b) => {
              if (time.seconds === 0 && time.completed) startCount();
              // countdownApi?.stop();
              // countdownApi?.start();
              // startCount();
            }}
          />
          <audio
            id="beep"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          />
        </Box>
        {/* Controls */}
        <Box mt="20px" display="flex" gap="12px">
          <Box
            as="button"
            id="start_stop"
            onClick={() => {
              if (countdownApi?.isStarted()) {
                countdownApi?.pause();
              } else {
                countdownApi?.start();
              }
            }}
          >
            <Icon w="40px" h="40px" as={BsFillPlayFill} mr="-20px" />
            <Icon w="40px" h="40px" as={BsFillPauseFill} />
          </Box>
          <Box as="button" id="reset" onClick={() => resetInfo()}>
            <Icon w="40px" h="40px" as={BiRefresh} />
          </Box>
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
