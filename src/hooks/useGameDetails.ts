import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

const apiClient = new APIClient<GameDetail>('/games');

export interface GameDetail {
    name: string;
    description_raw: string
}

const useGameDetails = (slug: string) => {
    return useQuery<GameDetail, Error>({
        queryKey: ["game-detail", slug],
        queryFn: () => apiClient.get(slug)
    })
}

export default useGameDetails