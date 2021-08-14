(async () => {
    const news = await getNews();

    document.querySelector('#news').style.marginTop = '120px';

                    // Reverte a ordem para as notícias mais recentes aparecerem primeiro
    for (let key of Object.keys(news).reverse()) {
        news[key].title  = news[key].title;
        const currentNew = document.createElement('div');
        const currentNewTitleSpan = document.createElement('span');
        const currentNewContentLink = document.createElement('a');
        currentNew.classList.add('new');
        currentNewTitleSpan.classList.add('new-title');
        currentNewContentLink.classList.add('new-content-link')
        currentNewTitleSpan.textContent = news[key].title;
        currentNewContentLink.setAttribute('href', `/new/${key}`);
        currentNewContentLink.textContent = 'Ver notícia';
        currentNew.appendChild(currentNewTitleSpan);
        currentNew.appendChild(currentNewContentLink);
        document.querySelector('#news').appendChild(currentNew);
    }

    const loadingEl = document.querySelector('#loading-advice');

    loadingEl.parentNode.parentNode.removeChild(loadingEl.parentNode);
    loadingEl.parentNode.removeChild(loadingEl);
})();