//console.log('Loaded!');


//var element = document.getElementById('main-text');

//element.innerHTML = 'New Value';

//var img = document.getElementById('madi');
//var marginLeft = 0;
//function moveRight(){
  //  marginLeft = marginLeft + 1;
    //img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick = function(){
  //  var interval = setInterval(moveRight,50);
//};

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    //create a request object
    var request = new XMLHttpRequest();
    
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
            }
        }
        //not done yet
    };
    
    //render the variable in the correct span
   // counter = counter +1;
    //var span = document.getElementById('count');
    //span.innerHTML = counter.toString();
    
    //make the request
    request.open('GET','http://preethi93ravi.imad.hasura-app.io/')
};