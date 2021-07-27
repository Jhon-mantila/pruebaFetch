

cargarUsuarios();
//cargarUsuariosPost();

//FUNCIÓN CARGA LOS USURIOS AL INGRESAR AL SITIO

function cargarUsuarios(){
    const tabla  = document.querySelector('#Lista tbody');  

    fetch('https://jsonplaceholder.typicode.com/users')
    .then (respuesta => respuesta.json())// Foramto q se obtiene la info
    .then(usuarios => {

        usuarios.forEach(usuario => {

          const row = document.createElement('tr');

           row.innerHTML += `
           
           <td><a href='#' onclick='cargarUsuariosPost(${usuario.id})'>${usuario.id}</a></td>
           <td>${usuario.name}</td>   
           <td>${usuario.email}</td>
           `;

           tabla.appendChild(row);
           
           console.log(usuario);

        });

    })//Mostrar info
}




//FUNCION PARA CARGAR LOS POST POR USUARIOS

function cargarUsuariosPost(id_user){

    vaciar();

    const tabla  = document.querySelector('#Lista #post'); 

    tabla.innerHTML =`
                    <th>id_user</th>
                    <th>post id</th>
                    <th>title</th>
                    <th>contenido</th>`;

    fetch('https://jsonplaceholder.typicode.com/users/'+id_user+'/posts')
    .then (respuesta => respuesta.json())// Foramto q se obtiene la info
    .then(usuarios => {
       
        usuarios.forEach(usuario => {

          const row = document.createElement('tr');
            
           row.innerHTML += `
           
           <td>${usuario.userId}</td>
           <td><a href='#' onclick='cargarUsuariosPostComentarios(${usuario.id})'>${usuario.id}</a></td>   
           <td>${usuario.title}</td>
           <td>${usuario.body}</td>
           `;
        
           tabla.appendChild(row);

           
           console.log(usuario);

        });
        
        
    })//Mostrar info
}

//FUNCIÓN PARA CARGAR LOS COMENTARIOS DE LOS POST

function cargarUsuariosPostComentarios(id_post){

    vaciar();

    const tabla  = document.querySelector('#Lista #post'); 

    tabla.innerHTML =`  <th>postId</th>
                        <th>coment id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>`;

    fetch('https://jsonplaceholder.typicode.com/posts/'+id_post+'/comments')
    .then (respuesta => respuesta.json())// Foramto q se obtiene la info
    .then(usuarios => {
       
        usuarios.forEach(usuario => {

          const row = document.createElement('tr');
            
           row.innerHTML += `
           
           <td>${usuario.postId}</td>
           <td>${usuario.id}</td>   
           <td>${usuario.name}</td>
           <td>${usuario.email}</td>
           <td>${usuario.body}</td>
           `;
        
           tabla.appendChild(row);

           
           console.log(usuario);

        });
        
        
    })//Mostrar info
}
//LIMPIAR LA TABLA
var resultados = document.getElementById('post'); 
   
function vaciar(){
    resultados.innerHTML = '';
  }