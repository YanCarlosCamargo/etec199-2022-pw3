// Calcula as médias
const calcularMedia = () => {
  const tr = document.querySelectorAll("tr")

  for (let i = 1; i < tr.length; i++) {
    var nota1 = parseInt(tr[i].children[1].textContent)
    var nota2 = parseInt(tr[i].children[2].textContent)
    var nota3 = parseInt(tr[i].children[3].textContent)

    var media = (nota1 + nota2 + nota3) / 3
    tr[i].children[4].innerText = media.toFixed(1)
    console.log(tr)
    if (media < 5) {
      tr[i].children[4].classList.add("table-danger")
    } else {
      tr[i].children[4].classList.add("table-success")
    }
  }
}

const validacao = () => {
  const form = document.querySelector('form')
  if (form.name.value == '' || form.nota1.value == '' || form.nota2.value == '' || form.nota3.value == '') {
    alert('Insira todos os campos.')
    return false
  } else if (form.nota1.value > 10 && form.nota2.value > 10 && form.nota3.value > 10) {
    alert('Notas não podem ser maior que 10!')
    return false
  }
  else {
    return true
  }
}
//
// Cria os elementos e calcula a média de um novo aluno
const inserirAluno = async (event) => {
  event.preventDefault();
  if (validacao()) {
  const form = document.querySelector("form");
  const table = document.querySelector(".tbody")
  table.innerHTML = "</>";
  insertAlunoBD(form.name.value, form.nota1.value, form.nota2.value, form.nota3.value)
  .then(()=>{
    form.reset();listAlunoBD()
    .then((resultado) => autoInsertBD(resultado));
  });}
}



const botao = document.querySelector("#botao")
botao.addEventListener("click", inserirAluno)

// Não permite que "-", "+" e "e" não sejam digitados no campo de numeros
const input = document.querySelectorAll(".n")
var invalidNumberChars = ["-", "+", "e"]
for (let i = 0; i < 3; i++) {
  input[i].addEventListener("keydown", function (e) {
    if (invalidNumberChars.includes(e.key)) {
      e.preventDefault()
    }
  })
}

// Primeiro chamado para calcular media assim que a pagina carrega
calcularMedia()


const toggleModal = (id) => {
  var container = document.getElementById('containerMain').style
  var div = document.getElementById(id).style;
  if (div.display === 'none') {
    container.animation = 'changeOpacity2 1s';
    container.filter = 'opacity(0.3)';
    div.display = 'block';

  } else {
    div.display = 'none';
    container.animation = 'changeOpacity 1s';
    container.filter = 'opacity(1)';
  }
}

toggleModal('modalForm');

async function insertAlunoBD(name, nota1, nota2, nota3) {
  const data = new FormData();
  console.log(name, nota1, nota2, nota3)

  data.append('name', name);
  data.append('nota1', nota1);
  data.append('nota2', nota2);
  data.append('nota3', nota3);

  await fetch('./insert.php', {
    method: 'POST',
    body: data,
    "Content-Type": "multipart/form-data"
  })
}

async function listAlunoBD() {

  const dados = await fetch('./select.php');
  const json = await dados.json();
  return json;
}

listAlunoBD();



async function deleteAluno(id) {
  const data = new FormData();
  data.append('id', id);

  return await fetch('./delete.php', {
    method: 'POST',
    body: data,
    "Content-Type": "multipart/form-data"
  })
}

countAprovados = () => {
  table = document.getElementById("interior-table");
  aprovado = table.querySelectorAll("#aprovado");
  console.log("Quantidade de aprovados: "+aprovado.length);
  reprovado = table.querySelectorAll("#reprovado");
  console.log("Quantidade de reprovados: "+reprovado.length);

  var data = [
    {x: "Aprovados", value: aprovado.length},
    {x: "Reprovados", value: reprovado.length},
  ];
  
  chart = anychart.pie(data);
  chart.innerRadius("30%");
  chart.container("container");
  chart.background().fill("#252326");
  for (let c=1; let<1;c++) {if (c=1) chart.draw(); else chart.autoRedraw();}
}

function autoInsertBD(list) {
  const table = document.querySelector(".tbody")
  table.innerHTML = "</>";
  for (let i = 0; i < list.length; i++) {
    const json = list[i];

    const { id } = list[i];
    const { _nome } = list[i];
    const { _nota1 } = list[i];
    const { _nota2 } = list[i];
    const { _nota3 } = list[i];
    const { _media } = list[i];


    create(id, _nome, _nota1, _nota2, _nota3, _media);
    console.log(json);
  }



  function create(id, n, n1, n2, n3, m) {
    const form = document.querySelector("form")

    const table = document.querySelector(".tbody")

    const tr = document.createElement("tr")

    const btn = document.createElement("button");
    btn.setAttribute("value", id);
    btn.setAttribute("class", "deleteButton");
    btn.setAttribute("type", "button");
    btn.setAttribute("onclick", `editModal(${id}, "${n}")`);
    btn.setAttribute("data-bs-toggle", "modal");
    btn.setAttribute("data-bs-target", "#exampleModal");
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg>`;
    btn.setAttribute("style", "border: none");



    const nomeAluno = document.createElement("td")
    nomeAluno.innerText = n;
    tr.appendChild(nomeAluno)

    const nota1 = document.createElement("td")
    nota1.innerText = n1;
    tr.appendChild(nota1)

    const nota2 = document.createElement("td")
    nota2.innerText = n2;
    tr.appendChild(nota2)

    const nota3 = document.createElement("td")
    nota3.innerText = n3;
    tr.appendChild(nota3)

    const media = document.createElement("td")
    media.innerText = m.toFixed(0);
    tr.appendChild(media);

    const situacao = document.createElement("td");
    situacao.setAttribute("class", `${m>=7?"bg-success":"bg-danger"}`)
    situacao.setAttribute("id", `${m>=7?"aprovado":"reprovado"}`)
    situacao.innerText = `${m>=7?"Aprovado":"Reprovado"}`;
    tr.appendChild(situacao);

    tr.appendChild(btn);

    table.appendChild(tr)

  }

  console.log("Alunos Inseridos");
  countAprovados();
}

listAlunoBD().then((resultado) => autoInsertBD(resultado));

var alunoSelecionado = null;

const editModal = (id, n) => {
  alunoSelecionado = id;
  document.getElementById('sureDelete').innerText = "Deseja realmente Excluir o aluno (a) " + n;
  console.log(n);
}

document.getElementById('btnExcluirAluno').addEventListener('click', () => {
  deleteAluno(alunoSelecionado).then(() => {
    console.log("Deletou")
    listAlunoBD().then((resultado) => autoInsertBD(resultado));
  });
});

