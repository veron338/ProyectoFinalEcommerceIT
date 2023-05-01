//
export const inicioTemplate = Handlebars.compile(`
        <section class="section-cards">

            <header class="section-cards__header">
                <h1>Bievenidos a mi primera Tienda Virtual!</h1>

                <p>Se encontraron {{cantidadProductos}} productos</p>
            </header>

            <div class="cards-container">
                {{#each productos}}
                <a class="card" href="#">
                    <article class="card__article">
                        <div class="card__image" style="background-image: url('img/productos/{{this.img}}')">
                        </div>

                        <div class="card__content">
                            <h3 class="card__heading">{{this.brand}} {{this.model}}</h3>
                            <div class="card__description">
                                <span>\${{this.price}}</span>
                                <p>{{this.descripcions}}</p>
                            </div>
                        </div>
                        <button type="button" idProducto="{{this._id}}" class="addCartBtn">Añadir al Carrito +</button>
                    </article>
                </a>
                {{/each}}
            </div>
        </section>
    `)
//
    export const altaTemplate = Handlebars.compile(`
    <section id="section-alta">
        <header>
            <h2 class"crear-producto">Crear Nuevo Producto</h2>
        </header>

        <main>
            <form action="" class="formAlta" id="formAlta" method="post" enctype="multipart/form-data" action="/upload">
            
                    <div class="field">
                        <label for="name" >Nombre</label>
                        <input type="text" id="name" class="requerido">
                        <span class="errMsg"></span>
                    </div>

                    <div class="field">
                        <label for="brand">Marca</label>
                        <input type="text" id="brand" class="requerido" >
                        <span class="errMsg" ></span>
                    </div>

                    <div class="field">
                        <label for="model">Modelo</label>
                        <input type="text" id="model" class="requerido" >
                        <span class="errMsg" ></span>
                    </div>

                    <div class="field">
                        <label for="price">Precio</label>
                        <input type="number" id="price" class="requerido">
                        <span class="errMsg" ></span>
                    </div>

                    <div class="field">
                        <label for="stock">Stock</label>
                        <input type="number" id="stock" class="requerido">
                        <span class="errMsg"></span>
                   </div>


                    <div class="field">
                        <label for="category">Categoria</label>
                        <input type="text" id="category" class="requerido">
                        <span class="errMsg"></span>
                    </div>

                    <div class="field">
                        <label for="colors">Color</label>
                        <input type="text" id="colors" class="requerido">
                        <span class="errMsg"></span>
                    </div>

                    <div class="field">
                        <label for="descriptions">Descripcion Corta</label>
                        <textarea  id="descriptions" class="requerido" ></textarea>
                        <span class="errMsg"></span>
                    </div>

                    <div class="field">
                        <label for="descriptionsLarge">Descripcion Larga</label>
                        <textarea  id="descriptionsLarge" class="requerido"></textarea>
                        <span class="errMsg"></span>
                    </div>

                    <div class="field">
                        <label for="img">Imagen</label>
                        <input type="file" id="img"  class="requerido">
                    </div>


                <div class="field">
                    <label for="shipping">Envío sin cargo</label>
                    <select name="Envío sin cargo" id="shipping" >
                    <option value="" selected disabled >Seleccione el tipo Envio</option>
                    <option >SI</option>
                    <option >NO</option>
                </select
                    <span class="errMsg" ></span>
                </div>

                <div class="field">
                <label for="ageMin">Edad desde</label>
                <input type="number" id="ageMin" class="requerido">
                <span class="errMsg" ></span>
               </div>


               <div class="field">
                <label for="ageMax">Edad hasta</label>
                <input type="number" id="ageMax" class="requerido">
                <span class="errMsg" ></span>
               </div>

            <button type="submit" class="formAlta">Crear Producto</button>
            </form>
        </main>
    </section>

`)
//
export const contactTemplate = Handlebars.compile(`

<section id="section-contacto">
         
        <header><h2 class="crear-cuenta">Crear cuenta</h2></header>

        <main>

            <form action="class="formContacto" id="formContacto">

                <div class="field">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" class="requerido"  >
                    <span class="errMsg"></span>
                </div>


                <div class="field">
                        <label for="lastname">Apellido</label>
                        <input type="text" id="lastname" class="requerido" >
                        <span class="errMsg"></span>
                </div>



                <div class="field">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="requerido">
                    <span class="errMsg"></span>
                </div>

                <div class="field">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" class="requerido">
                        <span class="errMsg"></span>
            </div>

                <div class="field">
                        <label for="repassword">Repetir Contraseña</label>
                        <input type="password" id="repassword" class="requerido">
                        <span class="errMsg"></span>
                </div>

            
                <div class="field">
                        <label for="comment">Comentarios</label>
                        <textarea id="comment" cols="30" rows="10"></textarea>
               </div>


            <button type="submit" class="formContacto">Enviar</button>

            </form>

        </main>
     
</section>

`)




export const cartListTemplate = Handlebars.compile(`
<span class="closeBtn">X</span>
<div class="headers">
    <span>Foto</span>
    <span>Producto</span>
    <span>Precio</span>
    <span>Cantidad</span>
    <span>Subtotal</span>
</div>

{{#each cart}}
<div class="productItem">
    <span><img src="img/productos/{{this.img}}" alt=""></span>
    <span>{{this.marca}} {{this.modelo}}</span>
    <span>\${{this.precio}}</span>
    <span>
        <button class="subtractCartBtn" idProducto="{{this.id}}">-</button>
        <span> {{this.cantidad}} </span>
        <button class="addCartBtn" idProducto="{{this.id}}">+</button>
    </span>
    <span>\${{this.subtotal}}</span>
</div>
{{/each}}

<div class="total">
    Total: \${{total}}
</div>

<div><button class="deleteProduct" idProducto = "{{this.id}}"> Eliminar </button></div>

`)




//export default { inicioTemplate, altaTemplate }

//export default Ejemplo = function(){}
