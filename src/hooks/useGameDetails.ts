import { useQuery } from '@tanstack/react-query';
import Game from '../entities/Game';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGameDetails = (slug: string) => {
    return useQuery<Game, Error>({
        queryKey: ["game-detail", slug],
        queryFn: () => apiClient.get(slug)
    })
}

export default useGameDetails