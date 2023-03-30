const convertToCelsius = function(temp) {
  conTemp = (temp - 32) * 5/9;
  roundTemp = Math.round(conTemp * 10) /10;
  return roundTemp;
};

const convertToFahrenheit = function(temp) {
  conTemp = (temp * 9/5) + 32;
  roundTemp = Math.round(conTemp * 10) /10;
  return roundTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
