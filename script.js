let btnAll = document.querySelectorAll("button");
let inputF = document.querySelector("input");

let currNum = '';

Array.from(btnAll).forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    try {
      if (evt.target.innerText === "=") {
        currNum = eval(currNum);
        inputF.value = currNum;
      } else if (evt.target.innerText === "c") {
        currNum = '';
        inputF.value = currNum;
      } else if (evt.target.innerText === "[x]") {
        currNum = currNum.slice(0, -1);
        inputF.value = currNum;
      }  else {
        currNum += evt.target.innerText;
        inputF.value = currNum;
      }
    } catch (error) {
      inputF.value = "Error";
      currNum = ''; 
      console.error(error);
    }
  });
});
