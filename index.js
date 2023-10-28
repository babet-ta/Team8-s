document.querySelectorAll('textarea').forEach(el => {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', e => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
        console.log(el.scrollHeight)
    });
});

let dialog = document.querySelector('dialog')
  // выводим диалоговое окно
  document.querySelector('#open').onclick = function () {
    dialog.showModal()
  }

  document.querySelector('#close').onclick = function () {
    dialog.close() 
  }

