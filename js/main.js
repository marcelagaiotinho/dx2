function Desafioum(){
    
    var Numero,     
        x,      
        maistocada,    
        contador;     
    
    const saida = document.querySelector('h1'); 
    
    Numero = prompt("Qual o número de músicas?");
    
    maistocada = 0;    
    contador = 1;     
    
    while (contador <= Numero ) {
        
        x = prompt("Quantas vezes a música " + contador + " foi tocada?"); 
        if (x > maistocada) {
            maistocada = x;   
        }
        contador++;
    }
    
    saida.innerHTML = "A música mais tocada tocou: " + maistocada + " vezes!";
    }



function Desafiodois() {
    const quantAluno = parseInt(prompt('Digite a quantidade:'));

    let contador = 1;
    let NotaMaior = -1;
    let AlunoMaisInteligente = '';

    const saida = document.querySelector('h1'); 

    if (quantAluno >= 1 && quantAluno <= 20){
        while (contador <= quantAluno){
            const nomeAluno = prompt('Qual o nome do aluno?');
            const notaAluno = prompt('Forneça a nota do aluno:');

            if(!isNaN(notaAluno) && notaAluno >NotaMaior) {
                NotaMaior = notaAluno; AlunoMaisInteligente = nomeAluno;
            }

            contador++;
        }

        if (AlunoMaisInteligente !== '') {
            saida.innerHTML ="O aluno com a maior nota é: " +AlunoMaisInteligente;
        } else {
            saida.innerHTML ="Dado inválido!";
        }
    } else {
        saida.innerHTML ="Verifique as restrições!"
    }
}
