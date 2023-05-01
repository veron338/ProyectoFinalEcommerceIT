
import "./pollyfillLocationchange.js"

//Delegacion de eventos -> cuando hago click en un <a to=""> entonces realizo un pushState con esa ruta
document.body.addEventListener("click", ev => {
    const element = ev.target.closest("a[to]")
    if(element){
        ev.preventDefault()
        const to = element.getAttribute("to")
        history.pushState({}, null, to)
    }
})


//Array de rutas -> {path, callback}
/*export*/ 

const routes = []

//Metodo para añadir nuevas rutas al router
export function addRoute(path, callback){
    //VALIDACION
    routes.push( {path, callback} )
}


//Escucha el evento de locationchange -> segun la url ejecuta determinado callback de la lista de routes
window.addEventListener("locationchange", ev => {

    routes.forEach(route => {
        //if(route.path === location.pathname){
        const regExp = new RegExp("^"+route.path+"$")

        if( regExp.test(location.pathname) ){
            const matchs = location.pathname.match(regExp).slice(1)//Array de matchs
            console.log(matchs)
    
            route.callback(matchs)
        }
    })
})