const luckyBtnHandler = async (event) => {
  event.preventDefault();
  console.log("it clicked");
  document.location.replace("/mural/1");
};

document
  .querySelector(".luckybutton")
  .addEventListener("click", luckyBtnHandler);
