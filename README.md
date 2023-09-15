
Installation Instructions

Google Chrome / Microsoft Edge (Custom sites supported)

Download this repo as a ZIP file from GitHub.
Unzip the file and you should have a folder named bypass-paywalls-chrome-master.
In Chrome/Edge go to the extensions page (chrome://extensions or edge://extensions).
Enable Developer Mode.
Drag the bypass-paywalls-chrome-master folder anywhere on the page to import it (do not delete the folder afterwards).
Mozilla Firefox (Custom sites not supported)

Download and install the latest version


###Create Your Extension Files:

1.Create a manifest.json file in your project directory. This file describes your extension's metadata and settings.

CODE:
{
    "name":"English Lyrics",
    "version": "1.0.0",
    "description":"English Lyrics",
    "manifest_version": 3,
    "author":"Sanjay Bhandari",
    "action":{
        "default_popup": "index.html",
        "default_title": "English Lyrics",
        "default_icon": {
            "16": "logo.png",
            "48": "logo.png",
            "128": "logo.png"
          }
    }

}

2.Create an HTML file for your extension's popup.
CODE:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>English Lyrics</title>
  </head>
  <body>
    <div class="box">
      <div class="border">
        <div class="content center">
          <center>
            <p id="lyrics">Loading...</p>
            <p class="desp"> 
                <small id="song">Loading...</small> ,
                <small id="artist">Loading...</small>
            </p>
          </center>
        </div>
      </div>
    </div>
    <p class="title">English Lyrics<br /></p>
    <script src="script.js"></script>
  </body>
</html>


3.Create a JavaScript file for your extension's logic.
CODE:
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

4.Create any CSS files you need for styling.
CODE:
@import url("https://fonts.googleapis.com/css?family=Dancing+Script|Josefin+Sans:600");

:root {
  --white: #fff;
  --black: #232121;
  --grey: #4b4646;
  --lightpink: #ffb8d7;
  --darkpink: #ff0055;
  --sans: "josefin sans", sans serif;
}

body {
  background: var(--lightpink);
  color: var(--black);
  min-width: 450px;
  min-height: 350px;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95%;
  height: 83%;
  transform: translate(-50%, -50%);
  background: var(--pink);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 1.5rem var(--black);
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}

.border {
  position: relative;
  border: 5px solid var(--darkpink);
  border-radius: 5px;
  margin: 5px;
  padding: 3px;
  height: 90%;
}

#lyrics,
.title {
  font-weight: bold;
  text-shadow: 2px 1px 3px var(--darkpink);
  color: #fff;
}

.center {
  margin: 0 5px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  padding: 10px;
}

.desp {
  font-size: 12px;
  color: var(--grey);
  text-shadow: 2px 1px 3px var(--darkpink);
}


