if(process.argv.length != 3)
{
    console.log("Provide the value");
    process.exit(0);
}

const valueWanted = parseFloat(process.argv[2]);

const fixedTax = 0.6;
const percTax = 4.79;

const percCalc = (100 - percTax) / 100.0;
const result =  (valueWanted + fixedTax) / percCalc;

console.log('Result: ' + result);
console.log('Rounded result: ' + Math.ceil(result));