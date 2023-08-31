const cart = [
    {
        name: "Item A",
        unitPrice : 10,
        quantity: 2
    },
    {  
        name: "Item B",
        unitPrice: 5,
        quantity :3
    },

    {
      name: "Item A",
      unitPrice : 8,
      quantity: 2
  }
]

const calculateTotalCost = (cart) =>{
    const CartOfObjects = {}
     
    for(const item of cart){
      const total = item.unitPrice*item.quantity

      if(CartOfObjects[item.name]){
        CartOfObjects[item.name]+=total
      }
      else{
        CartOfObjects[item.name] = total
      }
    }
    return CartOfObjects;
}
 
 const itemTotals = calculateTotalCost(cart);
 console.log(itemTotals);

