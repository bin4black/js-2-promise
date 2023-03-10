// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};
let is_shop_open = true;
//
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('Our shop is closed,ejecucion del reject'));
    }
  });
};
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`)).then(() => {
  return order(0, () => console.log('production has started'))
    .then(() => {
      return order(2000, () => console.log('Fruit has been chopped'));
    })

    .then(() => {
      return order(1000, () =>
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
      );
    })

    .then(() => {
      return order(1000, () => console.log('start the machine'));
    })

    .then(() => {
      return order(2000, () =>
        console.log(`ice cream placed on ${stocks.holder[1]}`)
      );
    })

    .then(() => {
      return order(3000, () =>
        console.log(`${stocks.toppings[0]} as toppings`)
      );
    })

    .then(() => {
      return order(2000, () => console.log('Serve Ice Cream-TERMINADO'));
    })

  })
.catch(() => {
  console.log('Customer left,ejecucion del .catch');
})
.finally(()=>{
  console.log("--FIN---, el .finally se ejecuta siempre")
})
