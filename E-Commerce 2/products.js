
var arr = JSON.parse(localStorage.getItem("Products")) || []

var counter = document.createElement("h4")
counter.innerText = `Total Products are ${arr.length}`
document.getElementById("counter").append(counter)

arr.map(function(el,index) {
    var box = document.createElement("div")
    // box.setAttribute("class","product")

    var image = document.createElement("img")
    // image.setAttribute("id", "product_image")
    image.src = el.image

    var name = document.createElement("h4")
    name.innerText=el.name

    var category = document.createElement("h2")
    category.innerText=el.category

    var price = document.createElement("p")
    price.innerText=el.price

    var gender = document.createElement("p")
    gender.innerText=el.gender

    var button = document.createElement("button")
    button.setAttribute("id", "remove")
    button.innerText="Remove"

    button.addEventListener("click",function(){
        arr.splice(index,1)
        localStorage.setItem("Products", JSON.stringify(arr))
        window.location.reload()
        // alert("item removed")
        console.log(button)
    })


    box.append(image,name, category, price, gender, button)
    document.querySelector("#product").append(box)

})