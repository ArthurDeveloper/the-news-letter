const interval = setInterval(() =>  {

    const errorEl = document.querySelector('#errors');

    if (errorEl === null) {
        clearInterval(interval);
    } 

    else {
        errorEl.parentNode.removeChild(errorEl);
    }

}, 3000)