function clickBtn() {
  let pallete = document.getElementById("idContainerBackgroundColor");
  let boxColor = pallete.querySelector('.pallete__item.active');

  if (boxColor) {
    window.frames['idIframeContent'].postMessage(`background ${boxColor.dataset.color}`, '*');
  } else { 
    return;
  }
}

function clickPallete(el) {
  let pallete = document.getElementById("idContainerBackgroundColor");

  pallete.querySelectorAll('.pallete__item.active').forEach((el) => {
    el.classList.remove('active');
  })

  el.classList.add('active');
}