function toggleDropdown() {
    const dropdown = document.getElementById("dropdownContent");
    const arrow = document.getElementById("arrow");

    // Переключаем видимость списка и поворот стрелки
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
    arrow.classList.toggle("rotated");
}
const menuIcons = {
    "салаты": "img/saladIcon.png",
    "супы": "img/soupIcon.png",
    "горячее": "img/hotIcon.png",
    "десерты": "img/dessertIcon.png",
    "завтраки": "img/breakfastIcon.png",
    "напитки": "img/drinksIcon.png"
};

const categoryMapping = {
    "салаты": "salad",
    "супы": "soup",
    "горячее": "hot",
    "десерты": "dessert",
    "завтраки": "breakfast",
    "напитки": "drinks"
};

// Массив с элементами меню
const menuItems = ["салаты", "супы", "горячее", "десерты", "завтраки", "напитки"];
let currentItem = "салаты"; // Текущий выбранный элемент по умолчанию

// Функция для создания выпадающего списка на основе текущего выбранного элемента
function updateDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.innerHTML = ""; // Очищаем список

    // Заполняем выпадающий список, исключая текущий выбранный элемент
    menuItems.forEach(item => {
        if (item !== currentItem) {
            const menuItem = document.createElement("a");
            menuItem.classList.add("menu-item");
            menuItem.textContent = item;
            menuItem.onclick = function () {
                selectMenuItem(item);
                return false;
            };
            dropdownContent.appendChild(menuItem);
        }
    });
}

// Функция для обработки выбора пункта меню
function selectMenuItem(item) {
    // Обновляем заголовок с новым выбранным элементом
    currentItem = item; // Обновляем текущий выбранный элемент
    document.getElementById("menuTitle").innerHTML = `<b>${item}</b>`;
    
    // Обновляем изображение на новое из объекта menuIcons
    const icon = document.getElementById("foodIconMobile");
    icon.src = menuIcons[item];

    document.getElementById("salad").style.display = "none";
    document.getElementById("soup").style.display = "none";
    document.getElementById("hot").style.display = "none";
    document.getElementById("dessert").style.display = "none";
    document.getElementById("breakfast").style.display = "none";
    document.getElementById("drinks").style.display = "none";
    let Id = categoryMapping[item];
    document.getElementById(Id).style.display = "flex";

    // Закрываем выпадающий список и возвращаем стрелку в исходное положение
    document.getElementById("dropdownContent").style.display = "none";
    document.getElementById("arrow").classList.remove("rotated");

    // Обновляем выпадающий список с учетом нового выбранного элемента
    updateDropdown();
}

// Инициализация списка при загрузке страницы
updateDropdown();

