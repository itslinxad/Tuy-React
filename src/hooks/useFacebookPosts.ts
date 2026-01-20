import { useState, useEffect } from "react";
import { getFacebookPosts } from "../services/facebook/client";
import type {
  FacebookPostData,
  UseFacebookPostsResult,
} from "../services/facebook/types";

/**
 * Custom hook to fetch Facebook posts with caching and fallback
 *
 * Features:
 * - Fetches posts from Facebook Graph API
 * - Uses localStorage cache (15 minutes by default)
 * - Shows loading state with skeleton loaders
 * - Returns empty array when no posts available
 * - Logs errors to console for debugging
 *
 * @returns {UseFacebookPostsResult} Object containing posts, loading state, and error
 *
 * @example
 * ```tsx
 * const { posts, loading, error } = useFacebookPosts();
 *
 * if (loading) return <SkeletonLoader />;
 * return posts.map(post => <PostCard post={post} />);
 * ```
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

        // Detect hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
        // performance.navigation.type === 1 means reload
        // Check if it's a hard refresh by checking the performance entry
        const perfEntry = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        const isHardRefresh = perfEntry?.type === "reload";

        // Force refresh if hard reload detected
        const fetchedPosts = await getFacebookPosts(isHardRefresh);

        if (fetchedPosts.length > 0) {
          // Successfully fetched posts - limit to 10 latest posts
          const latestPosts = fetchedPosts.slice(0, 10);
          setPosts(latestPosts);
        } else {
          // API returned empty, no posts to display
          console.warn("[useFacebookPosts] API returned no posts");
          setPosts([]);
          // No error - empty is a valid state
        }
      } catch (err) {
        // Return empty posts on error
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
  }, []); // Run once on mount

  return { posts, loading, error };
}
