// add solution here
function theBeatlesPlay(musicians, insturments){
  var print = []
  for (i=0; i<musicians.length; i++){
    print.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return print
}

function johnLennonFacts(array){
  var i = 0
  while (array.length>i){
    array[i] = array[i]+"!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(num){
  var arr = []
  do {
    arr.push("I love the Beatles!")
  } while (num<15);
}