// Получаем модальное окно по id.
const orderDialog = document.getElementById('order-dialog');

// Получаем все кнопки заказа в карточках товаров.
const orderButtons = document.querySelectorAll('.product-card__button');

// Получаем кнопку закрытия модального окна.
const closeDialogButton = document.getElementById('close-order-dialog');

// Получаем скрытое поле, в которое будет записан выбранный товар.
const selectedProductInput = document.getElementById('selected-product');

// Перебираем все кнопки «Заказать».
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Получаем название товара из data-атрибута.
    const productName = button.dataset.product;

    // Записываем название товара в скрытое поле формы.
    selectedProductInput.value = productName;

    // Открываем модальное окно.
    orderDialog.showModal();
  });
});

// Закрываем модальное окно по кнопке «Закрыть».
closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

// Получаем форму заявки.
const orderForm = document.getElementById('order-form');

// Получаем сообщение об успешной отправке.
const successMessage = document.getElementById('success-message');

// Обрабатываем отправку формы.
orderForm.addEventListener('submit', (event) => {
  // Отменяем стандартную отправку формы,
  // потому что backend пока не подключён.
  event.preventDefault();

  // Сбрасываем предыдущие признаки ошибок.
  const formElements = Array.from(orderForm.elements);

  formElements.forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid');
    }
  });

  // Проверяем встроенные HTML-ограничения формы.
  if (!orderForm.checkValidity()) {
    formElements.forEach((element) => {
      if (element.willValidate && !element.checkValidity()) {
        element.setAttribute('aria-invalid', 'true');
      }
    });

    // Показываем стандартные сообщения браузера.
    orderForm.reportValidity();
    return;
  }

  // Показываем сообщение об успешной отправке.
  successMessage.hidden = false;

  // Очищаем форму.
  orderForm.reset();

  // Закрываем модальное окно.
  orderDialog.close();
});


// Находим нашу кнопку по ID
const backToTopBtn = document.getElementById("backToTopBtn");

// Отслеживаем прокрутку страницы
window.onscroll = function() {
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        // Иначе скрываем
        backToTopBtn.style.display = "none";
    }
};

// Добавляем обработчик клика
backToTopBtn.addEventListener("click", function() {
    // Плавно скроллим к самому верху
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






document.addEventListener('DOMContentLoaded', () => {
  const reviewsModal = document.getElementById('reviewsModal');
  const closeReviewsModal = document.getElementById('closeReviewsModal');
  const reviewsModalTitle = document.getElementById('reviewsModalTitle');
  const openReviewsBtns = document.querySelectorAll('.open-reviews-btn');

  // Открытие окна
  if (openReviewsBtns.length > 0) {
    openReviewsBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        reviewsModalTitle.textContent = 'Отзывы: ' + productName;
        reviewsModal.classList.add('modal--active');
      });
    });
  }

  // Закрытие по крестику
  if (closeReviewsModal) {
    closeReviewsModal.addEventListener('click', () => {
      reviewsModal.classList.remove('modal--active');
    });
  }

  // Закрытие по клику на затемненный фон
  if (reviewsModal) {
    reviewsModal.addEventListener('click', (e) => {
      if (e.target === reviewsModal) {
        reviewsModal.classList.remove('modal--active');
      }
    });
  }
});


// --- ОЧИСТКА ФОРМЫ ЗАКАЗА ---
const clearOrderFormBtn = document.getElementById('clear-order-form');
const orderFormElement = document.getElementById('order-form');

if (clearOrderFormBtn && orderFormElement) {
  clearOrderFormBtn.addEventListener('click', () => {
    orderFormElement.reset(); // Встроенная функция очистки формы
  });
}
