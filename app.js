if(process.argv.length != 3)
{
    console.log("Provide the value");
    process.exit(0);
}

const valueWanted = parseFloat(process.argv[2]);

const fixedFee = 0.6;
const percFee = 4.79;

const percCalc = (100 - percFee) / 100.0;
const result =  (valueWanted + fixedFee) / percCalc;

console.log('Result: ' + result);
console.log('Rounded result: ' + Math.ceil(result));