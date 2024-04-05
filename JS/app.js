
window.addEventListener('DOMContentLoaded', () => {
    startStore();
  });
  
  const startStore = () => {
    productosApi().then(() => {
      createProducts();
      addProductCar();
      search();
      obtenerDatosDelAPI();
    });
  };
  
  function productosApi() {
    const api = fetch('https://fakestoreapi.com/products');
    return api
      .then(promise => promise.json())
      .then(articles => {
        articles.forEach(elementProduct => {
          createProducts(elementProduct);
        });
      })
      .catch(error => console.log('Error al llamado de la api', error));
  }
  
  function createProducts(product) {
    const containerProducts = document.querySelector('.containerProducts');
    containerProducts.classList.add('containerProducts');
  
    const productItem = document.createElement('li');
    productItem.classList.add('product');
  
    const imgProduct = document.createElement('img');
    imgProduct.src = product.image;
  
    const boxDescription = document.createElement('div');
  
    const titleProduct = document.createElement('h3');
    titleProduct.textContent = product.title;
  
    const descriptionProduct = document.createElement('p');
    descriptionProduct.textContent = product.description;

    const priceProduct = document.createElement('p');
    priceProduct.textContent = product.price
  
    containerProducts.appendChild(productItem);
    productItem.appendChild(imgProduct);
    productItem.appendChild(boxDescription);
    boxDescription.appendChild(titleProduct);
    boxDescription.appendChild(descriptionProduct);
    boxDescription.appendChild(priceProduct)
  
    // Add click event listener to the product item to open the modal
    productItem.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      modal.style.display = 'block';
  
      const modalImage = document.querySelector('.modal-image');
      modalImage.src = product.image;
  
      const modalTitle = document.querySelector('.modal-title');
      modalTitle.textContent = product.title;
  
      const modalDescription = document.querySelector('.modal-description');
      modalDescription.textContent = product.description;
    });
  
  };
  
  const closeModal = document.querySelector('.close');
  const modal = document.querySelector('.modal');
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  function search() {
    const searchInput = document.getElementById('searchInput');
    const listProducts = document.querySelectorAll('.product');
  
    searchInput.addEventListener('keyup', () => {
      const searchProducts = searchInput.value.toLowerCase();
      const footer = document.querySelector('footer');
      footer.style.display = 'none';
  
      listProducts.forEach(listProduct => {
        const textProduct = listProduct.textContent.toLowerCase();
        if (textProduct.includes(searchProducts)) {
          listProduct.style.display = 'block';
        } else {
          listProduct.style.display = 'none';
        }
      });
    });
  }
  
  function saveProductToCache(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    console.log('Product saved to cache:', product);
  }
  
  function handleCartPage() {
    const cachedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (cachedProduct) {
     
    } else {
      
    }
  }
  

  const addToCartButton = document.getElementById('buttonAddCar');
  

  addToCartButton.addEventListener('click', () => {
   
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
  
    const product = {
      image: modalImage.src,
      title: modalTitle.textContent,
      description: modalDescription.textContent,
    };
  
    
    saveProductToCache(product);
  
   
    handleCartPage();
  
    modal.style.display = 'none';
  });
  
  
  
  
  












