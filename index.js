  let dialog = document.querySelector('dialog')
  // выводим диалоговое окно
  document.querySelector('#open').onclick = function () {
    dialog.showModal()
  }

  document.querySelector('#close').onclick = function () {
    dialog.close() 
  }