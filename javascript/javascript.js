function calcular() {
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;

if ((isNaN(peso)) || peso == "" || peso == " ")
	document.getElementById('peso').value = "Valor inválido";
else if ((isNaN(altura)) || altura == "" || altura == " ")
	document.getElementById('altura').value = "Valor inválido";
else {
	var p1 = parseFloat(peso);
	var p2 = parseFloat(altura);
	var vIMC = p1/(p2*p2);
	document.getElementById('IMC').value = vIMC;

	var acimaAbaixo = document.getElementById('A');
	if (vIMC < 18.5)
		acimaAbaixo.value = "Abaixo do peso";
	else if (vIMC <= 24.9)
		acimaAbaixo.value = "Peso ideal";
	else if (vIMC <= 29.9)
		acimaAbaixo.value = "Sobrepeso";
	else if (vIMC <= 34.9)
		acimaAbaixo.value = "Obesidade Grau 1";
	else if (vIMC <= 39.9)
		acimaAbaixo.value = "Obesidade Grau 2";
	else 
		acimaAbaixo.value = "Obesidade Grau 3";
	}
}

function limpar() {
	document.getElementById('peso').value = "";
	document.getElementById('altura').value = "";
	document.getElementById('IMC').value = "";
	document.getElementById('A').value = "";
}