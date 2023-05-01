//Validaciones Formulario Alta
export const añadirEventosForm = ()=>{
    const form = document.querySelector("#section-alta form")
// Obligatorio. Campo alfanumérico. Soporta caracteres utilizados en el idioma
// español, con y sin acentuaciones. También números, puntos, comas, comillas
// simples y dobles, espacios, barras, guiones medios y bajos. 30
    
    form.name.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{2,40}$/
        if( !regExp.test(value) ){
            errMsg ="No debe contener caracteres especiales"
        }
        
        form.name.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg

        return errMsg
    })

    form.stock.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^(?<!-)[0-9]{1,}$/
        if( !regExp.test(value) ){
            errMsg ="Debe ser un número positivo o cero"
        }

        form.stock.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg

        return errMsg
    })

form.brand.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{2,40}$/
        if( !regExp.test(value) ){
            errMsg ="No debe contener caracteres especiales"
        }

        form.brand.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg

        return errMsg
    })

    form.price.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp =  /^(?<!-)[\d\,]{1,}$/
        if( !regExp.test(value) ){
            errMsg = "Debe ser un número positivo mayor a 0"
        }

        form.price.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg
    })


    form.descriptions.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{10,80}$/
        if( !regExp.test(value) ){
            errMsg = "Debe tener entre 10 y 80 caracteres"
        }

        form.descriptions.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg
    })

    form.descriptionsLarge.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{10,2000}$/
        if( !regExp.test(value) ){
            errMsg = "Debe tener entre 10 y 2000 caracteres"
        }

        form.descriptionsLarge.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg
    })

    form.ageMin.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^^(?<!-)([1-9]0?){1,2}$/
        if( !regExp.test(value) ){
            errMsg = "Debe ser un número positivo mayor a 0 y hasta 99"
        }

        form.ageMin.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg
    })


    form.ageMax.addEventListener("blur", ev => {
        const input = ev.target
        const value = input.value
        const errMsgSpan = input.parentElement.querySelector(".errMsg")

        let errMsg = ""
        
        const regExp = /^^(?<!-)([1-9]0?){1,2}$/
        if( !regExp.test(value) ){
            errMsg = "Debe ser un número positivo mayor a 0 y hasta 99"
        }

        form.ageMax.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg
    })

    form.addEventListener("submit", async ev => {
        ev.preventDefault()
        //Validar que los inputs obligatorios tengan al menos un caracter

        //Envio de datos 
        const body = {
            name: form.name.value,
            brand: form.brand.value,
            stock: form.stock.value,
            model: form.model.value,
            price: form.price.value,
            descriptionsLarge: form.descriptionsLarge.value,
            descriptions: form.descriptions.value,
            ageMin: form.ageMin.value,
            ageMax: form.ageMax.value,
            shipping: form.shipping.value,
            colors: form.colors.value,
            img: form.img.value
            //demas inputs ...
        }

        const response = await fetch("http://localhost:8080/api/products",{
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


















