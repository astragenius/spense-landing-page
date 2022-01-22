const navContainer = document.querySelector("[data-visibile]");
const mobileBTN = document.getElementById('mobile-btn');


console.log(navContainer.dataset.visibile)

mobileBTN.addEventListener('click', () => {

   if(navContainer.dataset.visibile == 'false') {
       
       navContainer.dataset.visibile = 'true';
       
   } else {
       navContainer.dataset.visibile = 'false';
   }
   
   
   
});