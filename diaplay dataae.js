
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

// Adjust single digit day and month to have leading zeros
if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}

var formattedDate = day + '/' + month + '/' + year;
console.log("Today's date is: " + formattedDate);
