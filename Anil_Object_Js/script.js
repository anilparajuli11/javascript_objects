// Question 1

function q1(){		
		var a = [1,2,3,4,5,6,7,8,9,10];
		document.write(a+"<br>");
		var n = prompt("Enter the count of items to be removed from the end of array: ");
		
		
		var i=0;
		var reverseArray = a.reverse();
		document.write("The items removed are ");
		for(i=0;i<n;i++){
			if(i==n-1){
				document.write(reverseArray[i]+".");	
			}
			else{
				document.write(reverseArray[i]+", ");	
			}
		}				
}

//Question 2

function q2(){		
		var intro=["Ram","is","intelligent"];
		var result = intro.join();
		document.write("Joint string is <b>"+result+"</b>");		
	}
	
//Question 3

function q3(){		
		var array = [2,3,4,5,5];
		document.write("<h3>The element in array are: "+array+"</h3>");
		var n = Number(prompt("Enter the element to remove:"));
		var index = array.indexOf(n);
		if(index > -1){
			array.splice(index,1);	
		}
		document.write("<h3>Final elements in array are: "+array+"</h3");
	}
	
	
//Question 4

function q4(){
		var email = prompt("Enter your email: ");
		var length = email.length;
		var i = 0;
		var j = 0;
		document.write("<br>Your protected email address is <h3>"+email[0]+email[1]+email[2]+email[3]);
		for(i = 4; i<length;i++){
			if(email[i] === '@'){
				for(j=i;j<length;j++){
					document.write(email[j]);
				}
				break;	
			}
			document.write("*");	
		}		
		document.write("</h3>");
	}
	
//Question 5
function q5(){
		var repeatString = prompt("Enter any string: ");
		document.write("The string you entered is <h3>"+repeatString+"</h3><br><br>");
		var repeatTime = prompt("Enter number of repeatition: ");
		repeat(repeatString,repeatTime);
	}
	
	function repeat(repeatString,repeatTime){
		document.write("So the string you required is <h3>");
		var i = 0;
		for(i = 0; i<repeatTime;i++){
			document.write(repeatString);
		}
		document.write("</h3>");
	}
	
//Question 6
function q6(){
		var array = "My name is ";
		document.write("Given string is <h3>"+array+"</h3>"); 		
		var insertString = prompt("Enter any string to add to given string: ");
		var insertIndex = prompt("Enter index at which the string gets added: ");
		insert_string(array,insertString,insertIndex);
	}
	
	function insert_string(array,insertString,insertIndex){
		insertString  = insertString+" ";
		document.write("<br>Final string is <h3>"+array.substring(0,insertIndex-1)+insertString+array.substring(insertIndex-1)+"</h3>");
	}
	
//Question 7
function q7(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		var month = date.getMonth()+1;
		document.write("Month number: "+month+"<br>");
		month_name(month);
	}

	function month_name(month){
		switch(month){
			case 1:
				document.write("Month is January.");
				break;
			case 2:
				document.write("Month is February.");
				break;
			case 3:
				document.write("Month is March.");
				break;
			case 4:
				document.write("Month is April.");
				break;
			case 5:
				document.write("Month is May.");
				break;
			case 6:
				document.write("Month is June");
				break;
			case 7:
				document.write("Month is July.");
				break;
			case 8:
				document.write("Month is August.");
				break;
			case 9:
				document.write("Month is September.");
				break;
			case 10:
				document.write("Month is October.");
				break;
			case 11:
				document.write("Month is November.");
				break;
			case 12:
				document.write("Month is December.");
				break;
		}
		
	}
	
//Question 8
function q8(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		document.write("The day is <h3>"+date+"</h3><br>");
		yesterday(date);
	}

	function yesterday(date){
		date.setDate(date.getDate()-1);
		document.write("The day before was <h3>"+date+"</h3>");
	}


//Question 9
function q9(){
		document.write("Alphanumeric Testing<br>");		
		var input = prompt("Enter a character: ");
		check_alpha(input[0]);
	}

	function check_alpha(input){
		if((input>='a' && input<='z') ||(input>='A' && input<='Z') ||(input>='0' && input<='9')){
			document.write("The entered input character <b>is an</b> alphanumeric character.");
		}
		else{
			document.write("The entered input character <b>is not an</b> alphanumeric character.");
		}
	}


//Question 10
function q10(){	
		document.write("Uppercase Testing<br>");
		var input = prompt("Enter a character: ");
		check(input[0]);
	}

	function check(input){
		if(input>='A' && input<='Z'){
			document.write("The entered input character <b>is an</b> uppercase character.");
		}
		else{
			document.write("The entered input character <b>is not an</b> uppercase character.");
		}
	}


//Question 11
function q11(){		
		var input = prompt("Enter a string: ");
		validate(input);
	}

	function validate(input){
		var i = 0;
		var counter = 0;
		for(i=0;i<input.length;i++){
			if((input[i] === 'a') ||(input[i] === 'e') ||(input[i] === 'i') ||(input[i] === 'o') ||(input[i] === 'u')||(input[i] === 'A') ||(input[i] ==='E') ||(input[i] === 'I') ||(input[i] === 'O') ||(input[i] === 'U')){
				counter++;
			}				
		}
		document.write("The number of vowels in the given string is <b>"+counter+"</b>.");
	}