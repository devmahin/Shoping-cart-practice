const btn = document.querySelectorAll(".btn");
const countProduct = document.getElementById("countProduct");
let count = 0;
btn.forEach(value => {
    value.addEventListener("click", function(e){
        let productTitle = e.target.parentNode.parentNode.children[0].innerText;
        let productPrice = e.target.parentNode.parentNode.children[1].innerText;
        


        // product deuretion
        count++;
        countProduct.innerText = count;
    })
})

