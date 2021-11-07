const $inputs = document.querySelectorAll(".camposForm"),  
    $camposError = document.querySelectorAll(".mensajeError"),
    $form = document.querySelector(".formularioPosta");

const expresiones1 = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    textarea: /^.{4,500}$/, // 4 a 255 digitos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campo1 = {
    name: false,
    email: false,
    mensaje:false
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "name":
            mensajes(expresiones1.nombre, e.target.value, 0, e.target.name)
            break;
        case "email":
            mensajes(expresiones1.mail, e.target.value, 1, e.target.name)
            break;
        case "mensaje":
            mensajes(expresiones1.textarea, e.target.value, 2, e.target.name)
            break;
        default:
            break;
    }
}

const mensajes = (expresion, valor, indice, campos) => {
    if (expresion.test(valor)) {
        $camposError[indice].style.display = "none"
        $inputs[indice].classList.remove("inputsFormInvalido")
        campo1[campos] = true
    } else {
        $inputs[indice].classList.add("inputsFormInvalido")
        $camposError[indice].style.display = "block"
        campo1[campos] = false
    }
}

$inputs.forEach(e => {
    e.addEventListener("blur", validarForm)
    e.addEventListener("keyup", validarForm)
})


$form.addEventListener("submit", e => {
    e.preventDefault();

    if (campo1.name && campo1.email && campo1.mensaje) {
        $form.reset();
        document.querySelector(".formEnviado").style.display = "block";
        setTimeout(() => {
            document.querySelector(".formEnviado").style.display = "none";
        }, 2000);

    }
})