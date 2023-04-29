import { useQuery } from '@tanstack/react-query';
import { Trailer } from '../entities/Trailer';
import APIClient from '../services/api-client';
import ms from 'ms';


const useGameTrailers = (id: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
    return useQuery({
        queryKey: ['trailers', id],
        queryFn: apiClient.getAll,
        staleTime: ms('1d')
    })
}

export default useGameTrailers