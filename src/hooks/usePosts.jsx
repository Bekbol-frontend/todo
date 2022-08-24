import React from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    return posts;
  }, [posts, sort]);

  return sortedPosts;
};

export const useSortedAndQueryPosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        post.body.toLowerCase().includes(query.toLowerCase().trim())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
