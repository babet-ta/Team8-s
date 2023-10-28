
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
let quoteContainer = document.getElementById('quoteContainer');
let quotes = quoteContainer.getElementsByClassName('quote');
let quoteIndex = 0;
const interval = 3000; // Задержка в 3 секунды

function rotateQuotes() {
  // Скрываем текущую цитату
  quotes[quoteIndex].style.display = 'none';
  
  // Увеличиваем индекс цитаты или сбрасываем на 0, если достигнут конец
  quoteIndex = (quoteIndex + 1) % quotes.length;
  
  // Показываем следующую цитату
  quotes[quoteIndex].style.display = 'block';
  
  // Устанавливаем задержку перед следующим пролистыванием
  setTimeout(rotateQuotes, interval);
}

// Запускаем пролистывание цитат
rotateQuotes();
