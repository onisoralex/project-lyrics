function start() {
  let a = [1, 2, 3, 4, 5];
  console.log("5: " + a);
  a = f1(a);
  console.log("6: " + a);
  a = f2(a);
  console.log("7: " + a);
}

function f1(a) {
  a.push(6);
  console.log("6: " + a);
  return a;
}

function f2(a) {
  a.push(7);
  console.log("7: " + a);
  return a;
}

// ============================================
// Tests if variables' function scope is inherited to functions called inside functions
// If variables don't change inside scopes, then tey're safe --> They dont change, they are safe, but the type of variable is lost inside scope --> You have to create new variables inside the child function and assign the parameters to them
function parent() {
  var var_var = "test1";
  let var_let = "test2";
  const var_const = "test3";

  console.log("Parent-1: test1 = " + var_var);
  console.log("Parent-1: test2 = " + var_let);
  console.log("Parent-1: test3 = " + var_const);
  console.log("-----");

  child(var_var, var_let, var_const);

  console.log("Parent-2: test1 = " + var_var);
  console.log("Parent-2: test2 = " + var_let);
  console.log("Parent-2: test3 = " + var_const);
  console.log("-----");
}

// Tests variables with identical names as in parent function
function child(var_var, var_let, var_const) {
  var varvar = var_var;
  let varlet = var_let;
  const varconst = var_const;

  console.log("Child1-1: test1 = " + var_var);
  console.log("Child1-1: test2 = " + var_let);
  console.log("Child1-1: test3 = " + var_const);
  console.log("-----");

  var_var = var_var.concat("1");
  var_let = var_let.concat("2");
  var_const = var_const.concat("3");

  console.log("Child1-2: test11 = " + var_var);
  console.log("Child1-2: test22 = " + var_let);
  console.log("Child1-2: test33 = " + var_const);
  console.log("-----");

  varvar = varvar.concat("d");
  varlet = varlet.concat("d");
  // varconst = var_const.concat("3"); // Throws an exception as it should

  console.log("Child1-3: test1d = " + varvar);
  console.log("Child1-3: test2d = " + varlet);
  console.log("Child1-3: test3 = " + varconst);
  console.log("-----");
}