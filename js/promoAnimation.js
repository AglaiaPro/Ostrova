var x = window.matchMedia("(min-width: 768px)")

if (x.matches) { 
    const block1 = document.querySelector('.block12'); // Контейнер
const circle = document.querySelector('#circle'); // Баннер

let targetX = 0, targetY = 0; // Цільові координати
let currentX = 0, currentY = 0; // Поточні координати

// Функція для обчислення позиції з обмеженнями
const calculatePosition = (container, element, cursorX, cursorY) => {
    const containerRect = container.getBoundingClientRect();
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    // Обмежуємо рух банера в межах контейнера
    const maxX = containerRect.width - elementWidth / 2;
    const maxY = containerRect.height - elementHeight / 2;

    const minX = elementWidth / 2;
    const minY = elementHeight / 2;

    // Позиція курсора відносно контейнера
    const relativeX = cursorX - containerRect.left;
    const relativeY = cursorY - containerRect.top;

    // Обмежуємо позицію
    const x = Math.max(minX, Math.min(maxX, relativeX));
    const y = Math.max(minY, Math.min(maxY, relativeY));

    return { x, y };
};

// Оновлюємо поточну позицію для плавного руху
const updatePosition = () => {
    // Інтерполяція для плавного наближення до цільової позиції
    currentX += (targetX - currentX) * 0.1; // 0.1 - швидкість інтерполяції (можна змінити)
    currentY += (targetY - currentY) * 0.1;

    // Застосовуємо нові координати до банера
    circle.style.left = `${currentX}px`;
    circle.style.top = `${currentY}px`;

    // Для ефекту нахилу (skew)
    const skewX = ((currentX - block1.offsetWidth / 2) / block1.offsetWidth) * 20; // Нахил по X
    const skewY = ((currentY - block1.offsetHeight / 2) / block1.offsetHeight) * 10; // Нахил по Y

    circle.style.transform = `translate(-50%, -50%) skewX(${skewX}deg) skewY(${skewY}deg)`;

    // Запускаємо наступний кадр анімації
    requestAnimationFrame(updatePosition);
};

// Відстежуємо рух миші
window.addEventListener('mousemove', (event) => {
    const { x, y } = calculatePosition(block1, circle, event.clientX, event.clientY);
    targetX = x; // Оновлюємо цільову X-координату
    targetY = y; // Оновлюємо цільову Y-координату
});

// Запускаємо анімацію
updatePosition();
  } else {

  }