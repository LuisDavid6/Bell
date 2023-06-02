export const convertPrice = (price: Number) => {
  let priceLong = '' + price
  let negative = false
  if (priceLong[0] === '-') {
    priceLong = priceLong.substring(1)
    negative = true
  }
  let point = 0
  let result = ''
  for (let i = priceLong.length - 1; i >= 0; i--) {
    result = priceLong[i] + result
    point++
    if (point === 3 && i !== 0) {
      result = '.' + result
      point = 0
    }
  }
  return negative ? '$-' + result : '$' + result
}
