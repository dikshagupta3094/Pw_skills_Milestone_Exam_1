
let border = document.getElementById('border');

let documentHeight = document.documentElement.scrollHeight;

let clientHeight = document.documentElement.clientHeight;

window.onscroll = function(){
    console.log(scrollY);

    let percentage = (scrollY/(documentHeight-clientHeight)*100);

    border.style.width = percentage + "%";

}


