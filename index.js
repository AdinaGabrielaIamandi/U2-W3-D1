let button = document.getElementById("bottone");

const Utente = function (nome, cognome, dataNascita) {
  this.nome = nome;
  this.cognome = cognome;
  this.dataNascita = dataNascita;
};
button.onclick = function () {
  let persona = new Utente(
    document.getElementById("nome").value,
    document.getElementById("cognome").value,
    document.getElementById("data-nascita").value
  );
  let tabella = document.getElementById("tabella");
  let riga = document.createElement("tr");
  let colonna1 = document.createElement("td");
  let colonna2 = document.createElement("td");
  let colonna3 = document.createElement("td");
  colonna1.innerHTML = persona.nome;
  colonna2.innerHTML = persona.cognome;
  colonna3.innerHTML = persona.dataNascita;
  riga.appendChild(colonna1);
  riga.appendChild(colonna2);
  riga.appendChild(colonna3);
  tabella.appendChild(riga);
};
