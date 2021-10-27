//set first data in local storage for 3B form if empty in local storage ( this will run for first time only to prevent error)
if (localStorage.getItem("irf") === null) {

  myObj = [];
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("irf", myJSON);
}

  //add new empty irf form
  function newform(){
    myObj = JSON.parse(window.localStorage.getItem('irf'));
    p = {
      name: $('#irf1').val(),
      department: $('#irf2').val(),
      item: $('#irf7').val(),
      qt: '',
    };
    myObj.push(p);
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("irf", myJSON);
  }
  myObj = JSON.parse(localStorage.getItem('irf'));

//generate list of all 3B form that exist in local storage including empty form

var modalirfitem = ' data-toggle="modal" data-target="#exampleModal"'

var qtlink = "<a href='quotationadd.html'>add</a>  <a href='quotationview.html'>view</a>";

myObj = JSON.parse(localStorage.irf);
var x = 0;
$( "#irflist" ).append( "<table class='table table-bordered'><tr><th>No.</th><th> Name </th><th> Department </th><th> Item Description </th><th> Quotation </th> <th> PR</th></tr>" );
while(x < myObj.length){
  $( "#irflist table" ).append( "<tr><td>"+x+"</td><td> "+myObj[x].name+"</td><td> "+myObj[x].department+"</td><td "+modalirfitem+"> "+myObj[x].item+"</td><td> "+qtlink+" </td> <td> PR</td></tr>" );
  x=x+1;
}
// function popirf(val){
//   $( ".modal-body" ).html(val);
// }
// onclick="popirf(this.innerHTML);"

function addquotation(){
  myObj = JSON.parse(window.localStorage.getItem('irf'));
  qt = {
    item: $('#qt1').val(),
    price: $('#qt2').val(),
    brand: $('#qt3').val(),
    quantity: $('#qt4').val(),
    delivery: $('#qt5').val(),
  };
  myObj.qt = qt;
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("irf", myJSON);
}
