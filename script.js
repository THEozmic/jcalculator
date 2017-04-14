function solve (equation) {
  try {
   patch = equation.split("(")[0]; // get the position of the first bracket

   if (eval("'"+equation+"'") == patch) { // we do not have any thing to solve anymore
    return eval(patch); // return the solution
   }
   /// calculate whatever is the the first bracket, add it to the part of the expression before the first bracket
   patch += "*" + eval(equation.split("(")[1].split(")")[0]); 
   patch = eval(patch); // get the answer of the first bracket and the part before the first bracket
   other = equation.substring( equation.indexOf(')') + 1 ); // get the part after the first bracket
   patch += other; // join the part after the first bracket to the part after it
   return solve (patch); // redo the process, assuming we still have more stuff in other brackets
  } catch (e) {
    console.log ("An error has occured: [" + e + " ]"); // handle errors
  }
}