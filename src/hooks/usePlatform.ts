import APIClient from "../services/api-client";
import usePlatforms, { Platform } from "./usePlatforms";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms.results.find((p) => p.id === id);
}

export default usePlatform;