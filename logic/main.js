let x_point = 20
let probability = 0.5
let lose = 0
let win = 0

for (let i = 0; i < x_point; i++){

  let y_point = 20
  while (y_point > 0 && y_point < 30) {
    if (Math.random() < probability) {
      y_point++
      //console.log(y_point)
    } else {
      y_point--
      //console.log(y_point)
    }
  }
  //console.log(y_point)

  if (y_point == 0) {
    lose++
  } else {
    win++
  }
}

console.log(`win ${win} and lose ${lose}`)
