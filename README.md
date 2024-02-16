<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="shortcut icon" href="css/img/Golath.png" type="image/png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Golath</title>
    <script src="script.js"></script>
</head>
<body>
    <header>
        <a href="index.html">
            <img src="css/img/Golath.png" width="80" height="80" alt="Golath" class="small-logo">
        </a>
        <nav>
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li class="models"><a href="#">Модели</a>
                    <ul class="model-menu">
                        <li><a href="models/JET-JS-300.html">JET JS-300</a></li>
                        <li><a href="models/JET-JS-400.html">JET JS-400</a></li>
                        <li><a href="models/rockdale.html">Rocdale</a></li>
                    </ul>
                </li>
                <li><a href="about.html">О нас</a></li>
                <li><a href="contacts.html">Контакты</a></li>
            </ul>
        </nav>
    </header>
    <div class="container-main">
        <img src="css/img/image.jpg" alt="Описание изображения" class="full-width-image">
        <section class="main-content">
            <div class="main-content-index"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    
                <h2>Добро пожаловать в мир лучших электро гитар!</h2>
                <p>Вместе с Golath</p>
                <a href="about.html" class="btn">Узнать больше</a>
            </div>
        </section>
    </div>
    <footer>
        <p>&copy;Golath. Viva la vida</p>
    </footer>
</body>
</html>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

/* Стили для заголовка и навигации в шапке */

.model_name {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}



.model_name b{
    font-size: 50px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

.container-main{
    border: none;
    color: aliceblue;
}

.small-logo {
    width: 80px;
    height: auto;
    align-content: center;
}

.color_model {
    width: 500px;
    height: auto;
}

header h1 {
    margin: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-size-adjust: 155px;
}

nav li {
    display: inline;
    margin-right: 20px;
}

nav a {
    text-decoration: none;
    color: #fff;
}

nav li a {
    font-weight: bold; 
}

.main-content {
    text-align: center;
    padding: 10px;
    z-index: 1; 
    padding: 20px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.main-content-background {
    margin-top: 300px;
    background-color: rgba(255, 255, 255, 0.223);
    border-radius: 5px;
}

.main-content-contacts {
    margin-top: 550px;
    background-color: rgba(255, 255, 255, 0.742);
    border-radius: 5px;
}

.main-content-index {
    margin-top: 100px;
}

.main-content h2 {
    font-size: 36px;
}

.main-content p {
    font-size: 18px;
    margin-top: 10px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    margin-top: 20px;
    border-radius: 5px;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin-top: 0 !important;
    margin-bottom: -4px;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

a {
    font-family: 'Montserrat', sans-serif;
}

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}

/* Стили для подменю моделей */
.model-menu {
    display: none;
    position: absolute;
    background-color: #ffffffde;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
    list-style: none;
    padding: 0;
    left: 0;
    width: 100%;
    margin: 0;
}

.models:hover .model-menu {
    display: block;
}

.model-menu li {
    padding: 10px;
    text-align: center; 
    border-bottom: 1px solid #ccc; 
}

.model-menu li:last-child {
    border-bottom: none;
}

.model-menu a {
    text-decoration: none;
    color: #333;
    display: block;
}

.model-menu li a {
    font-weight: normal;
}

.full-width-image {
    width: 100%;
    height: auto;
    position: relative; 
    z-index: -1; 
    object-fit: cover;
    background-size: cover;
}

.color-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}
  
.color-button img {
    width: 30px; 
    height: auto;
}

.characteristics {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 15px;
    font-style: italic;
}

.configuration-info p {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 15px;
    font-style: italic;
}

.configuration-info b {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 20px;
}
/* Стилизация селекта */
#configuration-select {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    appearance: none; 
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 16px; 
    border-radius: 0; 
    outline: none; 
    background-color: #fff; /* Цвет фона */
    cursor: pointer; 
    max-width: 200px; 
    margin: 0 auto; 
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
}

#configuration-select:hover {
    border-color: #333; /* Цвет граничной линии при наведении */
}

/* Стили при фокусе */
#configuration-select:focus {
    border-color: #333; /* Цвет граничной линии при фокусе */
}

/* Стили для опций внутри селекта */
#configuration-select option {
    background-color: #fff; /* Цвет фона опций */
    color: #333; /* Цвет текста опций */
    font-size: 16px; /* Размер шрифта опций */
    padding: 10px; /* Отступ вокруг текста внутри опций */
}

/* Стили при наведении на опцию */
#configuration-select option:hover {
    background-color: #333; /* Цвет фона опции при наведении */
    color: #fff; /* Цвет текста опции при наведении */
}

.custom-btn {
    margin: auto;
    display: block;
    align-items: center;
    width: 130px;
    height: 40px;
    color: #ffffff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
     box-shadow:inset 2px 2px 2px 0px rgba(49, 49, 49, 0.5),
     7px 7px 20px 0px rgba(49,49,49,.1),
     4px 4px 5px 0px rgba(49,49,49,.1);
    outline: none;
    border-radius: 0
}

.btn-3 {
    margin: auto;
    display: block;
    align-items: center;
    background: #333;
    background: linear-gradient(0deg, rgb(49, 49, 49)0%, rgb(49, 49, 49) 100%);
    width: 130px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;
    border-radius: 0
}
.btn-3 span {
     
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}
.btn-3:before,
    .btn-3:after {
     
    position: absolute;
    content: "";
    right: 0;
    top: 0;
        background: #333;
    transition: all 0.3s ease;
}
.btn-3:before {
     
    height: 0%;
    width: 2px;
}
.btn-3:after {
     
    width: 0%;
    height: 2px;
}
.btn-3:hover{
     
    background: transparent;
    box-shadow: none;
}
.btn-3:hover:before {
     
    height: 100%;
}
.btn-3:hover:after {
     
    width: 100%;
}
.btn-3 span:hover{
     
        color: #333;
}
.btn-3 span:before,
.btn-3 span:after {
     
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: #333;
    transition: all 0.3s ease;
}
.btn-3 span:before {
     
    width: 2px;
    height: 0%;
}
.btn-3 span:after {
     
    width: 0%;
    height: 2px;
}
.btn-3 span:hover:before {
     
    height: 100%;
}
.btn-3 span:hover:after {
     
    width: 100%;
}

*,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* text field */
    .text-field {
      margin-bottom: 1rem;
    }

    .text-field__label {
      display: block;
      margin-bottom: 0.25rem;
    }

    .text-field__input {
      display: block;
      width: 350px;
      margin: 0 auto;
      height: 40px;
      padding: 0.375rem 0.75rem;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #bdbdbd;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .text-field__input::placeholder {
      color: #212529;
      opacity: 0.4;
    }

    .text-field__input:focus {
      color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }

    .text-field__input:disabled,
    .text-field__input[readonly] {
      background-color: #f5f5f5;
      opacity: 1;
    }

    /* is invalid */
    .text-field__input_invalid,
    .text-field__input_valid {
      border-color: #dc3545;
      padding-right: 2.25rem;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 0.5625rem center;
      background-size: 1.125rem 1.125rem;
    }

    .text-field__input_valid {
      border-color: #198754;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    }

    .text-field__input_invalid:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
    }

    .text-field__input_valid:focus {
      border-color: #198754;
      box-shadow: 0 0 0 0.25rem rgb(25 135 84 / 25%);
    }

    .text-field__message {
      display: none;
      width: 100%;
      margin-top: .25rem;
      font-size: .875rem;
      color: #dc3545;
    }

    .text-field__input_valid~.text-field__message {
      color: #198754;
    }

    .text-field__input_invalid~.text-field__message,
    .text-field__input_valid~.text-field__message {
      display: block;
    }

    button {
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      color: #fff;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      background-color: #333;
      border: 1px solid #333;
      padding: .375rem .75rem;
      font-size: 1rem;
      border-radius: .25rem;
      transition: background-color .15s ease-in-out;
    }

    button:hover {
      color: #fff;
      background-color: #333;
      border-color: #333;
    }

    .custom-btn {
        /* Добавьте другие стили для кнопки по вашему усмотрению */
    }

    .custom-btn a {
        color: white;
        text-decoration: none;
    }

    .custom-btn a:hover {
        color: black; /* Цвет текста при наведении */
    }





