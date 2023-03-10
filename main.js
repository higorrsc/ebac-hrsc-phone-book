let nomes = [];
let telefones = [];
let linhasHTML = "";

const frmAgendaContatos = document.getElementById("frmAgendaContatos");
frmAgendaContatos.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionarTelefone();
  atualizarTabela();
});

function adicionarTelefone() {
  const txtNome = document.getElementById("txtNome");
  const txtTelefone = document.getElementById("txtTelefone");

  if (nomes.includes(txtNome.value)) {
    alert(`O nome ${txtNome.value} já existe na lista de contatos!`);
  } else {
    nomes.push(txtNome.value);
    telefones.push(txtTelefone.value);

    let linhaHTML = "<tr>";
    linhaHTML += `<td>${txtNome.value}</td>`;
    linhaHTML += `<td>${txtTelefone.value}</td>`;
    linhaHTML += `</tr>`;

    linhasHTML += linhaHTML;
  }

  txtNome.value = "";
  txtTelefone.value = "";
}

function atualizarTabela() {
  const tblContatos = document.querySelector("tbody");
  tblContatos.innerHTML = linhasHTML;
}
