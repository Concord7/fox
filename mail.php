<?php

if (isset($_POST['phone'])){
 
 
$recepient = "lisa-54@yandex.ru";
$siteName = "grigorenkofox.ru";
 
$phone = trim($_POST["phone"]);
$name = trim($_POST["hero"]);
$but = trim($_POST["hiddenField"]);
 
$message = "Телефон: $phone \nМессенджер: $name \nКнопка: $but";
$pagetitle = "Заявка с сайта \"$siteName\"";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "From: grigorenkofox.ru <info@site.ru>\r\n";
mail($recepient, $pagetitle, $message, $headers);
echo 'Я свяжусь с Вами в самое ближайшее время!';
}
else
{
echo "Вы заполнили не все поля, необходимо вернуться назад!";
}
?>
