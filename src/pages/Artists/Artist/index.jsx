import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../services/spotify/login";

import { AlbumInfo, Albums, ArtistContainer, ArtistInfo } from "./styles";
import { Button } from "../../../components/Button";
import { Section } from "../../../components/GlobalStyles/shared";
import { formatFollowers } from "../../../components/util/formatFollowers";

export const Artist = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [genres, setGenres] = useState([]);
  const [images, setImages] = useState([]);
  const [popularity, setPopularity] = useState(null);
  const [href, setHref] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [totalAlbums, setTotalAlbums] = useState(null);

  const fetchArtist = (artistId) => {
    apiClient.get(`/artists/${artistId}`).then((response) => {
      setArtist(response.data.name);
      setFollowers(response.data.followers.total);
      setGenres(response.data.genres);
      setImages(response.data.images);
      setPopularity(response.data.popularity);
      setHref(response.data.external_urls.spotify);
    });
  };

  const fetchAlbums = (artistId) => {
    apiClient
      .get(`/artists/${artistId}/albums?include_groups=album%2Csingle&limit=48`)
      .then((response) => {
        setAlbums(response.data.items);
        setTotalAlbums(response.data.total);
        console.log(response.data);
      });
  };

  const loadMoreAlbums = () => {
    apiClient
      .get(
        `/artists/${artistId}/albums?include_groups=album%2Csingle&limit=48&offset=${albums.length}`
      )
      .then((response) => {
        setAlbums([...albums, ...response.data.items]);
      });
  };

  const formatAlbumName = (name) => {
    return name.length > 30 ? name.slice(0, 30) + "..." : name;
  };

  useEffect(() => {
    fetchArtist(artistId);
    fetchAlbums(artistId);
  }, [artistId]);

  return (
    <Section>
      <ArtistContainer>
        <img src={images[0]?.url} alt={artist} />
        <div>
          <ArtistInfo>
            <h1>{artist}</h1>
            <p>Followers: {formatFollowers(followers)}</p>
            <p>Genres: {genres.join(", ")}</p>
            <p>Popularity: {popularity}%</p>
            <p>Total Releases: {totalAlbums} albums/singles</p>
            <a href={href || "#"} target="_blank" rel="noreferrer">
              Open in Spotify
            </a>
          </ArtistInfo>
        </div>
      </ArtistContainer>
      <Section>
        <h2>Albums/Singles</h2>
        <Albums>
          {albums.map((album) => (
            <div>
              <a
                href={album.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                <div key={album.id}>
                  <img src={album.images[0].url} alt={album.name} />
                </div>
              </a>
              <AlbumInfo>
                <h3>{album.name}</h3>
                <p>
                  artists:{" "}
                  {album.artists.map((artist) => artist.name).join(", ")}
                </p>
                <p>type: {album.album_type}</p>
                <p>released: {album.release_date}</p>
                <p>total tracks: {album.total_tracks}</p>
              </AlbumInfo>
            </div>
          ))}
        </Albums>
        <Button onClick={loadMoreAlbums}>Load More</Button>
      </Section>
    </Section>
  );
};
