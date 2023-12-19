//main.js

let webpage = document.querySelector("body");

let categories = ["millionaire", "business", "leadership"];

let bookList = [
    {
        bookName:"Total Money Makeover",
        category:"millionaire",
        image:"https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2020/06/The-Total-Money-Makeover.png?ezimgfmt=rs:185x277/rscb12/ngcb12/notWebP",
        author:"Dave Ramsey"
    },
    {
        bookName:"The 7 Habits of Highly Effective People",
        category:"leadership",
        image:"https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2020/06/The-7-Habits-of-Highly-Effective-People.png?ezimgfmt=rs:185x277/rscb12/ng:webp/ngcb12",
        author:"Stephen R. Covey"
    },
    {
        bookName:"Rich Dad Poor Dad",
        category:"millionaire",
        image:"https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2020/06/Rich-Dad-Poor-Dad.png?ezimgfmt=rs:185x277/rscb12/ng:webp/ngcb12",
        author:"Dave Ramsey"
    },
    {
        bookName:"Deep Work",
        category:"business",
        image:"https://m.media-amazon.com/images/I/51vmivI5KvL._SY346_.jpg",
        author:"Cal Newport"
    },
    {
        bookName:"Everyday Millionaires",
        category:"millionaire",
        image:"https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2020/06/Everyday-Millionaires.png?ezimgfmt=rs:185x277/rscb12/ng:webp/ngcb12",
        author:"Chris Hogan"
    },
    {
        bookName:"The Innovators Dilemma",
        category:"business",
        image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51n5EwuYBwL.jpg",
        author:"Clayton M. Christensen"
    }
];

let categoriesSection = document.createElement("section");
categoriesSection.setAttribute("id","categories");

let categoriesList = document.createElement("ul");

for(let i = 0; i < categories.length; i++){
    let categoriesListItem = document.createElement("li");
    let category = document.createTextNode(categories[i]);
    categoriesListItem.addEventListener("click",openList);
    categoriesListItem.appendChild(category);
    categoriesList.appendChild(categoriesListItem);
}

let bookListSection = document.createElement("section");
bookListSection.setAttribute("id","bookList");

let books = document.createElement("ul");

let searchSection = document.createElement("section");
searchSection.setAttribute("id", "search");

let searchResultSection = document.createElement("section");
searchResultSection.setAttribute("id","searchResults");

let searchBar = document.createElement("input");
searchBar.setAttribute("id","searchBar");

let correctSearch;

categoriesSection.appendChild(categoriesList);
searchResultSection.appendChild(searchBar);
webpage.appendChild(categoriesSection);
webpage.appendChild(bookListSection);
webpage.appendChild(searchSection);
webpage.appendChild(searchResultSection);

searchBar.addEventListener("input", checkSearch);

function openList(event){

    books.innerHTML = "";

    for(let i = 0; i < bookList.length; i++){

        if(bookList[i].category == event.target.textContent){
            let listItems = document.createElement("li");
            books.appendChild(listItems);
            let bookNameAndAuthor = document.createElement("p");
            let bookImage = document.createElement("img");
            bookImage.setAttribute("style", "width: 100px")
            let bookNameAndAuthorText = document.createTextNode(bookList[i].bookName + " written by " + bookList[i].author);
            bookImage.setAttribute("src",bookList[i].image);
            bookNameAndAuthor.appendChild(bookNameAndAuthorText);
            listItems.appendChild(bookNameAndAuthor);
            listItems.appendChild(bookImage);
        }

        bookListSection.appendChild(books);
    }
}

function checkSearch(event){

    if(correctSearch){
        correctSearch.remove();
    }
    
    console.log(searchBar.value);

    for(let i = 0; i < bookList.length; i++){
        if(searchBar.value.toLowerCase() == bookList[i].bookName.toLowerCase()){
            correctSearch = document.createElement("p");
            let correctSearchText = document.createTextNode(bookList[i].bookName + " found!");
            correctSearch.appendChild(correctSearchText);
            searchResultSection.appendChild(correctSearch);
        }
    }
}