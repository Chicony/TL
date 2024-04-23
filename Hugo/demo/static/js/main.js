document.querySelectorAll('.dropdown').forEach( (el) => {
  el.addEventListener('click', () => {
    el.querySelector(".dropdown__content").classList.toggle("show");
    el.classList.toggle('active');
    let btnBurger = el.querySelector(".button__burger");

    if (btnBurger !== null) {
      btnBurger.classList.toggle("active");
    }
  })
})

window.addEventListener('message', function(event) {
  let body = document.getElementById('mainBodyId');

  let arrData = event.data.split(" ");

  switch (arrData[0]) {
    case "background":
      body.style.backgroundColor = arrData[1];
      break;
    case "text":
      body.style.color = arrData[1];
      break;
  }

  console.log(arrData);
});