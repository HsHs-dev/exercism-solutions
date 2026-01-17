/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {

  const MARG = 7
  const CAPR = 9
  const FORM = 10
  const EXTRA_SAUCE = 1
  const EXTRA_TOPPINGS = 2


  if (extras.length === 0) {
    if (pizza === 'Margherita') {
      return MARG
    } else if (pizza === 'Caprese') {
      return CAPR
    } else {
      return FORM
    }
  }

  if (extras[0] === 'ExtraSauce') {
    return pizzaPrice(pizza, ...extras.slice(1)) + EXTRA_SAUCE
  } else {
    return pizzaPrice(pizza, ...extras.slice(1)) + EXTRA_TOPPINGS
  }

}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras)
  }

  return total
}
