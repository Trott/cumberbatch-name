import words from './words.js';
import sample from 'lodash.sample';
export default function () {
    const givenName = `${sample(words.givenPart1)}${sample(words.givenPart2)}`;
    let surname = `${sample(words.surnamePart1)}${sample(words.surnamePart2)}`;
    // 1% chance of prefix with "Mc"
    if (Math.random() < 0.01) {
        surname = 'Mc' + surname;
    }
    // 1% chance of prefix with "Von"
    if (Math.random() < 0.01) {
        surname = 'Von ' + surname;
    }
    return givenName + ' ' + surname;
}
