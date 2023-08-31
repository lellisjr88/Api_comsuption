const url = "https://api.adviceslip.com/advice"


async function pegarConselho() {
    const response = await fetch(url);
    
    const data = await response.json(); 
    
    const div = document.getElementById('content');

    const p = document.createElement("p");

    p.innerText = data.slip.advice;


    div.appendChild(p)
    div.style.backgroundColor = 'rgba(177, 199, 178, 0.2)';
    
    
}



const button = document.getElementById('button');

button.addEventListener('click', function(){
    pegarConselho();
})


