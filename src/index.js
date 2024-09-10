module.exports = function toReadable(number) {
    const words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    };

    if (number === 0) return words[0];

    let result = '';
    let hundredPart = Math.floor(number / 100);
    let tenPart = number % 100;

    if (hundredPart > 0) {
        result += words[hundredPart] + ' ' + words[100];
    }

    if (tenPart > 0) {
        if (hundredPart > 0) result += ' ';

        if (tenPart < 20) {
            result += words[tenPart];
        } else {
            let tens = Math.floor(tenPart / 10) * 10;
            let ones = tenPart % 10;
            result += words[tens];
            if (ones > 0) {
                result += ' ' + words[ones];
            }
        }
    }

    return result;
};
