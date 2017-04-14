function solve (equation) {
  try {
    equation = equation.replace("x", "*"); // remove X and replace with *
    patch = equation.split("(")[0]; // get the position of the first bracket

    if (eval("'"+equation+"'") == patch) { // we do not have any thing to solve anymore
      return eval(patch); // return the solution
    }
    // calculate whatever is the the first bracket, add it to the part of the expression before the first bracket
    patch += "*" + eval(equation.split("(")[1].split(")")[0]); 
    other = equation.substring( equation.indexOf(')') + 1 ); // get the part after the first bracket
    patch += other; // join the part after the first bracket to the part after it
    return solve (patch); // redo the process, assuming we still have more stuff in other brackets

  }catch (e) {
    console.log ("An error has occured: [" + e + " ]"); // handle errors
    return "Error";
  }
}

var prev = "";
$(".btn").on("click", function () {

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
