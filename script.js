const bodyInput = document.getElementById('body-input');
const containerInput = document.getElementById('container-input');
const container = document.querySelector('.container');

bodyInput.addEventListener('change', () => {
    changeBodyTheme();
})

containerInput.addEventListener('change', () => {
    changeContainerTheme()
})

const changeBodyTheme = () => {
    if (bodyInput.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    containerInput.checked = bodyInput.checked;
    
    if (containerInput.checked) {
        container.classList.add('dark');
    } else {
        container.classList.remove('dark');
    }
}


const changeContainerTheme = () => {
    if (containerInput.checked) {
        container.classList.add('dark');
    } else {
        container.classList.remove('dark');
    }
}
