import {addRoute} from "./modules/spa-library/index.js"
import { altaTemplate, inicioTemplate, cartListTemplate,contactTemplate } from "./templates/pages.template.js"
import {añadirEventosForm} from "./modules/eventos/eventosForm.js"
import {añadirEventosContact} from "./modules/eventos/eventosContact.js"
import "./modules/cart/main.js"


addRoute("/inicio", async () => {
    // const string = "<h1>Productos</h1>"
    //const inicioTemplate = Handlebars.compile(`
    const response = await fetch("http://localhost:8080/api/products"
    )
    const productos = await response.json()

    const cantidadProductos = productos.length

    document.querySelector("main").innerHTML = inicioTemplate({productos, cantidadProductos})
})

addRoute("/alta", () => {
    //const string = "<h1>Alta</h1>"
    document.querySelector("main").innerHTML = altaTemplate({})
    //eventos
    añadirEventosForm()
})

addRoute("/contacto", () => {
    //const string = "<h1>Contacto</h1>"
    document.querySelector("main").innerHTML = contactTemplate({})
    añadirEventosContact()
})

addRoute("/nosotros", () => {
    //const string = "<h1>Nosotros</h1>"
    document.querySelector("main").innerHTML = string
})

//const img = "<img src='ejemplo.jpg'>"