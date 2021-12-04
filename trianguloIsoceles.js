console.group("Triángulo");

function alturaTrianguloIsosceles(ladoUno, ladoDos, ladoTres) {
    if (ladoUno === ladoDos && ladoUno != ladoTres && ladoDos != ladoTres) {
        altura = Math.sqrt(ladoUno ** 2 - (ladoTres / 2) ** 2);
        console.log("Es un triángulo Isósceles: ");
        return altura;
    } else if (ladoUno === ladoTres && ladoUno != ladoDos && ladoTres != ladoDos) {
        altura = Math.sqrt(ladoUno ** 2 - ((ladoDos / 2) ** 2));
        console.log("Es un triángulo Isósceles: ");
        return altura;
    } else if (ladoDos === ladoTres && ladoDos != ladoUno && ladoTres != ladoUno) {
        altura = Math.sqrt(ladoDos ** 2 - (ladoUno / 2) ** 2);
        console.log("Es un triángulo Isósceles: ");
        return altura;
    }
    else {
        console.log("No es un triángulo Isósceles")
    }
}

console.groupEnd();

function calculoIsosceles() {
    const inputUno = document.getElementById("ladoUno");
    const inputDos = document.getElementById("ladoDos");
    const inputTres = document.getElementById("ladoTres");
    const valueUno = Number(inputUno.value);
    const valueDos = Number(inputDos.value);
    const valueTres = Number(inputTres.value);
}