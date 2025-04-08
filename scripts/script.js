"use strict";
document.addEventListener('DOMContentLoaded', function () {
   //бургер-меню

// Получаем элементы DOM:
const burgerBtn = document.getElementById('burgerBtn'); // Кнопка открытия бургер-меню
const dropdownMenu = document.getElementById('dropdownMenu'); // Выпадающее меню
const closeBtn = document.getElementById('closeBtn'); // Кнопка закрытия меню
const overlay = document.getElementById('overlay'); // Затемненный фон (оверлей)

// Открытие бургер-меню
burgerBtn.addEventListener('click', function() {
    this.classList.add('active'); // Добавляем класс active к кнопке бургера
    dropdownMenu.classList.add('active'); // Показываем меню
    overlay.classList.add('active'); // Показываем оверлей
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
});

// Функция закрытия бургер-меню
function closeMenu() {
    burgerBtn.classList.remove('active'); // Убираем класс active с кнопки бургера
    dropdownMenu.classList.remove('active'); // Скрываем меню
    overlay.classList.remove('active'); // Скрываем оверлей
    document.body.style.overflow = ''; // Восстанавливаем скролл страницы
}

// Вешаем обработчики закрытия:
closeBtn.addEventListener('click', closeMenu); // При клике на кнопку закрытия
overlay.addEventListener('click', closeMenu); // При клике на оверлей

//Карусель
// Получаем элементы для системы шагов:
const steps = Array.from(document.querySelectorAll('.steps_container .step')); // Все шаги в массив
const stepCardsContainer = document.querySelector('.step_cards'); // Контейнер для карточек шагов
const backButton = document.querySelector('.back_button'); // Кнопка "Назад"
const nextButton = document.querySelector('.next_button'); // Кнопка "Вперед"

let currentStepIndex = 0; // Текущий индекс шага (начинаем с 0)

// Функция отображения текущего шага
function showCurrentStep() {
    const currentStep = steps[currentStepIndex]; // Получаем текущий шаг
    const circleNumber = currentStep.querySelector('.cirlce').textContent; // Номер шага
    const text = currentStep.querySelector('.text').textContent; // Текст шага

    // Вставляем HTML для текущего шага
    stepCardsContainer.innerHTML = `
        <div class="step_card_content">
            <div class="cirlce">${circleNumber}</div>
            <p class="text">${text}</p>
        </div>
    `;

    // Обновляем состояние кнопок
    backButton.disabled = currentStepIndex === 0; // Отключаем "Назад" на первом шаге
    nextButton.disabled = currentStepIndex === steps.length - 1; // Отключаем "Вперед" на последнем шаге
}

// Обработчики для кнопок
backButton.addEventListener('click', function () {
    if (currentStepIndex > 0) { // Если не первый шаг
        currentStepIndex--; // Уменьшаем индекс
        showCurrentStep(); // Показываем предыдущий шаг
    }
});

nextButton.addEventListener('click', function () {
    if (currentStepIndex < steps.length - 1) { // Если не последний шаг
        currentStepIndex++; // Увеличиваем индекс
        showCurrentStep(); // Показываем следующий шаг
    }
});

// Инициализация - показываем первый шаг при загрузке
showCurrentStep();
});