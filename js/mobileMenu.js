const checkbox = document.getElementById('burger-checkbox');
const burgerMenu = document.querySelector('.burger-list');
const burgerLabel = document.querySelector('.burger');
const burgerItems = document.querySelectorAll('.burger-item');

document.addEventListener('DOMContentLoaded', function() {
    checkbox.addEventListener('change', function(event) {
        if (checkbox.checked) {
            document.addEventListener('click', handleDocumentClick);
            document.body.classList.add('noscroll'); 
        } else {
            document.removeEventListener('click', handleDocumentClick);
            document.body.classList.remove('noscroll'); 
        }
    });

    function handleDocumentClick(event) {
        if (!burgerMenu.contains(event.target) && !burgerLabel.contains(event.target)) {
            checkbox.checked = false;
            document.removeEventListener('click', handleDocumentClick);
            document.body.classList.remove('noscroll'); 
        }
    }

    burgerItems.forEach(item => {
        item.addEventListener('click', function() {
            checkbox.checked = false;
            document.body.classList.remove('noscroll');
        });
    });

    document.querySelectorAll('.target').forEach((category) => {
        category.addEventListener('click', function () {
        document.removeEventListener('click', handleDocumentClick);
        document.body.classList.remove('noscroll'); 
        checkbox.checked = false;
        })
    })
})