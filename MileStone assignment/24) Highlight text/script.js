document.addEventListener('DOMContentLoaded',function(){
    let para = document.getElementById('paragraph');

    let paracontent = para.textContent;
    
    let words = paracontent.split(' ');

    let modififedWords = words.map(word =>{
        if(word.length>8){
            return `<span class = 'highlight'>${word}</span>`
        }
        else{
            return word;
        }
    });

    const modififedpara = modififedWords.join(' ');

    para.innerHTML = modififedpara;
})








