"use strict";

var Continuar = "S";

while (Continuar == "S") {
  var nomePiloto = prompt("Qual é o seu nome Piloto??");
  var velocidadeNave = 0;
  var VerificadorNave = "S";

  while (VerificadorNave == "S") {
    var naveEspacial = prompt("Qual nave o senhor gostaria de pilotar\n    1- Elemental(Velocidade maxima de: 200km/s);\n    2- X-Wing(velocidade maxima de: 325km/s);\n    3- A-Wing(velocidade maxima de: 150km/s);\n    4- Estelar Classe Executor(velocidade maxima de: 500km/s).\n  ");

    if (naveEspacial >= 5 || naveEspacial <= 0 || isNaN(naveEspacial)) {
      alert("Digite um n\xFAmero v\xE1lido");
    } else {
      VerificadorNave = "N";
    }
  }

  var VerificadorPainel = "S";
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

  while (VerificadorPainel == "S") {
    var seletor = prompt("Painel de Controle:\n  1- Acelerar a nave;\n  2- Desacelerar a nave;\n  3- Trocar de nave;\n  4- Sair.\n  Piloto: ".concat(nomePiloto, "\n  Velocidade atual da nave: ").concat(velocidadeNave, "km/s\n  Modelo da nave: ").concat(naveEspacial, "\n  "));

    if (seletor >= 5 || seletor <= 0) {
      alert("Digite somente um n\xFAmero entre 1 e 4");
    }

    while (seletor == 1) {
      var acelerador = prompt("Digite quanto deseja acelerar\n    1- 5km/s;\n    2- 10km/s;\n    3- 20km/s;\n    4- 50km/s;\n    5- Voltar.\n    Velocidade Maxima de: ".concat(VelocidadeMaxima, "km/s\n    Velocidade Atual de: ").concat(velocidadeNave, "km/s\n    "));

      if (acelerador >= 6 || acelerador <= 0) {
        Verificador1 = "S";
        alert("N\xFAmero inv\xE1lido");
      } else if (acelerador == 5) {
        alert("Voltando...");
        seletor = "Easter Egg:)";
      } else if (velocidadeNave >= VelocidadeMaxima) {
        velocidadeNave = VelocidadeMaxima;
        alert("Voc\xEA atingiu a velocidade m\xE1xima da nave");
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

        alert("Acelerando em: ".concat(km, "km/s"));

        if (velocidadeNave >= VelocidadeMaxima) {
          velocidadeNave = VelocidadeMaxima;
          alert("Voc\xEA atingiu a velocidade m\xE1xima da nave");
        }
      }
    }

    while (seletor == 2) {
      var VelocidadeMinima = 0;
      var desacelerador = prompt("Digite quanto deseja desacelerar\n    1- 5km/s;\n    2- 10km/s;\n    3- 20km/s;\n    4- 50km/s;\n    5- Voltar.\n    Velocidade Minima de: ".concat(VelocidadeMinima, "km/s\n    Velocidade Atual de: ").concat(velocidadeNave, "km/s\n    "));

      if (desacelerador >= 6 || desacelerador <= 0) {
        Verificador1 = "S";
        alert("N\xFAmero inv\xE1lido");
      } else if (desacelerador == 5) {
        alert("Voltando...");
        seletor = "Easter Egg:)";
      } else if (velocidadeNave <= VelocidadeMinima) {
        velocidadeNave = VelocidadeMinima;
        alert("Voc\xEA atingiu a velocidade m\xEDnima da nave");
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

        alert("Desacelerando em: ".concat(km, "km/s"));

        if (velocidadeNave <= VelocidadeMinima) {
          velocidadeNave = VelocidadeMinima;
          alert("Voc\xEA atingiu a velocidade Minima da nave");
        }
      }
    }

    if (seletor == 3) {
      var confirmar = confirm("Deseja confirmar a troca de nave?\n      Sua velocidade passara a ser 0");

      if (confirmar == true) {
        var naveEspacial = prompt("Escolha sua nova nave:\n        1- Elemental(Velocidade maxima de: 200km/s);\n    2- X-Wing(velocidade maxima de: 325km/s);\n    3- A-Wing(velocidade maxima de: 150km/s);\n    4- Estelar Classe Executor(velocidade maxima de: 500km/s).");
        velocidadeNave = 0;
      } else {
        alert("Voltando...");
      }
    }

    if (seletor == 4) {
      alert("O nome do piloto \xE9: ".concat(nomePiloto, ". O modelo da nave \xE9: ").concat(naveEspacial, ". E a velocidade da nave \xE9 de: ").concat(velocidadeNave));
      VerificadorPainel = "N";
      Continuar = confirm("Deseja Reiniciar a opera\xE7\xE3o?");

      if (Continuar == true) {
        Continuar = "S";
      } else {
        alert("Agradecemos o feedback");
      }
    }
  }
}