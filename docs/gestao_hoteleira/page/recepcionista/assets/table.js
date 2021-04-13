//define data
var tabledata = [
    {id:1, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red" },
    {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue" },
    {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green" },
    {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange" },
    {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow"},
];

//Build Tabulator
var table = new Tabulator("#example-table", {
    height:"311px",
    layout:"fitColumns",
    reactiveData:true, //turn on data reactivity
    data:tabledata, //load data into table
    columns:[
        {title:"Name", field:"name", sorter:"string", width:200},
        {title:"Progress", field:"progress", sorter:"number", formatter:"progress"},
        {title:"Gender", field:"gender", sorter:"string"},
        {title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100},
        {title:"Favourite Color", field:"col", sorter:"string"},
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