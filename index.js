console.log(process.argv);

const numero = parseInt(process.argv[2]);  //DEIXA O CODIGO MAIS DINAMICO, PROCESS.ARGV NO CONSOLE.LOG
const multiplos = [];

for(var i =0; i<numero;i++){
    if((i%3 ===0) || (i%5 === 0)){
        multiplos.push(i);
    };
};
console.log(multiplos);