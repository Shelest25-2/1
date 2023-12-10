<?php
$to = "saneescomic@mail.ru";
$subject = "Новое сообщение с сайта";


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





if (mail($to, $subject, $message)) {
    echo "Сообщение отправлено!";
} else {


    echo "Ошибка при отправке сообщения.";
}


?>


