//Validaciones Formulario contacto
export const añadirEventosContact = ()=>{
    const form = document.querySelector("#section-contacto form")
// Obligatorio. Campo alfanumérico. Soporta caracteres utilizados en el idioma
// español, con y sin acentuaciones. También números, puntos, comas, comillas
// simples y dobles, espacios, barras, guiones medios y bajos. 30
    
    form.name.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/
        if( !regExp.test(value) ){
            errMsg ="No debe contener caracteres especiales"
        }
        
        form.name.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg

        return errMsg
    })

    form.lastname.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/
        if( !regExp.test(value) ){
            errMsg ="No debe contener caracteres especiales"
        }

        form.lastname.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg

        return errMsg
    })

form.email.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp =  /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/
        if( !regExp.test(value) ){
            errMsg ="Email invalido"
        }

        

        form.email.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg

        return errMsg
    })

    form.password.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp =  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
        if( !regExp.test(value) ){
            errMsg = "Contraseña invalida"
        }

        form.password.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg
    })


    form.repassword.addEventListener("change", ev => {
        const input = ev.target 
        const value = input.value 
        const span = input.parentElement.querySelector(".errMsg")
    
        let errMsg = ""
        if( value !== form.password.value ){
            errMsg = "Las contraseñas deben coincidir"
        }
    
        // "" -> OK      "texto" -> ERROR
        input.setCustomValidity(errMsg)
        span.innerText = errMsg
    })

    form.comment.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{10,2000}$/
        if( !regExp.test(value) ){
            errMsg = "Debe tener entre 10 y 2000 caracteres"
        }

        form.comment.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg
    })

    

    form.addEventListener("submit", async ev => {
        ev.preventDefault()
        //Validar que los inputs obligatorios tengan al menos un caracter

        //Envio de datos 
        const body = {
            name: form.name.value,
            lastname: form.lastname.value,
            email: form.email.value,
            password: form.password.value,
            comment: form.comment.value
            //demas inputs ...
        }

        const response = await fetch("http://localhost:8080/api/user",{
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}

//Setear Atributo Required 
export const required = () => {
    const input = document.querySelectorAll(".requerido")
    input.forEach(input => {
        input.setAttribute("required", true)
    })
}
