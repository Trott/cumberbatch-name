import words from './words.js'
import sample from 'lodash.sample'

export default function (): string {
  const givenName = `${sample(words.givenPart1) as string}${sample(words.givenPart2) as string}`
  let surname = `${sample(words.surnamePart1) as string}${sample(words.surnamePart2) as string}`
  // 1% chance of prefix with "Mc"
  if (Math.random() < 0.01) {
    surname = 'Mc' + surname
  }
  // 1% chance of prefix with "Von"
  if (Math.random() < 0.01) {
    surname = 'Von ' + surname
  }
  return givenName + ' ' + surname
}
