# jogo-adivinha-numero
 Exercicio do cursos de JavaScript

## 📕 Exercicio: Quero que você crie um jogo simples do tipo adivinhe um número. Ele deve gerar um número aleatório de 1 a 100, depois desafiar o jogador a adivinhar o número em 10 rodadas. A cada rodada deve ser dito ao jogador se ele está certo ou errado, se estiver errado, deve ser dito se o palpite é muito baixo ou muito alto. Também deve ser mostrado ao jogador os números que ele tentou adivinhar anteriormente. O jogo termina se o jogador acertar o número ou acabarem o número de tentativas. Quando o jogo acabar, deve ser dado ao jogador a opção de jogar novamente.


### Passos:
1. Gerar um número aleatório entre 1 e 100.
2. Gravar o número do turno que o jogador está. Iniciar em 1.
3. Dar ao jogador uma forma de adivinhar o número.
4. Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.
5. Depois, verificar se o palpite está correto.
6. Se estiver correto:
	a. Escrever mensagem de parabéns.
	b. Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
	c. Mostrar controle que permita ao jogador reiniciar o jogo.

7. Se o palpite estiver errado e o jogador ainda tem turnos sobrando:
	a. Dizer ao jogador que ele está errado.
	b. Permitir que ele insira outra resposta.
	c. Incrementar o número do turno em 1.

8. Se o jogador está errado mas não tem turnos sobrando:
	a. Dizer ao jogador que o jogo acabou.
	b. Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
	c. Mostrar controle que permita ao jogador reiniciar o jogo.

9. Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.