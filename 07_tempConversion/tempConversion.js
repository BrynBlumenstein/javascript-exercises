const convertToCelsius = function(tempF) {
  tempC = (tempF - 32) * (5/9);
  roundedTempC = Math.round(tempC * 10) / 10;
  return roundedTempC;
};

const convertToFahrenheit = function(tempC) {
  tempF = (tempC * (9/5)) + 32;
  roundedTempF = Math.round(tempF * 10) / 10;
  return roundedTempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
