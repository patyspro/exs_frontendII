let placar = {
    empate: 0,
    jogador: 0,
    computador: 0
}

function dadosJogador(){
    let jogador = parseInt(prompt(" Escolha [1]: Pedra,[2]: Papel,[3]:Tesoura ")); 
    if(jogador !=1 && jogador !=2 && jogador !=3){
        alert("Digite uma opção válida");
        dadosJogador();
    }
    let computador = parseInt(Math.random() * 3 + 1);

    return{
        jogador,
        computador
    }
}



function jokenpo(){
    for (let i = 0; i < 3; i++) {

        let{computador,jogador} =dadosJogador();

        switch (jogador) {
            case 1:
                if (computador == 1) {
                    placar.empate++
    
                } else if (computador == 2) {
                    placar.computador++
    
                } else {
    
                    placar.jogador++
                }
                break;
            case 2:
                if (computador == 2) {
                    placar.empate++
    
    
                } else if (computador == 3) {
                    placar.computador++
    
                } else {
    
                    placar.jogador++
                }
    
                break;
    
            case 3:
                if (computador == 3) {
                    placar.empate++
    
                } else if (computador == 1) {
                    placar.computador++
    
                } else {
    
                    placar.jogador++
                }
    
                break;
                
        }
        ganhador();
    
    }
}
    function ganhador(){
        if (placar.computador > placar.jogador) {
            alert("O computador ganhou 😝");
        } else if (placar.jogador > placar.computador) {
            alert(" O jogador ganhou 🥰");
        } else if  (placar.jogador=placar.computador) {
            alert("Empate 😛");
        } else{
            alert("Tente novamente");
        }

    }
jokenpo();