import useGameTrailers from "../hooks/useGameTrailers";
import ReactPlayer from "react-player";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailers(gameId);

  if (isLoading || error) return null;

  const firstTrailer = data?.results[0];

  if (!firstTrailer) return null;

  return (
    <ReactPlayer
      url={firstTrailer.data.max}
      width="100%"
      controls
      muted={true}
      playing={true}
    />
  );
};

export default GameTrailer;
