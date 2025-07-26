const bodyInput = document.getElementById('body-input');
const containerInput = document.getElementById('container-input');
const container = document.querySelector('.container');

const isChangeBodyTheme = JSON.parse(localStorage.getItem('changeBodyTheme'));
const isChangeContainerTheme = JSON.parse(localStorage.getItem('changeContainerTheme'));

const changeBodyTheme = () => {
    if (bodyInput.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('changeBodyTheme', true);
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('changeBodyTheme', false);
    }
}

const changeContainerTheme = () => {
    if (containerInput.checked) {
        container.classList.add('dark');
        localStorage.setItem('changeContainerTheme', true);
    } else {
        container.classList.remove('dark');
        localStorage.setItem('changeContainerTheme', false);
    }
}

if(isChangeBodyTheme) {
    bodyInput.checked = true;
}

if(isChangeContainerTheme) {
    containerInput.checked = true;
}

changeBodyTheme()
changeContainerTheme()


bodyInput.addEventListener('change', () => {
    changeBodyTheme();
    containerInput.checked = bodyInput.checked;
    changeContainerTheme()
})

containerInput.addEventListener('change', () => {
    changeContainerTheme()
})

