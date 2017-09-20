var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Profile.JPG') {
		myImage.setAttribute ('src','images/Profile2.JPG');
	} else {
		myImage.setAttribute ('src','images/Profile.JPG');
	}
};
document.querySelector('p').onclick = function() {
	alert('Ouch! Stop poking me!');
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to My Page, ' + myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to My Page, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
};
