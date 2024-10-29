import $ from "jquery";
import "../header/header.css";

console.log("Init header");

$(document).ready(function () {
  $("body").prepend("<h1>Holberton Dashboard</h1>");
});
