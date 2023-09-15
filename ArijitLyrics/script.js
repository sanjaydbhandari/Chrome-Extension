fetch("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=93181")
  .then((data) => data.json())
  .then((lyricsData) => {
    const lyrics = lyricsData.lyrics_excerpt;
    const lyricsElement = document.getElementById("lyrics");
    lyricsElement.innerHTML = lyrics;

    const artist = lyricsData.artist;
    const artistElement = document.getElementById("artist");
    artistElement.innerHTML = artist;

    const song = lyricsData.song;
    const songElement = document.getElementById("song");
    songElement.innerHTML = song;

  });
