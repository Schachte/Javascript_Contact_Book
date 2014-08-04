/*
Welcome to the javascript object oriented testing program for address books
*/

var contacts = []; //Empty contact array to store known people

/*
Function to add people into the contacts array
*/

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


function addPerson(firstName, lastName, email, phoneNumber) { //function with a constructor the build a person into the contact database

	contacts[contacts.length] = {
		first: firstName,
		last: lastName,
		mail: email,
		phone: phoneNumber
	}
};

var addAnother = true; //pre-set the continuation boolean to true

while (addAnother) {

	var continue_add = prompt('Would you like to add another user into the contact book?');

	continue_add = continue_add.toUpperCase(); //Convert the variable into all uppercase to avoid any case-issues

	if (continue_add == 'YES') { //If the user wants to continue added people into the database, then confirm that continuation through this if-statement

		addAnother = true;

		var user_first = prompt('Please enter the first name of the user:'); //get the name of the user
		user_first = toTitleCase(user_first); 								//use the title casing function to better format the user information

		var user_last = prompt('Please enter the last name of the user: '); //get the name of the user
		user_last = toTitleCase(user_last); 								//use the title casing function to better format the user information

		var user_mail = prompt('Please enter the email of the user');		//get the email of the user..
		user_mail = toTitleCase(user_mail); 								//use the title casing function to better format the user information

		var number = prompt('Please enter the phone number of the user: ');

		addPerson(user_first, user_last, user_mail, number); //Use the person conttructor to add the person into the contact database

		alert('Congrats, the user has been added into the database..'); //confirmation message that the user has been added into the databsae
	}

	else if (continue_add == 'NO') { //If the user would no longer like to continue continuting adding people in the database, end that continuation here

		addAnother = false; //change continuation boolean to false
	}
}

for (var i = 0; i < contacts.length; i++) { //For-loop to loop through all of the contacts in a nice string format to print to the console to show the user the name of the people in the database.

	 console.log('First Name: ' + contacts[i].first + '\nLast Name: ' + contacts[i].last + '\nPhone Number: ' + contacts[i].phone + '\nEmail: ' + contacts[i].mail + '\n');
}

alert('Now I will have you search for a user in the database and I will tell you if they do or do not exit..');


var search_user = true; //boolean to continue searching for people into the database
var user_found = false;

while (search_user == true) 
{
	var user_Search = prompt('Please enter the last name of the user you would like to search the database for : ');

	user_Search = toTitleCase(user_Search);

	for (var count = 0; count < contacts.length; count ++) {

		if (contacts[count].last == user_Search) {

			user_found = true;
			console.log('Congratulations, information for the contact exists within the database!');
			console.log('First Name: ' + contacts[count].first + '\nLast Name: ' + contacts[count].last + '\nPhone Number: ' + contacts[count].phone + '\nEmail: ' + contacts[count].mail + '\n');
		}

	}

	if (user_found == false) {

		alert('Sorry, ' + user_Search + ' does not exist in the list..');
	}


	user_found = false; //reset found variable when searching through list

	var search_more = prompt('Would you like to search for someone else in the database?');
	search_more = search_more.toUpperCase();

	if (search_more == 'YES') {
		search_user = true;
	}
	else if (search_more == 'NO') {
		search_user = false;
	}
	else {
		alert('Invalid Input!');
	}
}
//console.log('Sorry no information for that user was found in the database....');

console.log('List of people inside of the array has ended!'); //Ending confirmation to show the user in the console that the adding of user has finished
