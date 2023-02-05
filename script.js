//filter

const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active');
    });
}

//Searh Bar

document.getElementById("search-input").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNames = document.getElementsByClassName('card');
    
    for (let counter = 0; counter < allNames.length; counter++) {
        const currentName = allNames[counter].textContent.toLowerCase();
        
        if (currentName.includes(searchQuery)) {
            allNames[counter].style.display = "flex";
        } else {
            allNames[counter].style.display = "none";
        }
    }
});


