
function doubleCartQuantities(array){
    let correctedCart = [];
    array.map((quantity,index)=>{
       correctedCart.push(`Quantity: ${quantity*2}, Index: ${index+1}`)
    })
    return correctedCart;
}
let cartArray = [1,2,4,6];
let arrVal = doubleCartQuantities(cartArray)
console.log(arrVal);




