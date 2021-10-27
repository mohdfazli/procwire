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
//adding qt items to localStorage onclick row

if (localStorage.getItem("qtitem") === null) {
  myObj = [];
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("qtitem", myJSON);
}

function newqtitem(x){
  myObj = JSON.parse(window.localStorage.getItem('qt'));
  qtitem = JSON.parse(window.localStorage.getItem('qtitem'));
  q = {
    item: myObj[x].item,
    price: myObj[x].price,
    brand: myObj[x].brand,
    quantity: myObj[x].quantity,
    delfee: myObj[x].delfee,
  };
  qtitem.push(q);
  myJSON = JSON.stringify(qtitem);
  localStorage.setItem("qtitem", myJSON);

  updateqtview();
}

function updateqtview(){
  myObj = JSON.parse(localStorage.qtitem);
  var x = 0;
  var totalqtprice = 0;
  $( "#qtitem" ).html("");
  $( "#qtitem" ).append( "<table class='table table-bordered'><tr><th>No.</th><th> Item </th><th> Price </th><th> Brand </th><th> Quantity </th> <th> Delivery Fee</th></tr>" );
  while(x < myObj.length){
    $( "#qtitem table" ).append( "<tr><td "+additem+">"+x+"</td><td> "+myObj[x].item+"</td><td> "+myObj[x].price+"</td><td> "+myObj[x].brand+"</td><td> "+myObj[x].quantity+" </td> <td>"+myObj[x].delfee+"</td></tr>" );
    totalqtprice = totalqtprice + (parseInt(myObj[x].price)*parseInt(myObj[x].quantity)) + parseInt(myObj[x].delfee);
    x=x+1;
  }
  $( "#qtitem" ).append("<h5>Total Price (RM) : "+totalqtprice+"</h5>");
}

//generate list of all quotation form that exist in local storage including empty form
updateqtview();
var qtlink = "<a href='quotationadd.html'>add</a>";
var additem = "onclick=newqtitem(this.firstChild.innerHTML)"

myObj = JSON.parse(localStorage.qt);
var x = 0;
$( "#qtlist" ).append( "<table class='table table-bordered'><tr><th>No.</th><th> Item </th><th> Price </th><th> Brand </th><th> Quantity </th> <th> Delivery Fee</th></tr>" );
while(x < myObj.length){
  $( "#qtlist table" ).append( "<tr "+additem+"><td>"+x+"</td><td> "+myObj[x].item+"</td><td> "+myObj[x].price+"</td><td> "+myObj[x].brand+"</td><td> "+myObj[x].quantity+" </td> <td>"+myObj[x].delfee+"</td></tr>" );
  x=x+1;
}

//PR generated when click button Generate PR form
if (localStorage.getItem("pr") === null) {
  myObj = [];
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("pr", myJSON);
}

function addprform(){ //this will add pr data into localStorage
  var totalprprice = 0;
  var x=0;
  qtitem = JSON.parse(window.localStorage.getItem('qtitem'));
  irf = JSON.parse(window.localStorage.getItem('irf'));
  pr = JSON.parse(window.localStorage.getItem('pr'));
  while(x < qtitem.length){
    totalprprice = totalprprice + (parseInt(qtitem[x].price)*parseInt(qtitem[x].quantity)) + parseInt(qtitem[x].delfee);
    x=x+1;
  }
  q = [{
    item: qtitem,
    department: irf[0].department,
    requisitor: irf[0].name,
    totalprice: totalprprice,
  }];
  // pr.push(q);
  myJSON = JSON.stringify(q);
  localStorage.setItem("pr", myJSON);
}
