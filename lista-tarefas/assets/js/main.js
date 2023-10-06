let inputTarefa = document.querySelector('.input-tarefa');
let btnTarefa = document.querySelector('.btn-tarefa');
let tarefas = document.querySelector('.tarefas');

function criarLI() {
  let li = document.createElement('li');
  return li;
}

function criarTexto(textoInput) {
  let li = criarLI();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  inputTarefa.value = ''; 
  criarBotaoApagar(li); 
  salvarTarefas();
}
function criarBotaoApagar(li){
  li.innerText += ' ';
  let btnApagar = document.createElement('button');
  btnApagar.setAttribute('class', 'apagar');
  li.appendChild(btnApagar);
 
  btnApagar.innerText = 'Apagar'
;}
inputTarefa.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') { 
    if (!inputTarefa.value) return;
    criarTexto(inputTarefa.value);
  }
});
function LimpaInput(){
  inputTarefa.value = '';
  inputTarefa.focus();
}
btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criarTexto(inputTarefa.value);
  LimpaInput();
  salvarTarefas();
});
document.addEventListener('click', function(e){
let el = e.target;
if(el.classList.contains('apagar')){
  el.parentElement.remove();
  salvarTarefas();

}
});

function salvarTarefas(){
  let liTarefas = tarefas.querySelectorAll('li');
  let listasTaredas =[];
  for(let tarefa of liTarefas){
let tarefaTexto = tarefa.innerText;
tarefaTexto = tarefaTexto.replace('Apagar' , '')
listasTaredas.push(tarefaTexto);
  }
  let tarefasJSON = JSON.stringify(listasTaredas);
  localStorage.setItem('tarefasJSON', tarefasJSON);
}
function addTarefasSalvas(){
let tarefas = localStorage.getItem('tarefas');
let ListaDeTarefas = JSON.parse('tarefas');
for (let tarefa of ListaDeTarefas){
criarTexto(tarefa);
}
}
addTarefasSalvas();