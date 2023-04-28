import APIClient from "../services/api-client";
import usePlatforms from "./usePlatforms";
import { Platform } from "../entities/Platform";

const usePlatform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms.results.find((p) => p.id === id);
}

export default usePlatform;