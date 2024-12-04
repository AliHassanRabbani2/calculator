
    function add() {

              var n1 = parseInt(document.getElementById("num1").value);
              var n2 = parseInt(document.getElementById("num2").value);

        var sum = n1 + n2
        document.getElementById("demo").innerHTML=sum
        
    };


    function mul() {
        var n1 = parseInt(document.getElementById("num1").value);
        var n2 = parseInt(document.getElementById("num2").value);

  var mul = n1 * n2
  document.getElementById("demo").innerHTML=mul;
    };

    function div() {
        var n1 = parseInt(document.getElementById("num1").value);
        var n2 = parseInt(document.getElementById("num2").value);

  var div = n1 / n2
  document.getElementById("demo").innerHTML=div;
    };

    function sub() {
        var n1 = parseInt(document.getElementById("num1").value);
        var n2 = parseInt(document.getElementById("num2").value);

  var sub = n1 - n2
  document.getElementById("demo").innerHTML=sub;
    }
