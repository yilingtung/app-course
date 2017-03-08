var addclosure = (() => {
  var counter = 0;
  return () => {
    counter += 1;
    console.log(counter);
  }
})();
addclosure();
addclosure();
addclosure();

var add = (x) => {
  return (y) => {
    console.log(x+y);
  };
}

var add7 = add(7);
add7(3);
