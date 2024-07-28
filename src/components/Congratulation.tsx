import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Congratulation = ({ isOpen, onOpen, onClose }: Props) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack>
            <GiPartyPopper />
            <Text>Congratulations!</Text>
          </HStack>
        </ModalHeader>
        <ModalBody>
          Congratulations, you have successfully escaped by solving the puzzles
        </ModalBody>
        <ModalFooter>
          <Button ml={3}>
            <Link to="/">Close</Link>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Congratulation;
