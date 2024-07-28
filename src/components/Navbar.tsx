import { Flex, Text } from "@chakra-ui/react";
import { ColorModeSwitch } from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <>
      <Flex justify="end" margin={10}>
        <ColorModeSwitch />
      </Flex>
      <Text
        fontFamily="arcade"
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        textAlign="center"
        marginTop="90px"
        marginBottom={10}
      >
        Enigma Quest
      </Text>
    </>
  );
};

export default Navbar;
