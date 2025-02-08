//reduce fun

const array = [2,2,2]

const array2 =array.reduce( (acc, currentVal) =>(acc+currentVal),0)

console.log(array2);


const shoppingCart = [

{
    product : "shirt",
    price : 200
},

{
    product : "shoes",
    price : 150
},{
    product : "mobile",
    price : 1200
},{
    product : "charager",
    price : 20000
}

]


const totalValue = shoppingCart.reduce( (acc, currentVal)=>{
let amountAdded =acc +currentVal.price
console.log(`added to cart ${currentVal.product}, and price is ${currentVal.price}`)
return amountAdded
},0)


console.log("Total bill is ", totalValue);


