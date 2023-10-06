// Description: Fetch API
// GET
async function getFunction(param) {
    try {
      const url = "https://playground.4geeks.com/apis/fake/todos/user/" + param;
      const response = await fetch(url);
      const jsonData = await response.json(); // --->  JS Object or Array
      console.log(jsonData);
      console.log(response.status);
      console.log(response.ok); // ---> true or false (200-299)
      console.log(jsonData[0].label)
      if (!response.ok) {
        console.log("la respuesta fue un fracaso!");
      }
    } catch (error) {
      console.log("houston tenemos un problema", error);
    }
  }
  // try {...} catch(error) {...}
  
  getFunction('igcodinap')
  
  // POST
  
  async function postFunction(param) {
    try {
      const url = "https://playground.4geeks.com/apis/fake/todos/user/" + param;
      const body = [];
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body), // transforma el objeto en un string de texto para enviar como JSON
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      console.log(jsonData);
      console.log(response.status);
    } catch (error) {
      console.log("houston tenemos un problema");
    }
  }
  
  // postFunction('igcodinap')
  
  // PUT
  
  async function putFunction(param) {
    try {
      const url = "https://playground.4geeks.com/apis/fake/todos/user/" + param;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify([
          { label: "Comprar huevos", done: false }
        ]),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      console.log(jsonData);
      console.log(response.status);
    } catch (error) {
      console.log("houston tenemos un problema");
    }
  }
  
  // putFunction("igcodinap");
  
  // HTTP: protocolo de comunicacion
  //REQUEST
  // body, url, headers, metodos
  // METODOS van el Request
  // GET: obtener informacion
  // POST: para crear informacion
  // PUT: para editar informacion
  // DELETE: para borrar informacion
  
  // RESPONSE
  // url, body, estados
  // ESTADOS van en el Response
  //100-199
  //200-299: exitosas
  //300-399
  //400-499: error en el request
  //500-599: error interno del servidor
  
  // Al user fetch usamos un objeto Request:
  // url, body, headers, method