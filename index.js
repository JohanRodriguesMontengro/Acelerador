var Continuar = `S`;

while (Continuar == `S`) {
  var nomePiloto = prompt("Qual é o seu nome Piloto??");
  var velocidadeNave = 0;
  var VerificadorNave = `S`
  while(VerificadorNave == `S`){
    var naveEspacial = prompt(`Qual nave o senhor gostaria de pilotar
    1- Elemental(Velocidade maxima de: 200km/s);
    2- X-Wing(velocidade maxima de: 325km/s);
    3- A-Wing(velocidade maxima de: 150km/s);
    4- Estelar Classe Executor(velocidade maxima de: 500km/s).
  `);
  if(naveEspacial >= 5 || naveEspacial <= 0 || isNaN(naveEspacial)){
    alert(`Digite um número válido`)
  } else {
    VerificadorNave = `N`
  }
  }
  var VerificadorPainel = `S`
  var VelocidadeMaxima = 0

    if(naveEspacial == 1) {
      VelocidadeMaxima = 200
    } else if (naveEspacial == 2) {
      VelocidadeMaxima = 325
    } else if (naveEspacial == 3) {
      VelocidadeMaxima = 150
    } else if (naveEspacial == 4) {
      VelocidadeMaxima = 500
    }
      while (VerificadorPainel == `S`) {
        var seletor = prompt(`Painel de Controle:
  1- Acelerar a nave;
  2- Desacelerar a nave;
  3- Trocar de nave;
  4- Sair.`);

  if (seletor >= 5 || seletor <= 0) {
    alert(`Digite somente um número entre 1 e 4`);
  } 
  else if (seletor == 1) {
    var acelerador = prompt(`Digite quanto deseja acelerar
    1- 5km/s;
    2- 10km/s;
    3- 20km/s;
    4- 50km/s;
    5- Sair.
    Velocidade Maxima de: ${VelocidadeMaxima}km/s
    Velocidade Atual: ${velocidadeNave}`)
    if(acelerador >= 5 || acelerador <= 0) {
      Verificador1 = `S`
      alert(`Número inválido`)
    } else {
      var km = 0
      if(acelerador == 1) {
        km = 5
      } else if (acelerador == 2) {
        km = 10
      } else if (acelerador == 3) {
        km = 20
      } else if (acelerador == 4) {
        km = 50
      }
      alert(`Acelerando em:`)
    }
  }
      }
    
}