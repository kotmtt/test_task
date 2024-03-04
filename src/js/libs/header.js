const openMenu = {
    init() {
        const clickButton = document.querySelectorAll('.close');
        clickButton.forEach((item) => {
            item.addEventListener('click', (e) => {
                item.parentElement.classList.toggle('header__open');
            });
        });
    }
};

export default openMenu;