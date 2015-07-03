var $ = function(id){													// define function which is an alias for "document.getElementById()"
	return document.getElementById(id);					// input is string "id" and output is matched HTML element
}

var calculate_click = function(){								// create event handler function named "calculate_click"
	console.log("calculate_click");
	var subtotal = $("subtotal").value;							// get calculator input values
	var tipRate = $("tipRate").value;
	console.log("subtotal: " + subtotal + ", tipRate: " + tipRate);
	
	subtotal = parseFloat(subtotal);							// input is string, output is a float or NaN (not a number)
	tipRate = parseFloat(tipRate);
	
	if (isNaN(subtotal) || isNaN(tipRate)) {					// if (testExpression) { statements to run if testExpression is true }
		alert("please enter numbers");							// isNaN() returns true if input is not a number
		return;																// end function and output nothing
	}																			// '||' is logical or (pipe character lives above the "Enter" key)
	
	if ((subtotal < 0) || (tipRate < 0)) {						// if (testExpression) { statements to run if testExpression is true }
		alert("please enter positive numbers");				// isNaN() returns true if input is not a number
		return;
	}																			// '||' is logical or (pipe character lives above the "Enter" key)	
	
	var tipAmount = (tipRate / 100) * subtotal;				// calculating tipAmount
	var total = subtotal + tipAmount;
	tipAmount = tipAmount.toFixed(2);							// constraining to 2 significant digits
	$("tipAmount").value = tipAmount;
	$("total").value = total.toFixed(2);
}	

window.onload = function() {									// define anonymous event handler to run when window loads
	console.log("window.onload");
	$("calculate").onclick = calculate_click;					// assign button's event handler to be calculate_click
}






