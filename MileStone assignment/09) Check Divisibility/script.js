let arr = [2,4,6,8,10,12,14,16,18,20,23];

function checkDivisiblity(){
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2==0){
            continue;
        }
        else{
            if(arr[i]%3==0){
                console.log(`Number divisible by 3 is: ${arr[i]}`);
            }
            else{
                console.log("In the given array no such  number is found which is divisible by three");
            }
        }
    }
}
//calling the function
checkDivisiblity();