let displayItemData = [
  {
    todoItem: "I have to do coding practice daily",
    todoDate: "11/11/2024",
  },
  {
    todoItem: "I have to also prepare for External Activities",
    todoDate: "12/11/2024",
  },
  { todoItem: "I love Working on a Project", todoDate: "20/11/2024" },
];
displayItems();

function todoItem() {
  console.log("hello world");
  let inputElement = document.querySelector("#todoInput");
  let dueDate = document.querySelector("#dueDate");

  let todoItem = inputElement.value;
  let todoDate = dueDate.value;

  displayItemData.push({ todoItem, todoDate });
  console.log(displayItemData);
  inputElement.value = "";
  dueDate.value = "";

  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector(".element_container");
  // displayElement.innerText = "";

  let newHtml = "";
  for (let i = 0; i < displayItemData.length; i++) {
    let { todoItem, todoDate } = displayItemData[i];
    newHtml += `
    <span>${todoItem}</span>
    <span>${todoDate}</span>
    <button id = "btn-delete" onclick = "displayItemData.splice(${i},1); displayItems() " >Delete</button>
    `;
    // displayElement.innerText =
    //   displayElement.innerText + "\n" + displayItemData[i];
  }
  displayElement.innerHTML = newHtml;
}
