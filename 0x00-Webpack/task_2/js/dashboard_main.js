import $ from 'jquery';
import '../css/main.css';  // Import the CSS

// Dynamically append content to the body
$('body').append('<h1>Webpack Optimized with Code Splitting</h1>');
$('body').append('<p>This is a dynamic message added with jQuery.</p>');

// Add event listener to the button
$('button').on('click', function() {
    let count = parseInt($('#count').text()) || 0;
    count++;
    $('#count').text(`${count} clicks on the button`);
});