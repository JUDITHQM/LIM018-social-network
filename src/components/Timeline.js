//import { onNavigate } from "../main.js";
import { createPost, getPosts , getPost} from "../firebase/firebaseconfig.js";

export const Timeline = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al Timeline';

  /* ---------- */
  const principalContent = document.createElement('div');
  principalContent.className = 'principalContent';

  const publicationDiv = document.createElement('form');
  publicationDiv.className = 'publicationDiv';

  const textPublication = document.createElement('textarea');
  textPublication.placeholder = '¿Alguna novedad?';
  textPublication.setAttribute("type", "text");
  //textPublication.id = 'textPublication';


  const buttonPublication = document.createElement('button');
  //buttonPublication
  buttonPublication.textContent = 'Publicar';

  publicationDiv.appendChild(textPublication);
  publicationDiv.appendChild(buttonPublication);
  principalContent.appendChild(publicationDiv);

  HomeDiv.appendChild(principalContent);

  publicationDiv.addEventListener('submit', (e) => {
        e.preventDefault();
        const textoP = textPublication.value;
        //const userCreate = userCredential.user;
       // console.log(getPost);
       createPost("Judith", textoP).then((res)=>{
            console.log(res.id);
           getPost(res.id).then((postResult)=>{
            console.log(postResult.data());
           })
         getPosts.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

          });   
       })
       
  });
        return HomeDiv
}