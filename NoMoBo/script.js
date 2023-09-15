
fetch("https://www.boredapi.com/api/activity")
// fetch("https://api.dictionaryapi.dev/api/v2/entries/en/digital")
    .then(data => data.json())
    .then(activityData => {        
            const activity = activityData.activity;
            const activityElement = document.getElementById('activity');
            activityElement.innerHTML = activity;
    })







// async function getMatchData(){
//     return await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=94639a5bbaf045649192487c8ad105e8")
//     .then(data => data.json())
//     .then(data => {
//         if(data.status != "ok")return;

//         const newsList = data.articles;

//         if(!newsList) return [];

//         const relevantData = newsList.map(news => `${news.title}, ${news.urlToImage}`);


//         document.getElementById("news").innerHTML = relevantData.map(news => `<li>${news}</li>`).join("\n");
//         return relevantData;
//     });
// }

// getMatchData();


//https://official-joke-api.appspot.com/random_joke