//Fetch - Multiple Asycn Await

const UrlAPI = "https://jsonplaceholder.typicode.com/todos";
const UrlAPIPhotos = "https://jsonplaceholder.typicode.com/photos"


///Hacerlo mediante Fetch Async
const ConsultarAPIAsync = async (Url) => {
   const response = await fetch(Url)
   const result = await response.json();
   result.forEach( item => {
        console.log(item);
    });
}

//Hacerlo mediante Fetch Async multiple
const consultarAPI2 = async () => {
    const [response, response2] = await Promise.all([fetch(UrlAPI), fetch(UrlAPIPhotos)]);

    const result = await response.json();
    const result2 = await response2.json();

    console.log(result);
    console.log(result2);
}

consultarAPI2();
