// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((allMash) => {
    if(state.mushrooms) {
      allMash.style.visibility = 'visible';
    } else {
      allMash.style.visibility = 'hidden';
    }
  });

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((grePep) => {
    if(state.greenPeppers) {
      grePep.style.visibility = 'visible';
    } else {
      grePep.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauceAddRem = document.querySelector('.sauce');
  if (state.whiteSauce === false) {
  whiteSauceAddRem.classList.remove('sauce-white');
} else {
  whiteSauceAddRem.classList.add('sauce-white');
}
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustGlutenFree = document.querySelector('.crust');
  if (state.glutenFreeCrust === false) {
    crustGlutenFree.classList.remove('crust-gluten-free');
  } else {
    crustGlutenFree.classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  //pepperoni: true,
  const pepBtnActive = state.pepperoni
  const pepBtn = document.querySelector('.btn.btn-pepperoni')

  if (pepBtnActive === true) {
    pepBtn.classList.add('active');
  } else {
    pepBtn.classList.remove('active');
  }

  //mushrooms: true,
  const mashBtnActive = state.mushrooms

  if (mashBtnActive === true) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }

  // greenPeppers: true,
  const grPepBtnActive = state.greenPeppers
  
  if (grPepBtnActive === true) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }
 
  // whiteSauce: false,
  const whSauceBtnActive = state.whiteSauce
  
  if (whSauceBtnActive === true) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }

  // glutenFreeCrust: false
  const GlFrCrustBtnActive = state.glutenFreeCrust
  
  if (GlFrCrustBtnActive === true) {
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  // pepperoni: true,
  // mushrooms: true,
  // greenPeppers: true,
  // whiteSauce: false,
  // glutenFreeCrust: false

  if(state.pepperoni) {
    document.querySelector('aside.panel.price ul li:nth-child(1)').style.display = 'block';
  } else {
    document.querySelector('aside.panel.price ul li:nth-child(1)').style.display = 'none';
  }
  if(state.mushrooms) {
    document.querySelector('aside.panel.price ul li:nth-child(2)').style.display = 'block';
  } else {
    document.querySelector('aside.panel.price ul li:nth-child(2)').style.display = 'none';
  }
  if(state.greenPeppers) {
    document.querySelector('aside.panel.price ul li:nth-child(3)').style.display = 'block';
  } else {
    document.querySelector('aside.panel.price ul li:nth-child(3)').style.display = 'none';
  }
  if(state.whiteSauce === false) {
    document.querySelector('aside.panel.price ul li:nth-child(4)').style.display = 'none';
  } else {
    document.querySelector('aside.panel.price ul li:nth-child(4)').style.display = 'block';
  }
  if(state.glutenFreeCrust === false ) {
    document.querySelector('aside.panel.price ul li:nth-child(5)').style.display = 'none';
  } else {
    document.querySelector('aside.panel.price ul li:nth-child(5)').style.display = 'block';
  }
 


  // const finalPrice = basePrice;
  // for (let ing in ingredients) {
  //   if(state[ing]) {
  //     finalPrice += ingredients[ing].price
  //   }
  // }
  // document.querySelector('aside.panel.price strong').textContent = `$${finalPrice}`
  

  let totalPrice = basePrice

  for (let ingrePrice in ingredients) {
    if (state[ingrePrice]) {
      totalPrice += ingredients[ingrePrice].price
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = `$${totalPrice}`


  // const ingredients = {
  //   pepperoni: { name: 'pepperoni', price: 1 },
  //   mushrooms: { name: 'Mushrooms', price: 1 },
  //   greenPeppers: { name: 'Green Peppers', price: 1 },
  //   whiteSauce: { name: 'White sauce', price: 3 },
  //   glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
  // };

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni; 
  // Very clear and clean code... a little bit wierd for me to express it this way. I'm not that advanced... ,yet! :P :D 
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function() {
  // state.mushrooms = !state.mushrooms; 
  //trying different ways... experimenting... hahah O.O
  if(state.mushrooms === true) {
    state.mushrooms = false;
  } else {
    state.mushrooms = true;
  };
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click' , function() {
  // state.greenPeppers = !state.greenPeppers;
  // renderEverything();
  if (state.greenPeppers === true) {
    state.greenPeppers = false;
  } else if (state.greenPeppers === false) {
    state.greenPeppers = true;   
  };
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce; // ! => the oposide of state.whiteSauce 
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust // To be opposide of it's current state. 
  renderEverything();
});
