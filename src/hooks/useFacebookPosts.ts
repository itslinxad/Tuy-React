import { useState, useEffect } from "react";
import { getFacebookPosts } from "../services/facebook/client";
import type {
  FacebookPostData,
  UseFacebookPostsResult,
} from "../services/facebook/types";

/**
 * @returns {UseFacebookPostsResult}
 */
export function useFacebookPosts(): UseFacebookPostsResult {
  const [posts, setPosts] = useState<FacebookPostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);

        const perfEntry = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        const isHardRefresh = perfEntry?.type === "reload";

        const fetchedPosts = await getFacebookPosts(isHardRefresh);

        if (fetchedPosts.length > 0) {
          const latestPosts = fetchedPosts.slice(0, 10);
          setPosts(latestPosts);
        } else {
          console.warn("[useFacebookPosts] API returned no posts");
          setPosts([]);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        console.error(
          "[useFacebookPosts] Failed to fetch posts:",
          errorMessage,
        );

        setPosts([]);
        setError(err instanceof Error ? err : new Error(errorMessage));
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return { posts, loading, error };
}
