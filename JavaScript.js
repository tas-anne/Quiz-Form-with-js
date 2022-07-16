function result(){
    var count=0;
    if(document.querySelector('#cor1').checked){
        count++;
    }
    if(document.querySelector('#cor2').checked){
        count++;
    }
    if(document.querySelector('#cor3').checked){
        count++;
    }
    //alert(count);
    //document.write("");
    document.querySelector("#head-bar > h1").innerHTML = "Your Result!!! ";
    document.querySelector("#head-bar > p").style.fontSize = "15px";
    document.querySelector("#head-bar > p").innerHTML = "Marks obtained: " + count;
    for(var i=2;i>=0;i--){
        let element = document.querySelectorAll(".que")[i];
        element.remove();
    }
    document.querySelector("#req").remove();
    document.querySelector("#butt").remove();
    
    
}