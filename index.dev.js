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
    var seletor = prompt("Painel de Controle:\n  1- Acelerar a nave;\n  2- Desacelerar a nave;\n  3- Trocar de nave;\n  4- Sair.");

    if (seletor >= 5 || seletor <= 0) {
      alert("Digite somente um n\xFAmero entre 1 e 4");
    } else if (seletor == 1) {
      var acelerador = prompt("Digite quanto deseja acelerar\n    1- 5km/s;\n    2- 10km/s;\n    3- 20km/s;\n    4- 50km/s;\n    5- Sair.\n    Velocidade Maxima de: ".concat(VelocidadeMaxima, "km/s\n    Velocidade Atual: ").concat(velocidadeNave));

      if (acelerador >= 5 || acelerador <= 0) {
        Verificador1 = "S";
        alert("N\xFAmero inv\xE1lido");
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

        alert("Acelerando em:");
      }
    }
  }
}