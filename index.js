const string = "Hello World, Welcome to the Javascript cool animation";
const text = document.querySelector('p');
const buttons = document.querySelectorAll('button');
let interval;

function animate(speed) {
  let i = 0;
  text.innerHTML = "";
  clearInterval(interval);
  interval = setInterval(() => {
    if (i < string.length) {
      text.innerText += string[i];
      console.log(string[i]);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 1000 / speed);
}

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const speed = e.target.value;
    animate(speed);
  });
});