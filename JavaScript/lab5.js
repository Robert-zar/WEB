function PromptTable() {
  let result = prompt("Введите текст пункта ", '');
  let c = document.getElementById("table_prompt");
  c.innerText = ''

  while (result !== null) {
      let newPoint = document.createElement('td');
      newPoint.textContent = result
      c.appendChild(newPoint)

      result = prompt("Введите текст пункта ", '');
  }
}

function deletePromptElement() {
  let isDeleted = confirm('Удалить элемент?')
  if (isDeleted) {
      let c = document.getElementById("table_prompt");
      let thatText = c.lastChild.textContent;
      alert(thatText);
      c.removeChild(c.lastChild);

  }
}