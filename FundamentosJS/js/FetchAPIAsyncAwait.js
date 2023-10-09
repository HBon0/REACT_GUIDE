//Fetch - Async Await

const UrlAPI = "https://jsonplaceholder.typicode.com/todos";

//Hacerlo mediante Fetch Normal
const ConsultarAPI = () => {
    fetch(UrlAPI)
      .then(response => response.json())
      .then(json => {
            json.forEach(element => {
                console.log(element);
            });
      })
}

///Hacerlo mediante Fetch Async
const ConsultarAPIAsync = async () => {
   const response = await fetch(UrlAPI)
   const result = await response.json();
   result.forEach( item => {
        console.log(item);
    });
}

ConsultarAPIAsync();