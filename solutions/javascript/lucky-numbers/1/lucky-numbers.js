// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const x = Number(array1.join(""))
  const y = Number(array2.join(""))
  return x + y
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueAsStr = String(value)
  const part1 = valueAsStr.substring(
    0,
    valueAsStr.length % 2 === 0 ? valueAsStr.length / 2 : (valueAsStr.length / 2) + 1
  )
  const part2 = valueAsStr.substring(valueAsStr.length / 2).split("").reverse().join("")

  return part1 === part2
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

  if (!input) {
    return 'Required field'
  }

  if (!Number(input)) {
    return 'Must be a number besides 0'
  }


  return ''
}
