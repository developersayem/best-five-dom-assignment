// BUTTON DISABLED FUCTION
function disableButton(e) {
  e.style.backgroundColor = "white";
  e.style.color = "black";
  e.innerHTML = "SELECTED";
  e.setAttribute("disabled", true);
}

// ADDING  LIST OR LIMITATION FUNCTION
function SelectedItems(olSelector, nameSelector) {
  const selectedItems = document.getElementById("olSelector");
  const li = document.createElement("li");
  const text = document.createTextNode(nameSelector);
  li.appendChild(text);
  if (olSelector.childNodes.length <= 5) {
    olSelector.appendChild(li);
  } else {
    alert("You Already Selected Five Items");
  }
}
