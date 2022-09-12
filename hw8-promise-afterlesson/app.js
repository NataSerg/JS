function renderProducts(products) {

    const htmlStr = products.map(product => `<div class="card col-sm-6 col-md-4 col-lg-3">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.brand} ${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.brand} ${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
                </div>`).join('');
    
    document.getElementById('products').innerHTML = htmlStr;
}

function getProductsByCategory(categoryName) {
    let url = 'https://dummyjson.com/products?limit=100';
    if (categoryName) { url = `https://dummyjson.com/products/category/${categoryName}`;}
    fetch(url).then(res => res.json()).then(data => {
        renderProducts(data.products);
    })

}

function setListeners() {
    document.getElementById('categories').onchange = e => {
        getProductsByCategory(e.currentTarget.value);

    }
}


function renderCategories(categories) {
    const categoriesSelect = document.createElement('select');
    categoriesSelect.className = 'form-control';
    categoriesSelect.id = 'categories';

    let htmlStr = '<option value="">All</option>';
    htmlStr += categories.map(category => `<option value="${category}">${category}</option>`).join('');
    categoriesSelect.innerHTML = htmlStr;
    document.querySelector('.categories-block').prepend(categoriesSelect);
    
    setListeners();
}


window.onload = function () {
    const productPromise = new Promise((resolve, reject) => {
        fetch('https://dummyjson.com/products?limit=100').then(res => res.json()).then(data =>resolve(data.products))
    })

    const categoriesPromise = new Promise((resolve, reject) => {
        fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(data =>resolve(data))

    })

    Promise.all([productPromise, categoriesPromise]).then(data => {
        renderProducts(data[0]);
        renderCategories(data[1]);
    })
}









// function renderData(products, categories) {
//     let allproducts = products.products;
//         console.log(allproducts);
//         let htmlStr = allproducts.map(product => `<tr>
//         <td>${product.brand}</td>
//         <td>${product.title}</td>
//         <td>${product.price}</td>
//         <td><img src="${product.thumbnail}" class="product-img" alt="${product.title} image"></td>
//         </tr>`).join('');
//     document.querySelector('.products-table tbody').innerHTML = htmlStr;
    
//     let selectionOptions = categories.map(category =>
//             `<option>${category}</option>`).join('');
//         selectionOptions = `<option id="all-categories">All categories</option>` + selectionOptions;
//         document.querySelector('.form-select').innerHTML = selectionOptions;
// }

// function getData(data) {
//     let allProductsRequest = new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/products${data}`).then(res => res.json()).then(data => {
//         resolve(data);
//     })
// })

// let allCategoriesRequest = new Promise((resolve, reject) => {
//     fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(data => {
//         resolve(data);
//     })
// })

// Promise.all([allProductsRequest, allCategoriesRequest]).then(data => {
//     renderData(...data);
//     console.log(...data);
// })
// }

// window.onload = () => {
//     getData('?limit=100');
//     document.getElementById('selection').innerText = localStorage.getItem('category');
// }
    


// document.getElementById('selection').onchange = e => {
//     let category = e.currentTarget.value;
//     localStorage.setItem('category', category);
//     let listItemOfProducts = '/category/' + category;
//     if (category === document.getElementById('all-categories').value) {
//         listItemOfProducts = '?limit=100';
//     }
//     console.log(listItemOfProducts);
//     getData(listItemOfProducts);
//     document.getElementById('selection').innerText = localStorage.getItem('category');

// }  



