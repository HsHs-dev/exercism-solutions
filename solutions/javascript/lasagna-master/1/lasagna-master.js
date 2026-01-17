/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determine whether the lasagna is done
 * 
 * @param {number} timer
 * 
 * @returns {string} the state of the lasagna
 */
export function cookingStatus(timer) {
  if (!timer && timer !== 0) {
    return 'You forgot to set the timer.'
  }

  return timer === 0 ?
    'Lasagna is done.' : 'Not done, please wait.'
}


/**
 * Estimate the preparation time based on layers
 * 
 * @param {string[]} layers
 * @param {number} averagePreparationTime
 * 
 * @returns {number} total preparation time
 */

export function preparationTime(layers, averagePreparationTime = 2) {
  return layers.length * averagePreparationTime
}

/**
 * Compute the amounts of noodles and sauce needed
 * 
 * @param {string[]} layers
 * 
 * @returns {Object} an entity of noodles and sauce amounts
 */

export function quantities(layers) {
  const NOODLES_QUANT = 50
  const SAUCE_QUANT = 0.2

  const noodles = layers.filter(layer => layer === 'noodles').length
  const sauce = layers.filter(layer => layer === 'sauce').length

  return {
    noodles: NOODLES_QUANT * noodles,
    sauce: SAUCE_QUANT * sauce
  }
}

/**
 *  Add the secret ingredient to the provided list
 * 
 * @param {string[]} friendsList
 * @param {string[]} myList
 * 
 * @returns {void}
 */

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

/**
 * Scale the recipe to the desired proportion
 * 
 * @param {Object} recipe
 * @param {number} portions
 * 
 * @returns {Object} an entity for the recipe amounts for the given portion
 */

export function scaleRecipe(recipe, portions) {
  let scaled = {}
  for (const amount in recipe) {
    if (Object.prototype.hasOwnProperty.call(recipe, amount)) {
      scaled[amount] = recipe[amount] * (portions / 2)
    }
  }

  return scaled
}