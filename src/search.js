function search() {
   const projectCards = document.querySelectorAll('.project-card');
   
   const listings = [
      {
         title: 'calculator',
      },
      {
         title: 'tic tac toe',
      },
      {
         title: 'searching algorithms',
      },
      {
         title: 'etch a sketch',
      }
   ]

   const searchInput = document.getElementById('input').value.toLowerCase();
   console.log(`${searchInput}`);

   if(searchInput === "") {
      projectCards.forEach(card => {
         card.classList.remove('hiden');
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

      if(listings[looker].title.includes(targetWord))
         found = true;

      let targetTitle = listings[targetLocation].title;

      return { targetLocation, found, targetTitle};
   }

   function updateDisplayResults(div) {
      projectCards.forEach(card => {
         card.classList.add('hiden');
      });
   
      div.classList.remove('hiden');
   }

   function getLastIndex() {
      return listings.length - 1;
   }
}

export { search };