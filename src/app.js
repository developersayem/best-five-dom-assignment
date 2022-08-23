// ===========NAYMER=============
const naymerBtn = document.getElementById("naymerBtn");
const naymerName = document.getElementById("naymerName").innerHTML;
naymerBtn.addEventListener("click", function (e) {
  SelectedItems(selectedItems, naymerName);
  disableButton(naymerBtn);
});
// ===========MESSI=============
const messiBtn = document.getElementById("messiBtn");
const messiName = document.getElementById("messiName").innerHTML;
messiBtn.addEventListener("click", function (e) {
  disableButton(messiBtn);
  SelectedItems(selectedItems, messiName);
});
// ===========CR7=============
const cr7Btn = document.getElementById("cr7Btn");
const cr7Name = document.getElementById("cr7Name").innerHTML;
cr7Btn.addEventListener("click", function (e) {
  disableButton(cr7Btn);
  SelectedItems(selectedItems, cr7Name);
});
// ===========Robert L.=============
const robertBtn = document.getElementById("robertBtn");
const robertName = document.getElementById("robertName").innerHTML;
robertBtn.addEventListener("click", function (e) {
  disableButton(robertBtn);
  SelectedItems(selectedItems, robertName);
});
// ===========Kylian Mbappé=============
const mbappeBtn = document.getElementById("mbappeBtn");
const mbappeName = document.getElementById("mbappeName").innerHTML;
mbappeBtn.addEventListener("click", function (e) {
  disableButton(mbappeBtn);
  SelectedItems(selectedItems, mbappeName);
});
// ===========Mohamed Salah=============
const mohamedBtn = document.getElementById("mohamedBtn");
const mohamedName = document.getElementById("mohamedName").innerHTML;
mohamedBtn.addEventListener("click", function (e) {
  disableButton(mohamedBtn);
  SelectedItems(selectedItems, mohamedName);
});
// ===========Luka Modrić=============
const lukaBtn = document.getElementById("lukaBtn");
const lukaName = document.getElementById("lukaName").innerHTML;
lukaBtn.addEventListener("click", function (e) {
  disableButton(lukaBtn);
  SelectedItems(selectedItems, lukaName);
});
// ===========Zlatan Ibrahimović=============
const zlatanBtn = document.getElementById("zlatanBtn");
const zlatanName = document.getElementById("zlatanName").innerHTML;
zlatanBtn.addEventListener("click", function (e) {
  disableButton(zlatanBtn);
  SelectedItems(selectedItems, zlatanName);
});
// ===========Alisson Becker=============
const alissonBtn = document.getElementById("alissonBtn");
const alissonName = document.getElementById("alissonName").innerHTML;
alissonBtn.addEventListener("click", function (e) {
  disableButton(alissonBtn);
  SelectedItems(selectedItems, alissonName);
});
