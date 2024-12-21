export const formatFollowers = (followers) => {
    if (followers < 1000) {
      return `${followers} followers`;
    } else if (followers < 1000000) {
      return `${(followers / 1000).toFixed(1)}K followers`;
    } else {
      return `${(followers / 1000000).toFixed(1)}M followers`;
    }
  };
