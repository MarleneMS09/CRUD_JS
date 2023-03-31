const http = new XMLHttpRequest();
//abrir http (método, url)

/*CRUD 
    (Create, POST
    Read, GET
    Update, PUT/PATCH
    Delete) DELETE
*/
//Métodos HTTP
http.open("GET", "http://localhost:3000/perfil")
http.send();
http.onload = () => {
    const data = http.response
    console.log(data);
}
console.log(http);
//console.log("CLIENTE-SERVICE");