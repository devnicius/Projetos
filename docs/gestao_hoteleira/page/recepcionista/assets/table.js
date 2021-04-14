var date = new Date();
//var dateFormat = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 

//define data
var tabledata = [
    {id:1, quarto:"1", preco:12, data:date, contato:"example@mail.com", col:"red",},
    {id:2, quarto:"2", preco:123, data:date, contato:"example@mail.com", col:"blue" },
    {id:3, quarto:"3", preco:42, data:date, contato:"example@mail.com", col:"green" },
    {id:4, quarto:"4", preco:100, data:date, contato:"example@mail.com", col:"orange" },
    {id:5, quarto:"5", preco:16, data:date, contato:"example@mail.com", col:"yellow"},
];

//Build Tabulator
var table = new Tabulator("#example-table", {
    height:"311px",
    layout:"fitColumns",
    reactiveData:true, //turn on data reactivity
    data:tabledata, //load data into table
    columns:[
        {title:"Quarto", field:"quarto", sorter:"string", width:200},
        //{title:"Progress", field:"progress", sorter:"number", formatter:"progress"},
        {title: "Preço", field: "preco"},
        {title:"Data", field:"data", sorter:"string"},
        //{title:"Estelas", field:"rating", formatter:"star", hozAlign:"center", width:100},
        {title:"Contato do cliente", field:"contato", sorter:"string"},
    ],
});

//add row to bottom of table on button click
document.getElementById("reactivity-add").addEventListener("click", function(){
    tabledata.push({name:"IM A NEW ROW", progress:100, gender:"male"});
});

//remove bottom row from table on button click
document.getElementById("reactivity-delete").addEventListener("click", function(){
    tabledata.pop();
});

//update name on first row in table on button click
document.getElementById("reactivity-update").addEventListener("click", function(){
    tabledata[0].name = "IVE BEEN UPDATED";
});

//Build Tabulator
var table = new Tabulator("#example-table", {
    height:311,
    layout:"fitColumns",
    autoColumns:true,
    placeholder:"Awaiting Data, Please Load File",
});


var xhttp = new XMLHttpRequest();
xhttp.open("GET", "data.json", true);
xhttp.send();

//trigger AJAX load on "Load Data via AJAX" button click
document.getElementById("file-load-trigger").addEventListener("click", function(){
    //table.setDataFromLocalFile(xhttp);
    //table.setData("", )
});