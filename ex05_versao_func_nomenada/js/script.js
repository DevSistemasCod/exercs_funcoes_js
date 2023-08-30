function calcularArea() {
    let opcao = document.getElementById("opcao").value;
    let resultado = 0;

    switch (opcao) {
        case "quadrado":
            let lado = parseFloat(prompt("Digite o lado do quadrado:"));
            resultado = calcularAreaQuadrado(lado);
            break;
        case "retangulo":
            let largura = parseFloat(prompt("Digite a largura do retângulo:"));
            let altura = parseFloat(prompt("Digite a altura do retângulo:"));
            resultado = calcularAreaRetangulo(largura, altura);
            break;
        case "trapezio":
            let baseMaior = parseFloat(prompt("Digite a base maior do trapézio:"));
            let baseMenor = parseFloat(prompt("Digite a base menor do trapézio:"));
            let alturaTrapezio = parseFloat(prompt("Digite a altura do trapézio:"));
            resultado = calcularAreaTrapezio(baseMaior, baseMenor, alturaTrapezio);
            break;
        case "triangulo":
            let baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
            let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
            resultado = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
            break;
        case "circulo":
            let raio = parseFloat(prompt("Digite o raio do círculo:"));
            resultado = calcularAreaCirculo(raio);
            break;
        default:
            alert("Opção inválida.");
            return;
    }

    document.getElementById("resultado").textContent = `Área: ${resultado.toFixed(2)}`;
}

function calcularAreaQuadrado(lado) {
    return (lado * lado);
}

function calcularAreaRetangulo(largura, altura) {
    return (largura * altura);
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
    return (((baseMaior + baseMenor) * altura) / 2);
}

function calcularAreaTriangulo(base, altura) {
    return ((base * altura) / 2);
}

function calcularAreaCirculo(raio) {
    return (Math.PI * (raio * raio));
}
