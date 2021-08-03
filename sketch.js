

var a = prompt('Enter the first variable: ');
var b = prompt('enter thye second variable: ');
function setup(){
  var b2 = createButton("click here to Swap");
  b2.mousepressed(swap)
  }


function draw()
{
}
function swap(){
  [a, b] = [b, a];
 console.log('new value of a' +a)
 console.log('new value of b' +b)
}