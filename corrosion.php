<?php
$success_url = './success';

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$type = htmlspecialchars($_POST["type"]);

  // от кого
		$fromMail = 'Interplast@yandex.ru';
		$fromName = 'Interplast';
/* Сюда впишите свою эл. почту */
$address = "karambafe@yahoo.com";
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Заявка на сайте!"."\nИмя: ".$name ."\nТелефон: ".$phone."\nТип: ".$type;
// $mes = $type;

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub="=?utf-8?B?". base64_encode($type). "?="; //сабж
 $send = mail ($address,$sub,$mes,$headers);

ini_set('short_open_tag', 'On');
header('Location: '.$success_url);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


