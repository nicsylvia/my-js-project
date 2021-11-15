const myProductList = document.getElementById('myProductList');


products.forEach((products) =>{
    myProductList.innerHTML +=
    `
    <div class= "bg-warning col-md-3 m-4 text-danger"> 
    <h3> ${products.id} </h3>
    <div data-image="${products.imageUrl}" class="product-img"> </div>
    <h3>
    <a href="./property-details.html?id=${index}" target="_blank"> ${products.name} </a>
    </h3>
    <h3> ${products.description} </h3>
    <h3> ${products.price} </h3>
    </div>
    `
    const productimg = document.querySelectorAll('[data-image]');
    for (let index = 0; index < productimg.length; index++) {
        const element = productimg[index];
        console.log(element.dataset.image);
        element.style.backgroundImage = `url('${element.dataset.image}')`
        
    }
    


})

