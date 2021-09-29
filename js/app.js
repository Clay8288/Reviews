const reviews = [
    {
        id : 1,
        name : "Susan Smith",
        job : "The Boss",
        img : "img/person-2.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis deserunt facilis consectetur minus! Magnam aspernatur eum doloribus, iste quia quae quidem voluptatibus minima, adipisci sit, debitis aliquam eaque dolores. Explicabo magni omnis, corporis excepturi est consequuntur quidem! Vel reprehenderit dolor quidem doloremque harum at maiores cupiditate laborum iure aut.",
    },
    {
        id : 2,
        name : "John Will",
        job : "UI/UX",
        img : "img/person-3.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis deserunt facilis consectetur minus! Magnam aspernatur eum doloribus, iste quia quae quidem voluptatibus minima, adipisci sit, debitis aliquam eaque dolores. ",
    },
    {
        id : 3,
        name : "Julia Moore",
        job : "Web Developer",
        img : "img/person-4.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis deserunt facilis consectetur minus! Magnam aspernatur eum doloribus, iste quia quae quidem voluptatibus minima, adipisci sit, debitis aliquam eaque dolores. Explicabo magni omnis, corporis excepturi est consequuntur quidem! Vel reprehenderit dolor quidem doloremque harum at maiores cupiditate laborum iure aut.",
    },
    {
        id : 4,
        name : "Brian Georges",
        job : "Web Developer",
        img : "img/person-5.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis deserunt facilis consectetur minus! ",
    },
    {
        id : 5,
        name : "Flore Doe",
        job : "Web Developer",
        img : "img/person-6.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis deserunt facilis consectetur minus! Magnam aspernatur eum doloribus, iste quia quae quidem voluptatibus minima, adipisci sit, debitis aliquam eaque dolores. Explicabo magni omnis, corporis excepturi est consequuntur quidem! Vel reprehenderit dolor quidem doloremque harum at maiores cupiditate laborum iure aut.",
    },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson();
});

//show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});