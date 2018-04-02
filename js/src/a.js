function test (a,c) {
  console.log(arguments)
  console.log(a, b, c, d) // 5 undefined [Function: c] undefined
  var b = 3;
  a = 4
  function c () {

  }
  var d = function () {

  }
  console.log(a, b, c, d) // 4 3 [Function: c] [Function: d]

  var c = 5
  console.log(a, b, c, d) // 4 3 5 [Function: d]

}

test(5,6)