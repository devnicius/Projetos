var date = new Date();


//var dateFormat = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 

//define data
var tabledata = [
];


//Build Tabulator
const table = new Tabulator("#example-table", {
    
    height:"100%",
    placeholder:"No Data Available",
    layout:"fitColumns",
    resizableRows:false,
    columnMinWidth:50,
    
    resizableColumns:false,
    reactiveData:true, //turn on data reactivity
    ajaxURL:"recepcionista/assets/data.json",
    columns:[
        {title:"Quarto", field:"quarto", width:90},
        //{title:"Progress", field:"progress", sorter:"number", formatter:"progress"},
        {title: "Preço", field: "preco", width:100},
        {title:"Data da reserva", field:"data", sorter:date, width:200, },
        //{title:"Estelas", field:"rating", formatter:"star", hozAlign:"center", width:100},
        {title:"Contato do cliente", field:"contato", sorter:"string", width:200},
    ],
});


table.setDataFromLocalFile(".json");
//add row to bottom of table on button click
//document.getElementById("reactivity-add").addEventListener("click", function(){
 //   tabledata.push({quarto:0, preco:000, data:"dd/mm/yy", contato:"example@mail.com"});
//});

//remove bottom row from table on button click
//document.getElementById("reactivity-delete").addEventListener("click", function(){
//    tabledata.pop();
//});

