//Adriana Cottle

//Section 001

/* Description of the program
This program will take two teams, BYU and Gonzaga, generate a random score for each, and then determine who has the higher score as the winner. 
*/

//declare your variables
var sByu = "BYU";
var sGonz = "Gonzaga";
var iByuScore;
var iGonzScore;
var sResults;
var sWinner;

//get random number scores 
iByuScore = Math.floor(Math.random() * 101);
iGonzScore = Math.floor(Math.random() * 101);

//find winner
if (iByuScore > iGonzScore) 
{
    sWinner = sByu + " wins! Go Cougs!!";
}

else if (iByuScore < iGonzScore) 
{
    sWinner = sGonz + " wins! GO Bulldogs!!";
}

else 
{
    sWinner = "It's a tie"
}

//Set result output
sResults = sByu + " " + iByuScore + "\n" + sGonz + " " + iGonzScore + "\n" + "\n" + sWinner;

//display the results using an alert box
alert(sResults);