var Continuar = `S`;

while (Continuar == `S`) {
  var nomePiloto = prompt("Qual é o seu nome Piloto??");
  var velocidadeNave = 0;
  var VerificadorNave = `S`;
  while (VerificadorNave == `S`) {
    var naveEspacial = prompt(`Qual nave o senhor gostaria de pilotar
    1- Elemental(Velocidade maxima de: 200km/s);
    2- X-Wing(velocidade maxima de: 325km/s);
    3- A-Wing(velocidade maxima de: 150km/s);
    4- Estelar Classe Executor(velocidade maxima de: 500km/s).
  `);
    if (naveEspacial >= 5 || naveEspacial <= 0 || isNaN(naveEspacial)) {
      alert(`Digite um número válido`);
    } else {
      VerificadorNave = `N`;
    }
  }
  var VerificadorPainel = `S`;
  var VelocidadeMaxima = 0;

  if (naveEspacial == 1) {
    VelocidadeMaxima = 200;
  } else if (naveEspacial == 2) {
    VelocidadeMaxima = 325;
  } else if (naveEspacial == 3) {
    VelocidadeMaxima = 150;
  } else if (naveEspacial == 4) {
    VelocidadeMaxima = 500;
  }
  while (VerificadorPainel == `S`) {
    var nomeNaveEspacial = ``;
    if (naveEspacial == 1) {
      nomeNaveEspacial = `Elemental`;
    } else if (naveEspacial == 2) {
      nomeNaveEspacial = `X-Wing`;
    } else if (naveEspacial == 3) {
      nomeNaveEspacial = `A-Wing`;
    } else if (naveEspacial == 4) {
      nomeNaveEspacial = `Estelar Classe Executor`;
    }
    var seletor = prompt(`Painel de Controle:
  1- Acelerar a nave;
  2- Desacelerar a nave;
  3- Trocar de nave;
  4- Sair.
  Piloto: ${nomePiloto}
  Velocidade atual da nave: ${velocidadeNave}km/s
  Modelo da nave: ${nomeNaveEspacial}
  `);

    if (seletor >= 5 || seletor <= 0) {
      alert(`Digite somente um número entre 1 e 4`);
    }
    while (seletor == 1) {
      var acelerador = prompt(`Digite quanto deseja acelerar
    1- 5km/s;
    2- 10km/s;
    3- 20km/s;
    4- 50km/s;
    5- Voltar.
    Velocidade Maxima de: ${VelocidadeMaxima}km/s
    Velocidade Atual de: ${velocidadeNave}km/s
    `);
      if (acelerador >= 6 || acelerador <= 0) {
        Verificador1 = `S`;
        alert(`Número inválido`);
      } else if (acelerador == 5) {
        alert(`Voltando...`);
        seletor = `Easter Egg:)`;
      } else if (velocidadeNave >= VelocidadeMaxima) {
        velocidadeNave = VelocidadeMaxima;
        alert(`Você atingiu a velocidade máxima da nave`);
      } else {
        var km = 0;
        if (acelerador == 1) {
          km = 5;
        } else if (acelerador == 2) {
          km = 10;
        } else if (acelerador == 3) {
          km = 20;
        } else if (acelerador == 4) {
          km = 50;
        }
        velocidadeNave += km; // velocidadeNave += km === velocidadeNave = velocidadeNave + km
        alert(`Acelerando em: ${km}km/s`);
        if (velocidadeNave >= VelocidadeMaxima) {
          velocidadeNave = VelocidadeMaxima;
          alert(`Você atingiu a velocidade máxima da nave`);
        }
      }
    }
    while (seletor == 2) {
      var VelocidadeMinima = 0;
      var desacelerador = prompt(`Digite quanto deseja desacelerar
    1- 5km/s;
    2- 10km/s;
    3- 20km/s;
    4- 50km/s;
    5- Voltar.
    Velocidade Minima de: ${VelocidadeMinima}km/s
    Velocidade Atual de: ${velocidadeNave}km/s
    `);
      if (desacelerador >= 6 || desacelerador <= 0) {
        Verificador1 = `S`;
        alert(`Número inválido`);
      } else if (desacelerador == 5) {
        alert(`Voltando...`);
        seletor = `Easter Egg:)`;
      } else if (velocidadeNave <= VelocidadeMinima) {
        velocidadeNave = VelocidadeMinima;
        alert(`Você atingiu a velocidade mínima da nave`);
      } else {
        var km = 0;
        if (desacelerador == 1) {
          km = 5;
        } else if (desacelerador == 2) {
          km = 10;
        } else if (desacelerador == 3) {
          km = 20;
        } else if (desacelerador == 4) {
          km = 50;
        }
        velocidadeNave -= km; // velocidadeNave -= km === velocidadeNave = velocidadeNave - km
        alert(`Desacelerando em: ${km}km/s`);
        if (velocidadeNave <= VelocidadeMinima) {
          velocidadeNave = VelocidadeMinima;
          alert(`Você atingiu a velocidade Minima da nave`);
        }
      }
    }
    if (seletor == 3) {
      var confirmar = confirm(`Deseja confirmar a troca de nave?
      Sua velocidade passara a ser 0`);
      if (confirmar == true) {
        var naveEspacial = prompt(`Escolha sua nova nave:
      1- Elemental(Velocidade maxima de: 200km/s);
      2- X-Wing(velocidade maxima de: 325km/s);
      3- A-Wing(velocidade maxima de: 150km/s);
      4- Estelar Classe Executor(velocidade maxima de: 500km/s).`);
        velocidadeNave = 0;
      } else {
        alert(`Voltando...`);
      }
    }
    if (seletor == 4) {
      alert(
        `O nome do piloto é: ${nomePiloto}. O modelo da nave é: ${nomeNaveEspacial}. E a velocidade da nave é de: ${velocidadeNave}`
      );
      VerificadorPainel = `N`;
      Continuar = confirm(`Deseja Reiniciar a operação?`);
      if (Continuar == true) {
        Continuar = `S`;
      } else {
        alert(`Agradecemos o feedback`);
      }
    }
  }
}
