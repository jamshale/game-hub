import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";
import ExpandableText from "../components/ExpandableText";
import GamesAttributes from "../components/GamesAttributes";
import GameTrailer from "../components/GameTrailer";
import ScreenShots from "../components/ScreenShots";
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
      <GamesAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <ScreenShots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
