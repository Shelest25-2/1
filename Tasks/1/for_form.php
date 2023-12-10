<?php
$message = 
"Имя: " . $_POST['name'].
"Фамилия". $_POST['surname'].
"Отчество". $_POST['F_name']. 
"Телефон". $_POST['tel']. 
"Email: " . $_POST['mail'] .
"Дата". $_POST['date']. 
"Пол". $_POST['group1'].
"Любимый ЯП". $_POST['favorite'].
"Сообщение:" . $_POST['biograph'];


if (mail("saneescomic@mail.ru", "ФОРМА", $message)) {
    echo "Сообщение отправлено!";
} else {
    echo "Ошибка при отправке сообщения.";
}


?>
