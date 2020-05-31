let botaoReset = document.querySelector('#reset');
botaoReset.style.display = 'none';
// Gera um numero aleatorio de 1 a 100
var numero = Math.floor(Math.random() * 100);

// Guarda os numeros que for digitado errado
var erros = [];

// Conta quantas tentivas
var tentativas = 1;

// Funçao ativada quando clica no botao
function verificar(){
	let valor = parseInt(document.querySelector('input').value);
	if(valor === numero && typeof(valor) === 'number'){
		alert('Acertou');
		botaoReset.style.display = 'block';
	} else if(tentativas >= 10){
		alert('Perdeu!');
		botaoReset.style.display = 'block';
	} else{
		// Adiciona mais uma tentativa
		tentativas++;
		// Adiciona o numero errado e diz se foi valor foi alto ou a baixo do numero gerado
		erros.push(valor);
		document.querySelector('#erros').innerHTML = 'Erros: ' + erros;
		if(valor > numero){
			document.querySelector('#dica').innerHTML = "Valor muito alto!";
		} else{
			document.querySelector('#dica').innerHTML = "Valor muito baixo!";
		}
		// Esvazia o valor do input
		document.querySelector('input').value = "";
	}
}
