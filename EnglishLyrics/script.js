fetch("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=817,6941,14792,17003,277,4814,4418,55847,5073,4787,15471,2295,70144,26859,713,264,597,355,331495,404534,1209,12455,611")
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

  // https://songsexcerpt.mohd.app/?ref=apislist.com
