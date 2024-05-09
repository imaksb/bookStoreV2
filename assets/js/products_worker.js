
let allTypes = ["H", "E", "P"]

let selectedTypes = allTypes;
let books = [];

function fetchData() {
    fetch("http://127.0.0.1:8000/api/v1/products/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Виводимо отримані дані
            books = data;
            console.log(books);
            loadProducts();

        });
}


 
$(".filter").on('click', function(event) {  
    $(".product").remove();
    if(event.target.id === 'e-book'){
        selectedTypes = ["E"];
    }
    if(event.target.id === 'hardcover'){
        selectedTypes = ["H"];
    }
    if(event.target.id == 'paperback') {
        selectedTypes = ["P"];
    }
    if(event.target.id === 'all_button'){
        selectedTypes = allTypes;
    }
    loadProducts();
});

fetchData();
function loadProducts(type) {
    console.log(books.length)
    for (let i = 0; i < books.length; i++) {
        let item = books[i]; 
        if(selectedTypes.includes(item['category'])) {
            $(".products").append(`<div class="product">
            <img src="${item["image"]}" alt="" />
            <div class="book-detail">
            <div class="main-information"> 
                 <h4>${item["title"].slice(0, 13)}</h4>
                 <p class="author">${item["manufacturer"]}</p>
                 <p>${item["description"].slice(0, 50)}...</p>
             </div>
             <div class="info-section">
             <button class="book_button_info" id="book_${i}">INFO</button>
             </div>
             </div>
            </div>`);
        }
    }
}


function showData() {
    document.addEventListener("DOMContentLoaded", function () {
    $(".book_button_info").on('click', function(event) {
        let bookInfo = $(`#${event.target_id}`);
        $(bookInfo).css("display", "block");
    });
})
}

