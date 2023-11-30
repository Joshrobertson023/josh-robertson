import { list } from "postcss";
import { listings } from "./listings";

const content_container = document.getElementById('projectsScroll');

function render() {

   for(let i = 0; i < 5; i++)
   renderCardInverse(listings[i].displayTitle, 
                     listings[i].learningOutcomes, 
                     listings[i].built,
                     listings[i].liveLink,
                     listings[i].gitLink,
                     listings[i].image);
   // for(let i = 0; i < 2; i++) {
   //    // let inverse = listings[i].inverse;
   //    // if(inverse)
   //    //    renderCardInverse(listings[i].displayTitle, listings[i].learningOutcomes);
   //    // else
   //    //    renderCardOriginal(listings[i].displayTitle, listings[i].learningOutcomes);

   //    // If over 4, add hiden class
   // }

   // --- Card ---
   function renderCardInverse(title, learningOutcomes, builtWith, liveLink, gitLink, imgSrc) {

      const projectCard1 = document.createElement('div');
      projectCard1.classList.add('project-card');
      content_container.appendChild(projectCard1);
   
      // Text
      const textDiv1 = document.createElement('div');
      textDiv1.classList.add('text', 'inverse');
      content_container.appendChild(textDiv1);
   
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
      if(liveLink !== '') {
         const liveSiteLink = document.createElement('a');
         liveSiteLink.href = liveLink;
         liveSiteLink.textContent = 'Live Site ->';
         buttonsDiv.appendChild(liveSiteLink);
      }
      const gitLinkA = document.createElement('a');
      gitLinkA.href = gitLink;
      gitLinkA.textContent = 'Github Repo ->';
      buttonsDiv.appendChild(gitLinkA);

      // Image
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');
      const img = document.createElement('img');
      img.src = imgSrc;
      img.width = '600px';
      img.height = '350px';
      imageDiv.appendChild(img);
   }

   // function renderCardOriginal(title, learningOutcomes) {
   //    const projectCard1 = document.createElement('div');
   //    projectCard1.classList.add('project-card');
   //    content_container.appendChild(projectCard1);
   
   //    const textDiv1 = document.createElement('div');
   //    textDiv1.classList.add('text', 'original');
   
   //    const headingCard1 = document.createElement('div');
   //    headingCard1.classList.add('card-heading');
   //    headingCard1.textContent = title;
   //    textDiv1.appendChild(headingCard1);
   
   //    const learningText = document.createElement('p');
   //    learningText.textContent = 'Learning Outcomes';
   //    textDiv1.appendChild(learningText);
   
   //    const hrRight = document.createElement('hr');
   //    textDiv1.appendChild(hrRight);
   
   //    const learningOutcomesDiv = document.createElement('div');
   //    learningOutcomesDiv.textContent = learningOutcomes;
   //    textDiv1.appendChild(learningOutcomesDiv);
   // }
}

export {render};