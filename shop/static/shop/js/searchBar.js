let select = document.getElementById('select');
let list = document.getElementById('list');
let arrow = select.querySelector(".fa-v");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options")
let searchInput = document.getElementById("product-search")

select.onclick = function (){
    list.classList.toggle("open");
    arrow.classList.toggle("fa-flip-both");
    arrow.classList.toggle("fa-flip-horizontal");
}

for(let option of options){
    option.onclick = function(){
        selectText.innerHTML = this.innerHTML;
        searchInput.placeholder = "Search In " + this.innerHTML;
    }
}