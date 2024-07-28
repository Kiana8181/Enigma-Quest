import { Box, Center, List, ListItem, Text, Divider } from "@chakra-ui/react";
import games from "../data/games";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const GamesList = () => {
  return (
    <>
      <Navbar />
      <Center marginY={10}>
        <Box boxSize="70%">
          <Text fontFamily="arcade1" textAlign="center">
            Dive into the realm of Enigma Quest, where each challenge unveils a
            new layer of intrigue and intellect. Engage in our series of
            mind-bending puzzles, all leading you to a singular 5-digit code
            that holds the key to your victory. Test your wits and unravel the
            clues as you progress through interconnected phases, each designed
            to push your problem-solving skills to the limit. Whether you're
            going solo or teaming up with friends, Enigma Quest promises a
            captivating journey filled with mystery and excitement. Can you
            decode the secrets and emerge triumphant? The challenge awaits.
          </Text>
        </Box>
      </Center>
      <Divider />
      <Text fontFamily="arcade" textAlign="center" marginY={10}>
        List of missions
      </Text>
      <Center>
        <List>
          {games.map((game) => (
            <ListItem key={game.id} marginBottom={2}>
              <Link
                to={`/Enigma-Quest/games/${game.id}`}
                style={{ fontSize: "24px" }}
              >
                {game.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Center>
    </>
  );
};

export default GamesList;
