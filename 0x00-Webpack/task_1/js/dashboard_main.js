import $ from "jquery";
import _ from "lodash";

function updateCounter() {
    let count = 0;
    return function () {
        count++;
        $('#count').text(`${count} clicks on the button`);
    };
}

const debouncedUpdate = _.debounce(updateCounter(), 300);

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - ALX</p>');

$('button').on('click', debouncedUpdate);