const colors = require('colors');
const [startString, endString] = process.argv.slice(2);

const startNumber = Number.parseInt(startString);
const endNumber = Number.parseInt(endString);

if (Number.isNaN(startNumber) || Number.isNaN(endNumber)) {
    console.error('Please use only numbers for start and end');
    return;
}

if (startNumber < 2) {
    console.error("Please enter number higher or equal 2");
    return;
}

if (startNumber > endNumber) {
    console.error("Please enter start number less then end");
    return;
}

let number = startNumber;
let simpleNumberIndex = 1;

while (number <= endNumber) {
    let isSimpleNumber = true;
    let divider = 2;

    while (divider < number) {
        if (number % divider === 0) {
            isSimpleNumber = false;
            break;
        }

        divider++;
    }

    if (isSimpleNumber) {
        if (simpleNumberIndex % 3 === 0) {
            console.log(colors.red(number));
        } else if (simpleNumberIndex % 3 === 2) {
            console.log(colors.yellow(number));
        } else {
            console.log(colors.green(number));
        }

        simpleNumberIndex++;
    }

    number++;
}
if (simpleNumberIndex === 1) {
    console.log(colors.red('There is no simple numbers in this diapason'))
}
