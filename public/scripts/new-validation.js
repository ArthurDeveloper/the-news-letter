function validateForm() {
    const form = document.querySelector('#form-new');

    const newTitle = form.newTitle;

    if (newTitle.value.length > 100) {
        alert('Título ultrapassa o máximo de caracteres!');
        form.newTitle.focus();
        return false;
    } else if (newTitle.value.trim().length === 0) {
        alert('A notícia precisa ter um título!');
        form.newTitle.focus();
        return false;
    } 

    const newContent = form.newContent;

    if (newContent.length > 4000) {
        alert('Conteúdo ultrapassa o máximo de caracteres!');
        form.newContent.focus();
        return false;
    } else if (newContent.value.trim().length === 0) {
        alert('A notícia precisa ter um conteúdo!');
        form.newContent.focus();
        return false;
    }
    
    return true;
}

document.querySelector('#form-new').addEventListener('submit', (event) => {
    const validated = validateForm();

    if (!validated) {
        event.preventDefault();
    }
});
