import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router";
import ExpandableText from "../components/ExpandableText";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} />
    </>
  );
};

export default GameDetailPage;
