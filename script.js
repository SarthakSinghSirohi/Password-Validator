// selectors
const passText = document.getElementById("pass");
const formDiv = document.querySelector(".form");

// validator function

passText.onkeyup = function () {
  // condition selectors
  let cond1 = passText.value.length;
  let cond2 = passText.value.match(/[A-Z]/);
  let cond3 = passText.value.match(/[a-z]/);
  let cond4 = passText.value.match(/[0-9]/);
  let cond5 = passText.value.match(/[ `!@#$%^&*()_+\-=\[\]{}; ':"\\|,.<>\/?~]/);

  if (cond1 >= 8) {
    document.getElementsByTagName("span")[0].textContent = "✅";
  } else {
    document.getElementsByTagName("span")[0].textContent = "❌";
  }
  if (cond2) {
    document.getElementsByTagName("span")[1].textContent = "✅";
    console.log("cond2");
  } else {
    document.getElementsByTagName("span")[1].textContent = "❌";
  }
  if (cond3) {
    document.getElementsByTagName("span")[2].textContent = "✅";
  } else {
    document.getElementsByTagName("span")[2].textContent = "❌";
  }
  if (cond4) {
    document.getElementsByTagName("span")[3].textContent = "✅";
  } else {
    document.getElementsByTagName("span")[3].textContent = "❌";
  }
  if (cond5) {
    document.getElementsByTagName("span")[4].textContent = "✅";
  } else {
    document.getElementsByTagName("span")[4].textContent = "❌";
  }

  // text styling
  if (cond1 >= 8 && cond2 && cond3 && cond4 && cond5) {
    formDiv.style.borderColor = "green";
    passText.style.color = "green";
  } else {
    formDiv.style.borderColor = "red";
    passText.style.color = "red";
  }
};
