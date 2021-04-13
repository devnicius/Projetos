//set local reviews data
const reviews = [
    {
    id: 1,
    name: "Pessoa1",
    job: "Web Developer",
    img: "img/pessoa-1.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
},
{
    id: 2,
    name: "Pessoa2",
    job: "Web Designer",
    img: "img/pessoa-2.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    id: 3,
    name: "Pessoa3",
    job: "Full-stack Developer",
    img: "img/pessoa-3.png",
    text: "O meu nome é Vinícius, eu tenho 20 anos e é isso! Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
},
]

//select itens

const img = document.getElementById("person-img");
const author = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("info");

const prevBtn = document.querySelector(".btn.prev");
const randomBtn = document.querySelector(".btn.random");
const nextBtn = document.querySelector(".btn.next");

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img; // ou = reviews[currentItem].img
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
};

//next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

//random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});


//prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});