window.addEventListener('DOMContentLoaded', () => {

    startStore();
 });
 
 const startStore = () =>{
 
     productosApi().then(() =>{
      search();
     });
    
 };
 
 function productosApi(){
 
     const api = fetch('https://fakestoreapi.com/products');
 
     return api
     .then(promise => promise.json())
     .then(article => article.forEach(productsApi => {
         createProducts(productsApi)
     }))
     .catch(error => console.log('Error al llamado de la api', + error))
 };
 
 
 
 function createProducts(products){
 
     const containerProducts = document.querySelector('.containerProducts');
     containerProducts.classList.add('containerProducts');
 
     const product = document.createElement('li');
     product.classList.add('product');
 
     const imgProduct = document.createElement('img');
     imgProduct.src = products.image;
 
     const boxDescription = document.createElement('div');
     
     const titleProduct = document.createElement('h3');
     titleProduct.textContent = products.title;
 
     const descriptionProduct = document.createElement('p');
     descriptionProduct.textContent = products.description;
 
     
     containerProducts.appendChild(product);
     product.appendChild(imgProduct);
     product.appendChild(boxDescription);
     boxDescription.appendChild(titleProduct);
     boxDescription.appendChild(descriptionProduct);

     product.addEventListener('click', () =>{
        const modal = document.querySelector('.modal');
        const modalImage = document.querySelector('.modal-image');
        const modalTitle = document.querySelector('.modal-title');
        const modalDescription = document.querySelector('.modal-description');

        modal.style.display = 'block';
        modalImage.src = products.image;
        modalTitle.textContent = products.title;
        modalDescription.textContent = products.description;
     })
 
 };

    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close');

    modal.addEventListener('click', (close) => {
    if (close.target === modal || close.target === closeModal) {
        modal.style.display = 'none';
    }
});


 


function search(){
    const searchInput = document.getElementById('searchInput');
    const listProducts = document.querySelectorAll('.product');

    searchInput.addEventListener('keyup', () => {
        const searcProducts = searchInput.value.toLowerCase();

        listProducts.forEach(listProduct => {
            const textProduct = listProduct.textContent.toLowerCase()
            if(textProduct.includes(searcProducts)){
                listProduct.style.display = 'block';
            }else{
                listProduct.style.display = 'none';
            }
        });
    });

};










