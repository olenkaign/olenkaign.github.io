/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Неее, не покажу')
})
const reset = document.querySelector('reset');

reset.addEventListener('click', function() {
	alert('Нет задач невыполнимых')
})