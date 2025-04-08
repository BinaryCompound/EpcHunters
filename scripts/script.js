"use strict";
document.addEventListener('DOMContentLoaded', function () {
    //бургер
    const burgerBtn = document.getElementById('burgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    burgerBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function () {
        burgerBtn.classList.remove('active');
        dropdownMenu.classList.remove('active');
    });

    // Закрытие меню при клике на пункт меню
    const menuItems = dropdownMenu.querySelectorAll('li, .nav_link');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            burgerBtn.classList.remove('active');
            dropdownMenu.classList.remove('active');
        });
    });
    // Собираем все шаги из steps_container
    const steps = Array.from(document.querySelectorAll('.steps_container .step'));
    const stepCardsContainer = document.querySelector('.step_cards');
    const backButton = document.querySelector('.back_button');
    const nextButton = document.querySelector('.next_button');

    let currentStepIndex = 0;

    // Функция для отображения текущего шага
    function showCurrentStep() {
        const currentStep = steps[currentStepIndex];
        const circleNumber = currentStep.querySelector('.cirlce').textContent;
        const text = currentStep.querySelector('.text').textContent;

        stepCardsContainer.innerHTML = `
            <div class="step_card_content">
                <div class="cirlce">${circleNumber}</div>
                <p class="text">${text}</p>
            </div>
        `;

        // Обновляем состояние кнопок
        backButton.disabled = currentStepIndex === 0;
        nextButton.disabled = currentStepIndex === steps.length - 1;
    }

    // Обработчики для кнопок
    backButton.addEventListener('click', function () {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            showCurrentStep();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentStepIndex < steps.length - 1) {
            currentStepIndex++;
            showCurrentStep();
        }
    });

    // Инициализация - показываем первый шаг
    showCurrentStep();
});