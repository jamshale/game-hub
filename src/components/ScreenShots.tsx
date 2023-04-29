import { SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const ScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (error || isLoading) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} padding={4}>
      {data?.results.map((p) => (
        <img key={p.id} src={p.image}></img>
      ))}
    </SimpleGrid>
  );
};

export default ScreenShots;
