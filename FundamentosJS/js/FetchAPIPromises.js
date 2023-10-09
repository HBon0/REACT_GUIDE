// Fetch API
const UrlAPI = "https://jsonplaceholder.typicode.com/todos";

const ConsultarAPI = () => {
    fetch(UrlAPI)
      .then(response => response.json())
      .then(json => {
            json.forEach(element => {
                console.log(element);
            });
      })
}

ConsultarAPI();