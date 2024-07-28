import {
  Step,
  StepIndicator,
  StepStatus,
  Stepper,
  Box,
  StepTitle,
  StepSeparator,
  Flex,
} from "@chakra-ui/react";
import { AiFillUnlock, AiFillLock } from "react-icons/ai";

interface Props {
  steps: Steps[] | undefined;
  activeStep: number;
}

interface Steps {
  id: number;
  answer: string;
  lock: boolean;
}

const StepperPhase = ({ steps, activeStep }: Props) => {
  return (
    <Flex justifyContent="center" marginY={10}>
      <Box width="80%">
        <Stepper index={activeStep} colorScheme="yellow" size="lg">
          {steps?.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<AiFillUnlock />}
                  incomplete={<AiFillLock />}
                  active={<AiFillLock />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>Phase {step.id}</StepTitle>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
    </Flex>
  );
};

export default StepperPhase;
