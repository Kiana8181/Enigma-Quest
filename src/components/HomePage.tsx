import { Button, Center, Image } from "@chakra-ui/react";
import homePagePic from "../images/Escape room-rafiki.svg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Center>
        <Image src={homePagePic} alt="backgroundPic" boxSize="60%" />
      </Center>
      <Center>
        <Button
          colorScheme="red"
          fontFamily="arcade1"
          size="lg"
          marginBottom={5}
        >
          <Link to="/Enigma-Quest/games">Start</Link>
        </Button>
      </Center>
    </>
  );
};

export default HomePage;
