import Tesseract from "tesseract.js";

export const handleCameraEnhanceIcon = async (image, updatedVisualData) => {
  try {
    const result = await handleTextRecognition(image);
    const serialNo = extractSerialNumber(result);

    return { serialNo };
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to handle it at the higher level
  }
};

const handleTextRecognition = async (image) => {
  return new Promise((resolve, reject) => {
    Tesseract.recognize(image, "eng")
      .then(({ data: { text } }) => {
        resolve(text);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

function extractSerialNumber(input) {
  // Check if the input string exists
  if (!input) {
    return null;
  }

  // Use a regular expression to match the entire serial number pattern
  //const match = input.match(/SERIAL\sNO\s[^\n§]*§[5S][^\s]*_[^\s]+/);
  let regex = /([A-Za-z0-9]+(_[A-Za-z0-9]+)+)/i;

  let match = input.match(regex);

  // If a match is found, extract the relevant part and remove unnecessary characters
  if (match) {
    const formattedSerialNumberString = formattedSerialNumber(match[0]);
    return formattedSerialNumberString;
  }

  // Return null if no match is found
  return null;
}
const formattedSerialNumber = (input) => {
  input = input.trim();
  //get the first characters until first "_"
  let firstPart = input.substring(0, input.indexOf("_"));
  //get the values after firstPart in input
  let lastPart = input.substring(firstPart.length);
  //if firstPart is not starts with SS then get the last 6 characters
  if (!firstPart.startsWith("SS")) {
    firstPart = firstPart.substring(firstPart.length - 6);
    //add SS to firstPart
    firstPart = "SS" + firstPart;
  }
  //combine with firstPart and lastPart
  let formattedSerialNumber = firstPart + lastPart;
  return formattedSerialNumber;
};
