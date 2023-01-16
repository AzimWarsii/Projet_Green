// Hamburger Menu

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

// Calculator

const calculateBtn = document.getElementById("calculate-btn");

 calculateBtn.addEventListener("click", () =>{

    const petrolInput = parseFloat(document.getElementById('petrol').value);
    const electricityInput = parseFloat(document.getElementById('paper').value);
    const paperInput = parseFloat(document.getElementById('electricity').value);

    const plantsToPlant = petrolInput + electricityInput + paperInput;

    document.getElementById('result').innerHTML = plantsToPlant;

  })


