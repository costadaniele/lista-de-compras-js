const form = document.querySelector('form');
const input = document.getElementById('input-item');
const ul = document.querySelector('ul');
const remover = document.getElementsByClassName('remover');
const del = document.getElementsByClassName('icon-delete-small');
const main = document.querySelector('main');
let checkbox = document.getElementsByClassName('ckeckbox');

function getInputValue(e) {
  e.preventDefault();
  itemList = input.value
  addItem(itemList)
}

form.addEventListener('submit', getInputValue);

function addItem(itemList) {
  try {
    const itemLi = document.createElement('li');
    itemLi.classList.add("item-list");

    const checkboxItem = document.createElement('input');
    checkboxItem.setAttribute('type', 'checkbox');
    checkboxItem.classList.add("checkbox")

    const paragraphItem = document.createElement('p');
    paragraphItem.classList.add("paragraph-item");

    paragraphItem.append(itemList);

    const imgDelete = document.createElement('img');
    imgDelete.classList.add("img-delete");
    imgDelete.setAttribute('src', './img/icon-delete.svg');

    itemLi.append(checkboxItem, paragraphItem, imgDelete)
    ul.append(itemLi);

    formClear();

  } catch (error) {
    console.log(error)
  }

}

ul.addEventListener('click', function (e) {
  if (e.target.classList.contains("img-delete")) {
    const item = e.target.closest(".item-list")
    console.log(item)
    item.remove()
  }
  if (e.target.classList.contains("img-delete") === true) {
    messageRemoveItemList()
  }
})

function messageRemoveItemList() {
  //criando alerta de remoção do item
  const containerMessage = document.createElement("div");
  containerMessage.classList.add("alert-message")

  // icone
  const warningIcon = document.createElement("img")
  warningIcon.setAttribute("src", 'img/warning-icon.svg')

  // criando parágrafo  
  const alertMessage = document.createElement("p")
  const p = alertMessage.textContent = "O item foi removido da lista"

  // icone excluir
  const iconDeleteSmall = document.createElement("img")
  iconDeleteSmall.setAttribute("src", "img/icon-delete-small.svg")
  iconDeleteSmall.classList.add("icon-delete-small")

  containerMessage.append(warningIcon, p, iconDeleteSmall)
  main.append(containerMessage)
}

main.addEventListener("click", function (e) {
  if (e.target.classList.contains("icon-delete-small")) {
    const message = e.target.closest(".alert-message")
    console.log(message)
    message.remove()
  }
})

function formClear() {
  input.value = ''

  input.focus()
}