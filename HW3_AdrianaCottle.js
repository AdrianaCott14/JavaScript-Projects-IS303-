//Adriana Cottle

/* This program will ask a user for a team name and how many 'games' will be played in the season. After gathering this data, the computer will ask the user for an opponent name and will execute a 'game' between the two  by generating a random number and determining the team with the higher score as the winner. Once a winner is determined, the program will either add to the user's team's wins or losses. This will continue for the rest of the games and will then print out the number of wins and losses, and based off of those will say which tournament that the team can go to. */

//declare variables
var sMyTeam = "";
var sOppTeam = "";
var iNumGames = 0;
var iNumWins = 0;
var iNumLosses = 0;
var iMyScore = 0;
var iOppScore = 0;
var sResults = "";
var sTournament= "";

//Get team name and num of games in season
sMyTeam = prompt("What is your team's name?");
iNumGames = parseInt(prompt("How many games are in the season?"));

//start playing. Get opponent teams and random scores
for (var i = 0; i < iNumGames; i++) {
    sOppTeam = prompt("Who is your opponent?");

    iMyScore = Math.floor(Math.random() * 101);
    iOppScore = Math.floor(Math.random() * 101);
    console.log("my score " + iMyScore + " other " + iOppScore);

    //determine winner 
    if (iMyScore > iOppScore) {
        iNumWins += 1;
        
    }
    else if (iMyScore < iOppScore) {
        iNumLosses += 1;
    }
    //tie
    else {
        while(iMyScore === iOppScore) {
            iMyScore = Math.floor(Math.random() * 101);
            iOppScore = Math.floor(Math.random() * 101);
            console.log("myscore " + iMyScore + "otherscore " + iOppScore);
            if (iMyScore > iOppScore) {
                iNumWins += 1;
                
            }
            else if (iMyScore < iOppScore) {
                iNumLosses += 1;
            }
        }
    }
}
//determine tournament placement
if (iNumWins >= (iNumGames * .75)) {
    sTournament = "March Madness";
}
else if (iNumWins >= (iNumGames * .5)) {
    sTournament = "NIT Tournament";
}
else {
    sTournament = "See you next year";
}

//generate output
sResults = sMyTeam + " " + iNumWins + "-" + iNumLosses + "\n" + sTournament;
alert(sResults);





