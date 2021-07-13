async function getNews() {
    const news = await fetch('http://thenewsletter.herokuapp.com/api/news')
                    .then((res) => {
                        return res.json();
                    })
                    .catch((error) => {
                        console.log(`Error while trying to get the news: ${error}`)
                    });

    return news;
} 