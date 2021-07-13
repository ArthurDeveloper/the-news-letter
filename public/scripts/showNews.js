// let newsContainerEl = ;

(async () => {
    const news = await getNews();
    alert(news);
    document.querySelector('#news').textContent = news; 
})()