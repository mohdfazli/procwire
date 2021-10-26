//set first data in local storage for 3B form if empty in local storage ( this will run for first time only to prevent error)
if (localStorage.getItem("qt") === null) {
  myObj = [];
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("qt", myJSON);
}

function newqtform(){
  myObj = JSON.parse(window.localStorage.getItem('qt'));
  p = {
    item: $('#qt1').val(),
    price: $('#qt2').val(),
    brand: $('#qt3').val(),
    quantity: $('#qt4').val(),
    delfee: $('#qt5').val(),
  };
  myObj.push(p);
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("qt", myJSON);
}

//generate list of all quotation form that exist in local storage including empty form

var modalirfitem = ' data-toggle="modal" data-target="#exampleModal"'

var qtlink = "<a href='quatationadd.html'>add</a>";

myObj = JSON.parse(localStorage.irf);
var x = 0;
$( "#irflist" ).append( "<table class='table table-bordered'><tr><th>No.</th><th> Name </th><th> Department </th><th> Item Description </th><th> Quotation </th> <th> PR</th></tr>" );
while(x < myObj.length){
  $( "#irflist table" ).append( "<tr><td>"+x+"</td><td> "+myObj[x].name+"</td><td> "+myObj[x].department+"</td><td "+modalirfitem+"> "+myObj[x].item+"</td><td> "+qtlink+" </td> <td> PR</td></tr>" );
  x=x+1;
}
