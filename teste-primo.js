import numeroEhPrimo from "./bib-math.js";

for (let i = 2; i < 51; i++){
    if(numeroEhPrimo(i)){
        console.log(i);
    }
}