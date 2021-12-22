// global variables
let data_set_array = []
let number = 0

// function to simulate a win or lose of the bet
const bet = () => { 
  let probability = document.getElementById('probability').value
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

// function to set the dataset of a chart
const data_set = () => {
  number++
  let color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
  return {
    label: `Experiment ${number}`,
    backgroundColor: color,
    borderColor: color,
    data: bet(),
  }
}

// function to render the x axis in chart
const moments = () => {
  let moment = []
  let data_label = 0

  for (let i = 0; i < data_set_array.length; i++){
    if (data_set_array[i].data.length > data_label){
      data_label = data_set_array[i].data.length
    }
  }

  for (let i = 0; i < data_label; i++) {
    moment.push(`moment ${i}`)
  }
  return moment
}

// function to add a new simulation in chart
const updateChart = () => {
  let probability = document.getElementById('probability').value
  if (probability == '') {
    return alert('Probability cant be empty')
  }

  myChart.data.datasets.push(data_set())
  myChart.data.labels = moments()

  myChart.update()
}

// function to clear chart 
const clearChart = () => {

  while(data_set_array.length > 0) {
      data_set_array.pop();
  }

  myChart.data.labels = moments()

  myChart.update()

  number = 0
}

// data and config of chart 
const data = {
  labels: moments(),
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

