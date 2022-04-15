//store the products array in localstorage as "data"
let arr = JSON.parse(localStorage.getItem("Products")) || []

  function Product(n,c,i,p,g,) {
    this.name = n
    this.category = c
    this.image = i
    this.price = p
    this.gender = g
      //object created by this

  }
  function storeProducts(el) {
      el.preventDefault()
       //get element by id & perform action
      let form = document.getElementById("products")

      // let name is shown in output

        let nam = form.name.value
        let cat = form.category.value
        let ima = form.image.value
        let pri = form.price.value 
        let gen = form.gender.value
        // let sol = form.sold.value

        let item = new Product(nam, cat, ima, pri, gen,)

        arr.push(item)

        localStorage.setItem("Products", JSON.stringify(arr))
        window.location.reload()
  }