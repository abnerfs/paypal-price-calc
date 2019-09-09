if(process.argv.length != 3)
{
    console.log("Informe o valor a ser calculado");
    process.exit(0);
}

const valor = parseFloat(process.argv[2]);

const taxaFixa = 0.6;
const percentual = 4.79;

const percentualCalc = (100 - percentual) / 100.0;
const resultado =  (valor + taxaFixa) / percentualCalc

console.log('Resultado: ' + resultado);
console.log('Resultado arredondado: ' + Math.ceil(resultado));