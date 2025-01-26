import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

const updateCounter = _.debounce(() => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}, 300);

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">0 clicks on the button</p>');
$('button').click(updateCounter);