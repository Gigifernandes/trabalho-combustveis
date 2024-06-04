var etanol;
var gasolina;
let resultado;
function calcular() {
    let etanol= parseFloat(document.getElementById('etanol').value);
    let gasolina= parseFloat(document.getElementById('gasolina').value);
 
    let resultado = etanol / gasolina; //calcula valor
 
    if (etanol < 0.70 * gasolina) {
        document.getElementById('status').src="imagens/tanqueEtanol.png";
    } else {
        document.getElementById('status').src="imagens/tanqueGasolina.png";
    }
    document.getElementById("mensagem").innerHTML = `Resultado: ${resultado.toFixed(2)}`;
}
//Função Limpar
function limpar() {
    document.getElementById('status').src='imagens/tanque.png';
    document.getElementById('mensagem').innerHTML= '';
    document.getElementById('etanol').value= '';
    document.getElementById('gasolina').value= '';
}
