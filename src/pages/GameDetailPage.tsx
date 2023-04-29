import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
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
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description_raw} />
        <GamesAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <ScreenShots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
