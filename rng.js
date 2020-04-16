$(document).ready(function(){

    $("button").click(function(){
        var inputLB = document.getElementById("inputLB").value;
        var inputRB = document.getElementById("inputRB").value;

        var outputh1 = document.getElementById("outputh1");

        if( (inputLB != "") && (inputRB != "") && !isNaN(inputLB) && !isNaN(inputRB) ) {
            var intLB = parseInt(inputLB);
            var intRB = parseInt(inputRB);

            outputh1.innerHTML = "Your num is " + getRandomIntInclusive(intLB, intRB);

        }
        else {
            alert("type a number or something");
        }

       
    });

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

});