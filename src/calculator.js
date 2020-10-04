class Calculator {
  constructor(lang) {
    this.lang = lang;
    this.numbers = lang === 'en' ? {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
    } : {
      Einz: 1,
      Zwei: 2,
      Drei: 3,
      Vier: 4,
      Funf: 5,
      Sechs: 6,
      Sieben: 7,
      Acht: 8,
      Neun: 9,
      Zehn: 10,
    };
  }

  wordToNumber(word) {
    return this.numbers[word];
  }

  calculate(input) {
    const [left, operation, right] = input.split(' ');

    switch (operation) {
      case 'plus':
        return this.wordToNumber(left) + this.wordToNumber(right);
      case 'minus':
        return this.wordToNumber(left) - this.wordToNumber(right);
      case 'times':
      case 'mal':
        return this.wordToNumber(left) * this.wordToNumber(right);
      default:
        return 'unknown operation';
    }
  }
}

module.exports = Calculator;
