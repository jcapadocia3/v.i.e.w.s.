const luckyBtnHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/mural/2");
};

document
  .querySelector(".luckybutton")
  .addEventListener("click", luckyBtnHandler);
