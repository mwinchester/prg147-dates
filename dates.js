/**
 * Created by meri on 9/4/16.
 */



var $ = function (id) {
    return document.getElementById(id);
}



var date = new Date();
var day =  date.getDate();
var month = date.getMonth() + 1  //0 is january;
var year = date.getFullYear();
var agemonth=0;
var ageyear=0;


function setTheDate(){

    $("today").value = month + "/" + day + "/" + year;
}


function calculate(){
    var today = new Date(("today").value);
    var birthday = $("birthday").value;


    var bmonth = (parseInt(birthday.substring(0,2)));
    var byear = (parseInt(birthday.substring(6,10)));


    if (bmonth > month)
    {
        ageyear = year - byear -1;
        agemonth = 12 - bmonth + month;
    }
    else
    {
        ageyear = year - byear;
        agemonth = month - bmonth;
    }

    $("reply").value = "You are " + ageyear + " years and " + agemonth +" months old";


}



function dayGreet()
{

    var dateStatement = "";
    var d = new Date();
    var todayIs = d.getDay();



    switch (todayIs)
    {
        case 0:
        case 6:
            dateStatement = "It's the weekend! Time to Program! Whoo Hoo!";
            break;
        case 1:
            dateStatement = "Monday, Monday...can't trust that day";
            break;
        case 2:
            dateStatement = "Tuesday...get me a cup of coffee!";
            break;
        case 3:
            dateStatement = "Wednesday...hump day.. half way to Friday";
            break;
        case 4:
            dateStatement = "Thursday....come on Friday....";
            break;
        case 5:
            dateStatement = "Friday!!!! Yay!!!";
            break;
        default:
            dateStatement = "no one should ever see this one";
    }
    document.getElementById("myday").innerHTML =dateStatement;
}



function daysToFinal(){

    var today = new Date();


    $("todaysdate").innerHTML = today.toDateString();

    var final = new Date("12/12/2016");
   $("finaldue").innerHTML = final.toDateString();

    if (today < final){
        var timeDiff = Math.abs(final.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        $("daysleft").innerHTML = diffDays;

    }
    else {
        $("daysleft").innerHTML = "Hmmm....I think your final is late!"
    }



}

window.onload = function()
{
    dayGreet();
    daysToFinal();
    setTheDate();
    $("birthday").value="mm/dd/yyyy"

    $("age").onclick = calculate;
}