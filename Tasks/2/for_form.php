
<?php
header('Content-Type: text/html; charset=utf-8');

$message = 
"Имя: " . $_POST['name'].
"</br>Фамилия: ". $_POST['surname'].
"</br>Отчество: ". $_POST['F_name']. 
"</br>Телефон: ". $_POST['tel']. 
"</br>Email: " . $_POST['mail'] .
"</br>Дата: ". $_POST['date']. 
"</br>Пол: ". $_POST['group1'].
"</br>Любимый ЯП: ". $_POST['favorite'].
"</br>Сообщение: " . $_POST['biograph'];

if (mail($_POST['mail'], "ФОРМА", $message)) {
    echo "Сообщение отправлено!";
} else {
    echo $message;
}
?>

<html>
     <title>Форма</title>
</html>
