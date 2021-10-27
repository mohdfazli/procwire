updateqtview()
function updateqtview(){
  myObj = JSON.parse(localStorage.pr);
  var x = 0;
  $( "#prlist" ).html("");
  $( "#prlist" ).append( "<table class='table table-bordered'><tr><th>No.</th><th> Department </th><th> Item </th><th> Requisitor </th><th> Total Price </th><th> Approval </th><th> Recommended </th></tr>" );
  while(x < myObj.length){
    $( "#prlist table" ).append( "<tr><td>"+x+"</td><td> "+myObj[x].department+"</td><td> View Items</td><td> "+myObj[x].requisitor+"</td><td> "+myObj[x].totalprice+" </td><td>MD</td><td>CEO</td></tr>" );
    x=x+1;
  }
}
