function rateDisplay()
{
	var slider = document.getElementById("rate");
	var output = document.getElementById("displayRate");
	output.innerHTML = slider.value.concat("%");
}

function compute()
{
    	var principal = document.getElementById("principal").value;
	if (principal <= 0)
	{

   		alert("The Amount must be greater than zero.");

   		document.getElementById("prinicipal").focus();

   		document.getElementById("prinicipal").click();

   		return null;
	}
	
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	
	var interest = principal * years * rate / 100;

	var currentDate = new Date();
  	var currentYear = currentDate.getFullYear();
	var futureYear = parseInt(currentYear) + parseInt(years);

	var finalMessage = "<br>If you deposit " + principal + "," 
	+ "<br>at an interest rate of " + rate + "%."
	+ "<br>You will receive an amount of " + interest + ","
	+ "<br>in the year " + futureYear;  
	document.getElementById("result").innerHTML = finalMessage;

	document.getElementById("prinicipal").focus();

}
        
