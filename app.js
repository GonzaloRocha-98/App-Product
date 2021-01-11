class Product{
    constructor(name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const fragment = document.createElement('div');
        fragment.innerHTML = 
        `
        <div class ='card-body mb-3'>
            <strong>Product Name: ${product.name}</strong>
            <strong>Product Price: ${product.price}</strong>
            <strong>Product Year: ${product.year}</strong>
        </div>
        `;
        productList.appendChild(fragment);
    }

    deleteProduct(){

    }

    showMessege(){

    }
}
document.getElementById('product-form').addEventListener('submit',function(){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    
    const product = new Product(name,price,year);

    const ui = new UI();
    ui.addProduct(product);
    console.log(name, price, year);
})