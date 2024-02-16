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

<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="shortcut icon" href="css/img/Golath.png" type="image/png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Контакты - Golath</title>
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
    
    <div class="contacts-main">
      <img src="css/img/image.jpg" alt="Описание изображения" class="full-width-image">
        <section class="main-content"><br><br><br><br><br><br><br><br>
            <div class="main-content-contacts">
                <h2>Контакты</h2>
                <p>Контактный номер: +7-777-777-77-77</p>
                <p>Адрес для самовывоза: Улы дала С1</p>
                <p>Email: Golath@astana.kz</p>
                <p>Введите свои данные для оформления заказа:</p>
                <div style="max-width: 500px; margin-left: auto; margin-right: auto; padding: 15px;">
                    <form id="form" action="#" novalidate>
                        <div class="text-field">
                          <label class="text-field__label" for="firstname">Имя (Обязательно)</label>
                          <input class="text-field__input" type="text" name="firstname" id="firstname" required>
                          <div class="text-field__message"></div>
                        </div>
                        <div class="text-field">
                          <label class="text-field__label" for="lastname">Фамилия (Обязательно)</label>
                          <input class="text-field__input" type="text" name="lastname" id="lastname" required>
                          <div class="text-field__message"></div>
                        </div>
                        <div class="text-field">
                          <label class="text-field__label" for="email">Почта (Обязательно)</label>
                          <input class="text-field__input" type="email" name="email" id="email" required>
                          <div class="text-field__message"></div>
                        </div>
                        <div class="text-field">
                          <label class="text-field__label" for="city">Город</label>
                          <input class="text-field__input" type="text" name="city" id="city">
                          <div class="text-field__message"></div>
                        </div>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
    <footer>
        <p>&copy;Golath. Viva la vida</p>
    </footer>
    <script>

        const form = document.querySelector('#form');
    
        const checkValidity = (input) => {
          input.classList.remove('text-field__input_invalid');
          input.nextElementSibling.textContent = '';
          if (!input.checkValidity()) {
            input.classList.add('text-field__input_invalid');
            input.nextElementSibling.textContent = input.validationMessage;
          }
        }
    
        const checkValidityAll = () => {
          const inputs = form.querySelectorAll('input');
          inputs.forEach((input) => {
            checkValidity(input);
          });
        }
    
        const onCheckValidity = (e) => {
          const target = e.target;
          if (!target.classList.contains('text-field__input')) {
            return;
          }
          checkValidity(target);
        }
    
        form.addEventListener('change', onCheckValidity);
        form.addEventListener('keydown', onCheckValidity);
        form.addEventListener('keyup', onCheckValidity);
        checkValidityAll();
    
    
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          checkValidityAll();
        });

        const onSuccessSubmit = () => {
        alert('Ваш заказ оформлен!');
        // Здесь вы можете добавить дополнительные действия после успешной отправки формы, например, перенаправление на другую страницу.
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkValidityAll();

        if (form.checkValidity()) {
            onSuccessSubmit();
        }
    });
    
      </script>
</body>
</html>


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
                <li><a href="C:\Users\WWW\OneDrive\Рабочий стол\lexus\about.html">О нас</a></li>
                <li><a href="contacts.html">Контакты</a></li>
            </ul>
        </nav>
    </header>
    <div class="container-main">
        <img src="css/img/image (1).jpg" alt="Описание изображения" class="full-width-image">
        <section class="main-content"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div class="main-content-background"><br>
                <h2>О магазине</h2>
                <p>Golath — это японский магазин электро гитар, принадлежащий компании, специализирующейся на производстве высококачественных музыкальных инструментов с премиальными характеристиками и инновационными технологиями.</p>
                <p>Магазин Golath стремится предоставить своим клиентам уникальный опыт игры на электро гитаре, сочетая в себе элегантный дизайн, выдающееся звучание и передовые технологии.</p>
                <p>Миссия компании Golath - создать для музыкантов особый мир, где они могут наслаждаться музыкальным творчеством с удовольствием от использования качественных и инновационных электро гитар.</p>
                <a href="index.html" class="btn">На главную</a>
                <br>
                <br>
            </div>
        </section>
    </div>
    <footer>
        <p>&copy;Golath. Viva la vida</p>
    </footer>
</body>
</html>





