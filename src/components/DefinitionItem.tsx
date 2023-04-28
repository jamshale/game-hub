import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const DefinitionItem = ({ title, children }: Props) => {
  return (
    <Box marginY={5}>
      <Text color="gray.600" fontWeight="bold" as="dt">
        {title}
      </Text>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
