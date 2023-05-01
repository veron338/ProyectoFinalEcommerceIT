
 export const cartListTemplate = Handlebars.compile(`
<span class="closeBtn">X</span>
<div class="headers">
    <span>Foto</span>
    <span>Producto</span>
    <span>Precio</span>
    <span>Cantidad</span>
    <span>Subtotal</span>
    <span></span>
</div>
{{#each cart}}
<div class="productItem">
    <span><img src="img/productos/{{this.img}}" alt=""></span>
    <span>{{this.brand}} {{this.model}}</span>
    <span>\${{this.price}}</span>
    <span>
        <button class="subtractCartBtn" idProducto="{{this._id}}"><</button>
        <span> {{this.cantidad}} </span>
        <button class="addCartBtn" idProducto="{{this._id}}">></button>
    </span>
    <span>\${{this.subtotal}}</span>
    <span>
        <button class="deleteProduct" idProducto="{{this._id}}"> X </buttom>
    </span>
</div>
{{/each}}

<div class="total">
    Total: \${{total}}


    
</div>

`)