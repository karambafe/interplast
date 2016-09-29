<?php
$success_url = './success';

$phone = htmlspecialchars($_POST["questionnaire-contacts"]);
$price = htmlspecialchars($_POST["questionnaire-price"]);
$description = htmlspecialchars($_POST["questionnaire-description"]);
$type = htmlspecialchars($_POST["questionnaire-type"]);

 /* Здесь проверяется существование переменных */
//   if (isset($_POST['questionnaire-contacts'])) {$phone = $_POST['questionnaire-contacts'];}
//  if (isset($_POST['questionnaire-price'])) {$price = $_POST['questionnaire-price'];}
//   if (isset($_POST['questionnaire-description'])) {$description = $_POST['questionnaire-description'];}
//   if (isset($_POST['questionnaire__type'])) {$type = $_POST['questionnaire__type'];}
  // от кого
		$fromMail = 'tobuy@yandex.ru';
		$fromName = 'tobuy';
/* Сюда впишите свою эл. почту */
 $address = "elama-15883740@yandex.ru";
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";
/* А здесь прописывается текст сообщения, \n - перенос строки */
//  $mes = "Тема: Заявка на сайте!\nТелефон: $phone\nЦена: $price\nОписание техники: $description\nТип техники: $type";
$mes = "Тема: Заявка на сайте!"."\nОписание: ".$description ."\nТелефон: ".$phone ."\nЦена: ".$price ."\nТип: ".$type;
// $mes = $type;



/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub="=?utf-8?B?". base64_encode("СКУПКА И ПРОДАЖА ЦИФРОВОЙ ТЕХНИКИ"). "?="; //сабж
 $send = mail ($address,$sub,$mes,$headers);

ini_set('short_open_tag', 'On');
header('Location: '.$success_url);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

