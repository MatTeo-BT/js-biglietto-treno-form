const distanza = parseInt(prompt(`Scrivi la distanza del tuo viaggio in km`));
const eta = parseInt (prompt(`Quanti anni hai?`));

let prezzo = distanza * 0.19;

const minorenne = eta < 18;
const over65 = eta >= 65;

if (minorenne){
    prezzo = prezzo * 0.8;
}else if (over65){
    prezzo = prezzo * 0.4;
}

document.getElementsByClassName(`distanza`).innerHTML = `
La distanza totale del tuo viaggio è: ${prezzo.toFixed(2)}
`;
