const navContainer = document.getElementById('nav-container');
const mobileBTN = document.getElementById('mobile-btn');



mobileBTN.addEventListener('click', () => {

    navContainer.classList.toggle('hide');
});