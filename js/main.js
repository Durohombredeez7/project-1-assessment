let totalSum = 0;
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const input = document.getElementById('input');
const output = document.getElementById('result');

output.textContent = totalSum;

plus.addEventListener('click',() => {
  // console.log('plus is clicked');
  // add input into the totalSum
  // console.log(input.value);
  totalSum += parseInt(input.value);
  output.textContent = totalSum;
  if (totalSum < 0) {
    // console.log('negative num')
    output.style.color = 'red';
  } else {
    output.style.color = 'black';
  }
})

minus.addEventListener('click',() => {
  // console.log('minus is clicked');
  // subtract input from the totalSum
  // console.log(input.value);
  totalSum -= parseInt(input.value);
  output.textContent = totalSum;
  if (totalSum < 0) {
    // console.log('negative num')
    output.style.color = 'red';
  } else {
    output.style.color = 'black';
  }
})



