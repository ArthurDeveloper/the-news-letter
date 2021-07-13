async function getNews() {
    const news = await fetch('https://the-news-letter.herokuapp.com/api/news')
                    .then((res) => {
                        return res;
                    })
                    .catch((error) => {
                        console.log(`Error while trying to get the news: ${error}`)
                    });

    return news;
} 