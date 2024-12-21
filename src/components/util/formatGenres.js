export const formatGenres = (genres) => {
    if (genres.length === 1) {
      return genres[0];
    } else if (genres.length === 2) {
      return genres.join(" & ");
    } else if (genres.length > 2) {
      return genres.slice(0, 2).join(", ") + ` & ${genres.length - 2} more`;
    } else {
      return "non specified";
    }
  };