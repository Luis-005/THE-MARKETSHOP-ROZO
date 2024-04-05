window.addEventListener('DOMContentLoaded', () => {

   addProduct()

    
})

function addProduct(){
    const cachedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    const carritoContainer = document.querySelector('.carrito');

    const div = document.createElement('div');
    div.classList.add('added-to-cart');

    const img = document.createElement('img');
    img.src = cachedProduct.image

    const div2 = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = cachedProduct.title;

    const p = document.createElement('p');
    p.textContent = cachedProduct.price

    carritoContainer.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(h3);
    div2.appendChild(p);
}


  
  
  
  

