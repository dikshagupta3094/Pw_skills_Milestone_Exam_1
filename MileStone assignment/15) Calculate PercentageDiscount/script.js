
let CalcBtn= document.querySelector('#Btn')

CalcBtn.addEventListener('click',(e)=>{
  let originalPrice = document.querySelector('#originalPrice').value
  let DiscountPrice = document.querySelector('#DiscountPrice').value
   console.log(e);    
  if(isNaN(originalPrice)&& isNaN(DiscountPrice)){
    document.querySelector('#result').textContent = "Please give valid input";
  }
  else{
    let DiscountedPrice = parseInt(originalPrice - DiscountPrice);
    let DiscountedPricePer = ( DiscountedPrice/originalPrice)*100;
    let RoundeDiscountPrice = Math.round(DiscountedPricePer*100)/100;
    document.querySelector('#result').textContent = DiscountedPricePer+'%';
  }
})