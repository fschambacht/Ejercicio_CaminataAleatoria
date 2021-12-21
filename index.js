let data_label = 0
let data_set_array = []
let iterations_number = 5

const bet = () => {
  let probability = 0.29
  let y_data = []
  let y_point = 20

  while (y_point > 0 && y_point < 30) {
    if (Math.random() < probability) {
      y_point++
      y_data.push(y_point)
    } else {
      y_point--
      y_data.push(y_point)
    }
  }
  return y_data
}

const data_set = (number) => {
  let color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
  return {
    label: `Experiment ${number}`,
    backgroundColor: color,
    borderColor: color,
    data: bet(),
  }
}

for (let i = 0; i < iterations_number; i++){
  let data = data_set(i+1)
  data_set_array.push(data)
}

for (let i = 0; i < iterations_number; i++){
  if (data_set_array[i].data.length > data_label){
    data_label = data_set_array[i].data.length
  }
}

let moment = []
for (let i = 0; i < data_label; i++) {
  moment.push(`moment ${i}`)
}

const data = {
  labels: moment,
  datasets: data_set_array
};

const config = {
    type: 'line',
    data: data,
    options: {}
  };

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
