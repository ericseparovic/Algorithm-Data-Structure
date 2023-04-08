// This code defines a function called calcCentury that takes a parameter called year. Inside the function,
//  the code calculates the century that the year belongs to by dividing the year by 100 and rounding up to the nearest whole number
//  using the Math.ceil function.
function calcCentury(year) {
	if (year === 0) return 1;
	const century = Math.ceil(year / 100);
	return century;
}

module.exports = calcCentury;
