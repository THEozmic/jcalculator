function solve (equation) {
   patch = equation.split("(")[0];

   if (eval("'"+equation+"'") == patch) {
    return eval(patch);
   }
   patch += "*" + eval(equation.split("(")[1].split(")")[0]);
   patch = eval(patch);
   other = equation.substring( equation.indexOf(')') + 1 );
   patch += other; 
   return solve (patch);
}
console.log(solve("25"));