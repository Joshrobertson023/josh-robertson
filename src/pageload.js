import { list } from "postcss";
import { listings } from "./listings";

const content_container = document.getElementById('projectsScroll');
const RECENTS_LENGTH = 3;

function renderPageLoad() {
   const recentsBtn = document.getElementById('recents'),
         cBtn = document.getElementById('c'),
         webappsBtn = document.getElementById('web-apps'),
         websitesBtn = document.getElementById('websites');

   renderRecents();

   recentsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      setActive(recentsBtn);
      renderRecents();
   });

   cBtn.addEventListener('click', function(e) {
      e.preventDefault();
      setActive(cBtn);
      renderCategory('c');
   });

   webappsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      setActive(webappsBtn);
      renderCategory('web-apps');
   });

   websitesBtn.addEventListener('click', function(e) {
      e.preventDefault();
      setActive(websitesBtn);
      renderCategory('websites');
   })

   function setActive(activeLink) {
      const links = document.querySelectorAll('.link');
      for(const link of links)
         link.className = 'link';
      activeLink.classList.add('active-link');
      }

   function renderRecents() {
      const cards = document.querySelectorAll('.project-card');
      for(const card of cards)
         card.remove();
   
      for(let i = 0; i < RECENTS_LENGTH; i++)
         renderCardInverse(listings[i].displayTitle, 
                           listings[i].learningOutcomes, 
                           listings[i].builtWith,
                           listings[i].liveLink,
                           listings[i].gitLink,
                           listings[i].imageSrc);
   }

   function renderCategory(category) {
      const cards = document.querySelectorAll('.project-card');
      for(const card of cards)
         card.remove();

      for (let i = 0; i < listings.length; i++) {
         if (listings[i].category === category) {
            renderCardInverse(listings[i].displayTitle, 
               listings[i].learningOutcomes, 
               listings[i].builtWith,
               listings[i].liveLink,
               listings[i].gitLink,
               listings[i].imageSrc);
         }
      }
   }
   
   // --- Render inverse card ---
   function renderCardInverse(title, learningOutcomes, builtWith, liveLink, gitLink, imgSrc) {
   
   const card_container = document.createElement('div');
   card_container.classList.add('project-card');
   content_container.appendChild(card_container);
   
   // Text
   const textDiv1 = document.createElement('div');
   textDiv1.classList.add('text', 'inverse');
   card_container.appendChild(textDiv1);
   
   const headingCard1 = document.createElement('div');
   headingCard1.classList.add('card-heading');
   headingCard1.textContent = title;
   textDiv1.appendChild(headingCard1);
   
   const learningText = document.createElement('p');
   learningText.textContent = 'Learning Outcomes';
   textDiv1.appendChild(learningText);
   
   const hrTop = document.createElement('hr');
   textDiv1.appendChild(hrTop);
   
   const learningOutcomesDiv = document.createElement('p');
   learningOutcomesDiv.textContent = learningOutcomes;
   textDiv1.appendChild(learningOutcomesDiv);
   
   const hrBottom = document.createElement('hr');
   textDiv1.appendChild(hrBottom);
   
   const builtWithDiv = document.createElement('p');
   builtWithDiv.textContent = builtWith;
   textDiv1.appendChild(builtWithDiv);
   
   const buttonsDiv = document.createElement('div');
   buttonsDiv.classList.add('card-buttons');
   textDiv1.appendChild(buttonsDiv);
   
   if(liveLink !== '') {
      const liveSiteLink = document.createElement('a');
      liveSiteLink.href = liveLink;
      liveSiteLink.target = '_blank';
      liveSiteLink.textContent = 'Live Site ->';
      buttonsDiv.appendChild(liveSiteLink);
   }
   const gitLinkA = document.createElement('a');
   gitLinkA.href = gitLink;
   gitLinkA.target = '_blank';
   gitLinkA.textContent = 'Github Repo ->';
   buttonsDiv.appendChild(gitLinkA);
   
   // Image
   const imageDiv = document.createElement('div');
   imageDiv.classList.add('image');
   card_container.appendChild(imageDiv);
   const img = new Image();
   img.src = imgSrc;
   img.width = '600';
   img.height = '350';
   imageDiv.appendChild(img);
   }
}

export { renderPageLoad };