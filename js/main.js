
var prodctName=document.getElementById("productname")
var prodctPrice=document.getElementById("productprice")
var productCategory=document.getElementById("productcategory")
var productDescription=document.getElementById("productdescription")
var productImage=document.getElementById("productimage")
var searchProudct=document.getElementById("searchproduct")
var productList=[]

if(localStorage.getItem("productArray") != null){
    productList=JSON.parse(localStorage.getItem("productArray"))
    displayProduct(productList)

}
function addProduct() {
  var product={
    name:prodctName.value,
    price:prodctPrice.value,
    Category:productCategory.value,
    description:productDescription.value,
    image:`../images/${productImage.files[0].name}`
  }
  productList.push(product)
  localStorage.setItem("productArray",JSON.stringify(productList))
  console.log(productList);
  clearInputValues()  
  displayProduct()
}
function clearInputValues() {
    prodctName.value=""
    prodctPrice.value=""
    productCategory.value=""
    productDescription.value=""
}

function displayProduct(array){
    var cartona=""
    for(var i=0 ; i<array.length ; i++){
        cartona +=` <div class="col-md-4">
            <div class="card">
              <img src="${productList[i].image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title fw-bold">${productList[i].name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <div class="d-flex justify-content-between">
                  <h2>${productList[i].price}</h2>
                  <div class="d-flex">
                    <button onclick="deletProduct(${i})" class="btn btn-outline-danger rounded-end-0"><i class="fas fa-trash"></i></button>
                    <button class="btn btn-outline-warning rounded-start-0"><i class="fas fa-edit"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>`

    }
    document.getElementById("rowData").innerHTML=cartona
}

function deletProduct(index){
  console.log(index);
  productList.splice(index,1) 
  displayProduct(productList)
  localStorage.setItem("productArray",JSON.stringify(productList))
}

function searchInput(){
 console.log( searchProudct.value);
 var searchArray=[]
 for(var i=0 ; i<productList.length ; i++){
  if(productList[i].name.toLowerCase().includes(searchProudct.value.trim().toLowerCase() ) == true){
    searchArray.push(productList[i])
  }
 }
 displayProduct(searchArray)
 
  
}






