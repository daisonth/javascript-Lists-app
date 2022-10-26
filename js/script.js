`use strict`;

const input = document.querySelector(`.inp`);
const ol = document.querySelector(`ol`);
const btnol = document.querySelector(`.ol`);
const btnul = document.querySelector(`.ul`);
const add = document.querySelector(`.add`);

const remove = function(item){
    ol.removeChild(item.parentNode);
}

add.addEventListener(`click`,function(){
    let str = input.value;
    if(str != ``)
    {
        const div = document.createElement(`div`);
        div.className = `row`;
        div.innerHTML = `
            <li>${str}</li> <button onclick="remove(this)">x</button>
        `; 
        ol.appendChild(div);
        input.value =  ``;
    }
});

btnol.addEventListener(`click`, function(){
    ol.style.listStyle = `decimal`;    
    ol.style.listStylePosition = `inside`;
})

btnul.addEventListener(`click`, function(){
    ol.style.listStyle = `disc`;    
    ol.style.listStylePosition = `inside`;
})