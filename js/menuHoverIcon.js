document.querySelectorAll('.category').forEach((category) => {
    category.addEventListener('click', function () {
        if (category.classList.contains('active')) {
            return; // Если элемент уже активен, ничего не делаем
        }
        document.getElementById("salad").style.display = "none";
        document.getElementById("soup").style.display = "none";
        document.getElementById("hot").style.display = "none";
        document.getElementById("dessert").style.display = "none";
        document.getElementById("breakfast").style.display = "none";
        document.getElementById("drinks").style.display = "none";
        let Id = category.className.replace("category ", "")
        document.querySelector('.active').classList.remove('active');
        category.classList.add('active');
        document.getElementById(Id).style.display = "flex";
    });
});