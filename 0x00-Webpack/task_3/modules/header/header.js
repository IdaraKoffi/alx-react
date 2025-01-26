import $ from 'jquery';
import './header.css';

console.log('Init header');
$('body').prepend('<div id="logo" style="width: 200px; height: 200px; background-image: url(https://placekitten.com/200/200);"></div>');
$('body').prepend('<h1>ALX Dashboard</h1>');