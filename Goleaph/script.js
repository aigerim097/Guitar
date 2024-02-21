document.addEventListener("DOMContentLoaded", function() {
    var modelMenuItem = document.querySelector('.models');
    var modelMenu = document.querySelector('.model-menu');

    modelMenuItem.addEventListener('mouseenter', function () {
        modelMenu.style.display = 'block';
    });

    modelMenuItem.addEventListener('mouseleave', function () {
        modelMenu.style.display = 'none';
    });
    
    const selectedColor = document.getElementById("selected-color");
    const colorButtons = document.querySelectorAll(".color-button");
    const carImage = document.getElementById("car-image");

    const configurationSelect = document.getElementById("configuration-select");
    const awd = document.getElementById("awd");
    const luxury = document.getElementById("luxury");
    const ultra = document.getElementById("ultra");

    // Обработчики событий для кнопок выбора цвета
    colorButtons.forEach(button => {
        button.addEventListener("click", function() {
            const color = button.getAttribute("data-color");
            selectedColor.textContent = color;


            if (color === "Eminent White Pearl") {
                carImage.src = "../css/img/rockdale/1.1.jpeg";
            } else if (color === "Iridium") {
                carImage.src = "../css/img/rockdale/1.2.jpeg";
            } else if (color === "Obsidian") {
                carImage.src = "../css/img/rockdale/1.3.jpeg";
            } else if (color === "White") {
                carImage.src = "../css/img/jet/3 (1).jpeg";
            } else if (color === "Silver") {
                carImage.src = "../css/img/jet/3 (2).jpeg";
            } else if (color === "Caviar") {
                carImage.src = "../css/img/jet/3 (3).jpeg";
            } else if (color === "Eminent White") {
                carImage.src = "../css/img/es/2 (1).jpeg";
            } else if (color === "Matador Red Mica") {
                carImage.src = "../css/img/es/2 (2).jpeg";
            } else if (color === "Atomic Silver") {
                carImage.src = "../css/img/es/2 (3).jpeg";
            }
        });
    });

    configurationSelect.addEventListener("change", function() {
        awd.style.display = "none";
        luxury.style.display = "none";
        ultra.style.display = "none";

        const selectedConfiguration = configurationSelect.value;

        if (selectedConfiguration === "AWD") {
            awd.style.display = "block";
        } else if (selectedConfiguration === "LUXURY AWD") {
            luxury.style.display = "block";
        } else if (selectedConfiguration === "ULTRA LUXURY AWD") {
            ultra.style.display = "block";
        }
    });
});
