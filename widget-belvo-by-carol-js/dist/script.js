//function successCallbackFunction(link, institution) {
    // Do something with the link and institution,
    // such as associate it with your registered user in your database.
//}

//function onExitCallbackFunction(data) {
    // Do something with the exit data.


//function onEventCallbackFunction(data) {
    // Do something with the event data.


function successCallbackFunction(link, institution) {
// Do something with the link and institution,
// such as associate it with your registered user in your database.
alert(link);
}

//function onExitCallbackFunction(data) {
// Do something with the exit data.


//function onEventCallbackFunction(data) {
// Do something with the event data.


// Function to call your server-side to generate the access_token and retrieve the your access token
function getAccessToken () {
return fetch('https://untitled-49qkhxwj0yy3.runkit.sh/token', { method: 'GET' })
.then(response => response.json())
.then((data) => data.access)
.catch(error => console.error('Error:', error))
}

function openBelvoWidget(accessToken) {
belvoSDK.createWidget(accessToken, {
// Add your startup configuration here.
callback: (link, institution) => successCallbackFunction(link, institution),

}).build();
}

getAccessToken().then(openBelvoWidget) // Once the access token is retrieved, the widget is started.
// check our node package on github
// https://github.com/belvo-finance/belvo-js