function solve (equation) {
  try {
    // resolve brackets before any other expression
    equation = equation.split("");
    if (equation[0] == "*") {
      equation[0] = "";
    }

    if (equation[equation.length - 1] == "*") {
      equation[equation.length - 1] = "";
    }
    equation = equation.join("");
    
    equation = equation.replace("x", "*"); // remove X and replace with *
    
    patch = equation.split("(")[0]; // get the position of the first bracket
    
    if (eval("'"+equation+"'") == patch) { // we do not have any thing to solve anymore
      return eval(patch); // return the solution
    }
    // calculate whatever is the the first bracket, add it to the part of the expression before the first bracket
    patch += "*" + eval(equation.split("(")[1].split(")")[0]); 
    
    patch += equation.split("(")[0] + "*"; // change first bracket to "*"
   
    other = equation.substring( equation.indexOf(')') + 1 ); // get the part after the first bracket
    
    patch += other; // join the part after the first bracket to the part after it
    
    return solve (patch); // redo the process, assuming we still have more stuff in other brackets

  }catch (e) {
    console.log ("An error has occured: [" + e + " ]"); // handle errors
    return "Error";
  }
}

var prev = "";
$(".abtn, .equals").on("click", function () {

  var action = $(this).attr("data-value").toLowerCase();

  if(action !== "ce")
    prev = $("#output").val();

  switch (action) {

    case "=":
      $("#output").val(solve($("#output").val()));
    break;

    case "ce":
      $("#output").val(prev.toString());
    break;

    case "c":
       $("#output").val("");
    break;

    default:
      $("#output").val($("#output").val() + action.toString());

  }

});

$('.equals').click(function(){
  $('.blink').hide();
});
$('.abtn').click(function(){
  $('.blink').show();
});

/*bind keyboard to buttons*/
$(document).keydown(function(e) {
    switch(e.which) {
        case 49: 
        case 97: 
        $('.one').click();
        break;

        case 50:
        case 98:
        $('.two').click(); 
        break;

        case 51:
        case 99:
        $('.three').click();
        break;

        case 52:
        case 100:
        $('.four').click();
        break;

        case 53:
        case 101:
        $('.five').click(); 
        break;

        case 54:
        case 102:
        $('.six').click();
        break;

        case 55:
        case 103:
        $('.seven').click();
        break;

        case 56: 
        case 104: 
        $('.eight').click();
        break;

        case 57:
        case 105:
        $('.nine').click();
        break;

         case 48:
         case 96:
        $('.zero').click();
        break;

        case 190: 
        $('.dot').click();
        break;

        case 107:
        $('.add').click();
        break;

         case 109:
        $('.minus').click();
        break;

        case 106: 
        $('.times').click();
        break;

        case 111:
        $('.divide').click();
        break;        

        case 8: 
        $('.ce').click();
        break;



        case 67: 
        $('.c').click();
        break;

        case 13: 
        $('.equals').click();
        break;

        case 187: 
        $('.equals').click();
        break;



        default: return;
    }
});
