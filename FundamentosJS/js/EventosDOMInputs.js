//Eventos DOM - Inputs


const InputNombre = document.querySelector(".nombre");
InputNombre.addEventListener("input", function(e) {
    console.log(e.target.value);
});

const InputPassword = document.querySelector(".password");
InputPassword.addEventListener("input", funcionPassword);

function funcionPassword(e) {
   InputPassword.type = "text";

   setTimeout( () => {
        InputPassword.type = "password";
   }, 300);
}