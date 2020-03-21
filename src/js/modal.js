$(document).ready(function($){
	//open popup ru
	$('.btn-callback').on('click', function(event){
		event.preventDefault();
		$('.form-container').removeClass('hidden').html('<div class="form-block">\n' +
			'        <h3>Заполните форму,</h3>\n' +
			'        <p> чтобы получить консультацию нашего специалиста в течение 15 минут:</p>\n' +
			'        <form method="post" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Перезвоните мне"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Перезвоните мне</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	$(".btn-getCatalog").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="form-block">\n' +
			'        <h3>Заполните форму,</h3>\n' +
			'        <p>чтобы получить каталог ворот, и мы перезвоним Вам в течение 15 минут:</p>\n' +
			'        <form method="post" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Получить каталог ворот"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'            <input name="email" type="email" placeholder="Ваш e-mail" required="">\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Получить каталог ворот</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	 });

	$(".btn-getDetails").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="form-block">\n' +
			'        <h3>Заполните форму,</h3>\n' +
			'        <p>чтобы получить консультацию нашего специалиста в течение 15 минут:</p>\n' +
			'        <form method="post" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Получить консультацию специалиста"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Получить консультацию</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	$(".btn-getCost").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="form-block">\n' +
			'        <h3>Заполните форму,</h3>\n' +
			'        <p>чтобы узнать стоимость, и наш менеджер свяжется с Вами в течение 15 минут:</p>\n' +
			'        <form method="post" id="getConsult" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Узнать стоимость"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Узнать стоимость</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	$(".btn-questions").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="form-block">\n' +
			'        <h3>Пожалуйста, заполните форму,</h3>\n' +
			'        <p>чтобы задать вопросы и получить ответ специалиста в течение 15 минут:</p>\n' +
			'        <form method="post" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Задать вопрос"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'			 <textarea  rows="4" cols="50" placeholder="Вопрос..."></textarea>\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Задать вопрос</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	//open popup ua
	$('.btn-callback-ua').on('click', function(event){
		event.preventDefault();
		$('.form-container').removeClass('hidden').html('<div class="form-block">\n' +
			'        <h3>Заповніть форму,</h3>\n' +
			'        <p> щоб отримати консультацію нашого спеціаліста впродовж 15 хвилин:</p>\n' +
			'        <form method="post" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Передзвоніть мені"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше ім&#39;я" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Передзвоніть мені</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	$(".btn-getCatalog-ua").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="form-block">\n' +
			'        <h3>Заповніть форму,</h3>\n' +
			'        <p>щоб отримати каталог воріт, і ми зателефонуємо Вам впродовж 15 хвилин:</p>\n' +
			'        <form method="post" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Отримати каталог воріт"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше ім&#39;я" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'            <input name="email" type="email" placeholder="Ваш e-mail" required="">\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Отримати каталог воріт</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	$(".btn-getDetails-ua").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="form-block">\n' +
			'        <h3>Заповніть форму,</h3>\n' +
			'        <p>щоб отримати консультацію нашого спеціаліста впродовж 15 хвилин:</p>\n' +
			'        <form method="post" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Отримати консультацію спеціаліста"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше ім&#39;я" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Отримати консультацію</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	$(".btn-getCost-ua").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="form-block">\n' +
			'        <h3>Будь ласка, заповніть форму,</h3>\n' +
			'        <p>щоб дізнатися вартість, і ми зателефонуємо Вам впродовж 15 хвилин</p>\n' +
			'        <form method="post" id="getConsult" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Дізнатися вартість"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше ім&#39;я" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Дізнатися вартість</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	$(".btn-questions-ua").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="form-block">\n' +
			'        <h3>Будь ласка, заповніть форму,</h3>\n' +
			'        <p> щоб поставити питання та отримати відповідь спеціаліста впродовж 15 хвилин:</p>\n' +
			'        <form method="post" action="mail.php">\n' +
			'            <input type="hidden" name="whatform" value="Форма - Задать вопрос"/>\n' +
			'            <input name="name" type="text" placeholder="Ваше ім&#39;я" size="25" required="">\n' +
			'            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n' +
			'			 <textarea  rows="4" cols="50" placeholder="Ваше питання"></textarea>\n' +
			'            <button class="button cta_b" type="submit"><span class="text">Поставити питання</span></button>\n' +
			'        </form>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	//politics

	$(".btn-politics").click(function() {
		$(".form-container").removeClass("hidden").html('<div class="politics">\n' +
			'        <div class="politics__text"> Ваша конфіденційність дуже важлива для нас. Ми хочемо, щоб Ваша робота в\n' +
			'            Інтернет по можливості була максимально приємною і корисною, і Ви абсолютно спокійно використовували\n' +
			'            найширший спектр інформації, інструментів і можливостей, які пропонує Інтернет.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">Особиста інформація Членів, зібрана при реєстрації (або в будь-який інший\n' +
			'            час) переважно використовується для підготовки Продуктів або Послуг відповідно до Ваших потреб. Ваша\n' +
			'            інформація не буде передана або продана третім сторонам. Однак ми можемо частково розкривати особисту\n' +
			'            інформацію в особливих випадках, описаних в «Згоду з розсилкою»\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text"><span>Які дані збираються на сайті </span> <br> При добровільної реєстрації\n' +
			'            на отримання розсилки «Інсайдер інтернет підприємця» ви відправляєте своє Ім\'я та E-mail через форму\n' +
			'            реєстрації.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text"><span>З якою метою збираються ці дані </span> <br> Ім\'я використовується для\n' +
			'            звернення особисто до вас, а ваш e-mail для відправки вам листів розсилок, новин тренінгу, корисних\n' +
			'            матеріалів, комерційних пропозицій. Ваші ім\'я та e-mail не передаються третім особам, ні за яких умов крім\n' +
			'            випадків, пов\'язаних з виконанням вимог законодавства. Ваше ім & # 39; я і e-mail на захищених серверах\n' +
			'            сервісу getresponse.com і використовуються відповідно до його політикою конфіденційності.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">Ви можете відмовитися від отримання листів розсилки і видалити з бази даних\n' +
			'            свої контактні дані в будь-який момент, клікнувши на посилання для відписки, присутню в кожному листі.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text"><span>Як ці дані використовуються </span> <br> На сайті використовуються куки\n' +
			'            (Cookies) і дані про відвідувачів сервісу Google Analytics.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">За допомогою цих даних збирається інформація про дії відвідувачів на сайті з\n' +
			'            метою поліпшення його змісту, поліпшення функціональних можливостей сайту і, як наслідок, створення якісного\n' +
			'            контенту і сервісів для відвідувачів.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">Ви можете в будь-який момент змінити налаштування свого браузера так, щоб\n' +
			'            браузер блокував всі файли cookie або оповіщає про відправку цих файлів. Врахуйте при цьому, що деякі\n' +
			'            функції і сервіси не зможуть працювати належним чином.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text"><span>Як ці дані захищаються </span><br> Для захисту Вашої особистої інформації\n' +
			'            ми використовуємо різноманітні адміністративні, управлінські та технічні заходи безпеки. Наша Компанія\n' +
			'            дотримується різних міжнародних стандартів контролю, спрямованих на операції з особистою інформацією, які\n' +
			'            включають певні заходи контролю щодо захисту інформації, зібраної в Інтернет.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">Наших співробітників навчають розуміти і виконувати ці заходи контролю, вони\n' +
			'            ознайомлені з нашим Повідомленням про конфіденційність, норм та інструкцій.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">Проте, не дивлячись на те, що ми прагнемо убезпечити Вашу особисту\n' +
			'            інформацію, Ви теж повинні вживати заходів, щоб захистити її.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">Ми настійно рекомендуємо Вам вживати всіх можливих заходів обережності під\n' +
			'            час перебування в Інтернеті. Організовані нами послуги і веб-сайти передбачають заходи щодо захисту від\n' +
			'            витоку, несанкціонованого використання і зміни інформації, яку ми контролюємо. Незважаючи на те, що ми\n' +
			'            робимо все можливе, щоб забезпечити цілісність і безпеку своєї мережі і систем, ми не можемо гарантувати, що\n' +
			'            наші заходи безпеки допоможуть запобігти незаконний доступ до цієї інформації хакерів сторонніх організацій.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">У разі зміни цієї політики конфіденційності ви зможете прочитати про ці зміни\n' +
			'            на цій сторінці або, в особливих випадках, отримати повідомлення на свій e-mail.\n' +
			'        </div>\n' +
			'\n' +
			'        <div class="politics__text">Для зв\'язку з адміністратором сайту з будь-яких питань ви можете написати\n' +
			'            лист на e-mail: <a class="" href="mailto:profmontage-vorota@ukr.net">profmontage-vorota@ukr.net</a>\n' +
			'        </div>\n' +
			'        <button type="button" class="btn-close">×</button>\n' +
			'    </div>');
		$('body').toggleClass('lock');
	});

	//close popup
	$('.form-container').on('click', function(event){
		if( $(event.target).is('.btn-close') || $(event.target).is('.form-container') ) {
			event.preventDefault();
			$(this).addClass('hidden');
			$('body').removeClass('lock');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
			$('.form-container').addClass('hidden');
			$('body').removeClass('lock');
	    }
    });
});