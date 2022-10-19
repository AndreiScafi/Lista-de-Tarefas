// CÓDIGO ELABORADO SEGUINDO TUTORIAL DO CANAL DO YOUTUBE PROGRAMAÇÃO WEB - MINISTRADO PELO PROFESSOR: DIMITRI TEIXEI

//CRIAR VARIÁVEIS PARA AGILIZAR
let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')

//ADICIONAR TAREFA
function addTarefa(){
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        //ADICIONAR CONTADOR PARA CIRAR UM ÍNDICE
        ++contador

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`;

    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR O CAMPO DO INPUT
    input.value = "";
    input.focus();

    }
}

//DELETAR TAREFA
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

//MARCAR TAREFA
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe == "item") {
        item.classList.add("clicado");

        //TROCAR O ICONE DESMARCADO PELO ICONE MARCADO
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        //COLOCAR O ITEM CLICADO NO FINAL DA LISTA DE TAREFAS
        item.parentNode.appendChild(item);
    } else {

        //DESMARCAR O ITEM
        item.classList.remove("clicado");

        //RESTAURAR O ICONE DESMARCADO
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");

    }
}

// ACIONAR O BOTAO 'btn-add' PELA TECLA 'ENTER'.
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});

