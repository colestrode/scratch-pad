// fibonacci numbers using dynamic programming

var topDownMap = [0, 1];
var bottomUpMap = [0, 1];

run([topDown, topDownWithMap, bottomUp]);

function run(methods) {
  var num = process.env.FIB || 10;

  methods.forEach(function(method) {
    var start = process.hrtime();
    var result = method(num);
    var end = process.hrtime(start);
    
    console.log(method.name, result, end[0] + 's ' + end[1] / 1000000 + 'ms');
  });
}

// O(2^n) run time, O(1) space
function topDown(n) {
  if (n <= 1) return n;

  return topDown(n - 1)  + topDown(n - 2);
}

// O(n) run time, O(n) space, O(n) calls on call stack
function topDownWithMap(n) {
  if (topDownMap[n] === undefined) {
    topDownMap[n] = topDownWithMap(n - 1) + topDownWithMap(n - 2);
  }

  return topDownMap[n];
}

// O(n) run time, O(n) space, O(1) calls on call stack
function bottomUp(n) {
  if (n <= 1) return n;

  for(var i = 2; i <= n; i++) {
    if (bottomUpMap[i] === undefined) {
      bottomUpMap[i] = bottomUpMap[i - 1] + bottomUpMap[i - 2];
    }
  }

  return bottomUpMap[n];
}