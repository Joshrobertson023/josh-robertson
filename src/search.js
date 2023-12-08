import { renderPageLoad } from "./pageload";
import { listings } from "./listings";

function search() {
   document.getElementById('input').addEventListener('input', function(e) {
      const searchInput = e.target.value.toLowerCase();
      console.log(`Input detected: ${searchInput}`);

      const projectCards = document.querySelectorAll('.project-card');
   
      if(searchInput === "") {
         console.log('Removing all targets')
         projectCards.forEach(card => {
            card.classList.add('hiden');
         });
         return;
      }
   
      let searchResult = searchListings(listings, getLastIndex(), searchInput);
      const targetDiv = document.querySelector(`[data-name='${searchResult.targetTitle}']`);
      updateDisplayResults(targetDiv);
   
      function searchListings(listings, lastIndex, targetWord) {
         let looker = 0,
             targetLocation = 0,
             found = false;
   
         while(looker < lastIndex && !listings[looker].title.includes(targetWord))
            looker++;
         targetLocation = looker;
   
         if(listings[looker].title.includes(targetWord)) {
            found = true;
            console.log('Found')
         }
   
         let targetTitle = listings[targetLocation].title;
   
         return { targetLocation, found, targetTitle};
      }
   
      function updateDisplayResults(div) {
         projectCards.forEach(card => {
            card.classList.add('hiden');
         });
         console.log('Adding all targets')
      
         div.classList.remove('hiden');
      }
   
      function getLastIndex() {
         return listings.length - 1;
      }
   });
}

export { search };