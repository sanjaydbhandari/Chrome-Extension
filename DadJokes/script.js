fetch("https://official-joke-api.appspot.com/random_joke")
  .then((data) => data.json())
  .then((jokeData) => {
    const setup = jokeData.setup;
    const setupElement = document.getElementById("joke");
    setupElement.innerHTML = setup;
    const punchline = jokeData.punchline;
    const punchlineElement = document.getElementById("punch");
    punchlineElement.innerHTML = punchline;
  });
