const btn = document.querySelectorAll(".btn");
const countProduct = document.getElementById("countProduct");
const cartStore = document.getElementById("cartStore");
let count = 0;
btn.forEach(value => {
    value.addEventListener("click", function (e) {
        let productTitle = e.target.parentNode.parentNode.children[0].innerText;
        let productPrice = e.target.parentNode.parentNode.children[1].innerText;
        let imageCart = e.target.parentNode.parentNode.parentNode.children[0].children[0].src;
        
        let htmlVal = htmlMultipelCreate(productTitle, productPrice);
        cartStore.innerHTML += htmlVal;
        // cartStore()
        // product deuretion
        count++;
        countProduct.innerText = count;
    })
})


function htmlMultipelCreate(productTitle, productPrice){
 return `  <div class="flex mx-2 text-white justify-between items-center ">
    <img class="w-20 object-cover" src="image/1.png" alt="">
    <h2 class="text-1xl">${productTitle}</h2>
    <p class="text-1xl font-semibold ">${productPrice}</p>
    <div class="flex gap-2 items-center">
        <i class="fa-solid text-2xl fa-circle-chevron-right"></i>
        <p class="text-3xl font-bold ">0</p>
        <i class="fa-solid text-2xl fa-circle-chevron-left"></i>
    </div>
    </div>`
}
