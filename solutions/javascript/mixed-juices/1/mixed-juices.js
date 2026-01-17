// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

  let time = 0
  
  switch(name) {
    case 'Pure Strawberry Joy': time = 0.5
    break
    case 'Energizer': time = 1.5
    break
    case 'Green Garden': time = 1.5
    break
    case 'Tropical Island': time = 3
    break
    case 'All or Nothing': time = 5
    break
    default: time = 2.5
  }

  return time
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const SMALL_LIME_WEDGES = 6
  const MED_LIME_WEDGES = 8
  const LARGE_LIME_WEDGES = 10
  
  let wedges = 0
  let limesNeeded = 0
  
  for (const lime of limes) {
    if (wedges >= wedgesNeeded) {
      break
    }
    
    if (lime === 'small') {
      wedges += SMALL_LIME_WEDGES
      limesNeeded++
    } else if (lime === 'medium') {
      wedges += MED_LIME_WEDGES
      limesNeeded++
    } else {
      wedges += LARGE_LIME_WEDGES
      limesNeeded++
    }

  }

  return limesNeeded
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let juicesTime = 0
  let i
  for (i = 0; i < orders.length; i++) {
    juicesTime += timeToMixJuice(orders[i])
    if (juicesTime >= timeLeft) {
      break;
    }
  }

  return orders.slice(i + 1)
}
