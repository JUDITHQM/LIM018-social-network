//import { onNavigate } from "../main.js";
import { createPost, getPosts, getPost, onGetPost, deletePost, updatePost } from "../firebase/firebaseconfig.js";
import { signOutUser, userLin } from "../firebase/firebaseAuth.js";
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

      const postConteiner = document.createElement('article');

      const divmuro = document.createElement('div');
      divmuro.className = "divMuro";

      const divmodal = document.createElement('div');

      publicationDiv.appendChild(textPublication);
      publicationDiv.appendChild(buttonPublication);
      principalContent.appendChild(publicationDiv);
      principalContent.appendChild(postConteiner);

      const profile = document.createElement('aside');
      const bttnsignout = document.createElement('button');
      bttnsignout.textContent = 'Cerrar Sesión';

      const modalstr = `
      <div class="editform" id ="editform" style="display: none">
          <form>
          <textarea class="inputEdit"> </textarea>
          <button type="submit">Guardar</button>
          </form>
          </div>
           `;
      divmodal.innerHTML = modalstr;
      const editform = divmodal.querySelector('.editform');

      profile.appendChild(bttnsignout);
      HomeDiv.appendChild(principalContent);

      HomeDiv.appendChild(divmodal);
      HomeDiv.appendChild(divmuro);
      HomeDiv.appendChild(profile);


      onGetPost((querySnapshot) => {
            let html = '';

            querySnapshot.forEach((doc) => {
                  const post = doc.data();

                  // eslint-disable-next-line no-template-curly-in-string
                  html += `
        <div class= "divPubli">
         <h3 class= "user"> ${post.user}</h3>  
         <p> ${post.description} </p>
         <div class="containerBtn">
         <div class= btnE>
         <button class='btnEdit' data-id="${doc.id}"> Editar </button>
         </div>
         <div class="btnD">
         <button class='btndelete' data-id="${doc.id}"> Borrar </button>
         </div>
         </div>
        </div>
        `;
            });
            divmuro.innerHTML = html;


            const btnsdelete = divmuro.querySelectorAll('.btndelete');

            btnsdelete.forEach((btn) => {
                  btn.addEventListener('click', (event) => {
                        deletePost(event.target.dataset.id);
                  });
            });

            const btnsEditPost = divmuro.querySelectorAll('.btnEdit');
            const inputEdit = divmodal.querySelector('.inputEdit');
            // let id = '';

            btnsEditPost.forEach((btn) => {
                  btn.addEventListener('click', async (e) => {
                        const doc = await getPost(e.target.dataset.id);
                        console.log(e.target.dataset.id);
                        const pEdit = doc.data();
                        localStorage.setItem('idPost', doc.id);
                        inputEdit.value = pEdit.description;

                        editform.style.display = 'block';
                  });
            });

            editform.addEventListener('submit', (o) => {
                  o.preventDefault();
                  const newPost = inputEdit.value;
                  console.log(newPost);

                  const idEdit = localStorage.getItem('idPost');
                  console.log(idEdit);

                  updatePost(idEdit, { description: newPost });

                  editform.style.display = 'none';
            });

            publicationDiv.addEventListener('submit', (e) => {
                  e.preventDefault();
                  const textoP = textPublication.value;
                  //const userCreate = userCredential.user;
                  // console.log(getPost);
                  console.log(userLin)
                  if (userLin.displayName== null ) {
                        const nombrecito = sessionStorage.getItem('nameUsuario');
                        createPost(nombrecito, textoP).then((res) => {
                              getPost(res.id).then((postResult) => {
                                    console.log(postResult.data());
                                    
                              })
                              //getPosts.forEach((doc) => {
                              // doc.data() is never undefined for query doc snapshots
                              //console.log(doc.id, " => ", doc.data());

                              // });
                        });

                  }
                  else {
                        createPost(userLin.displayName, textoP).then((res) => {
                              getPost(res.id).then((postResult) => {
                                    console.log(postResult.data());
                              })
                              //getPosts.forEach((doc) => {
                              // doc.data() is never undefined for query doc snapshots
                              //console.log(doc.id, " => ", doc.data());

                              // });
                        });

                  }
            });

      });

      bttnsignout.addEventListener('click', (e) => {
            e.preventDefault();

            signOutUser();

      });

      return HomeDiv;

}