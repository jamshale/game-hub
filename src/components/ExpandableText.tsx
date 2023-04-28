import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!text) return null;

  if (text.length < limit) return <Text>{text}</Text>;

  return (
    <Text>
      {expanded ? text : text.substring(0, limit) + "..."}
      <Button
        marginLeft={1}
        colorScheme="yellow"
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
