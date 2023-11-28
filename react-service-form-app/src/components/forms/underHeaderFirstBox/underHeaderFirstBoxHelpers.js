import Tesseract from "tesseract.js";

export const handleCameraEnhanceIcon = async () => {
    try {
      const { image, updatedVisualData } = await getImage();
      const result = await handleTextRecognition(image);
      const serialNo = extractSerialNumber(result);
      return { updatedVisualData, serialNo };
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error to handle it at the higher level
    }
  };
  
  const getImage = () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.multiple = false;
      input.addEventListener("change", (event) => {
        const files = event.target.files;
        const image = files[0];
  
        if (!image) {
          reject("No image selected");
          return;
        }
  
        const reader = new FileReader();
        reader.onload = () => {
          const dataURL = reader.result;
  
          const updatedVisualData = {
            name: "Etiket",
            type: image.type,
            size: image.size,
            lastModified: image.lastModified,
            lastModifiedDate: image.lastModifiedDate,
            preview: URL.createObjectURL(image),
            extension: image.name.split(".").pop(),
            isUploaded: false,
            isProcessing: false,
            dataURL: dataURL,
          };
  
          resolve({ image, updatedVisualData });
        };
  
        reader.onerror = (error) => {
          reject(error);
        };
  
        reader.readAsDataURL(image);
      });
  
      input.click();
    });
  };
  
  const handleTextRecognition = async (image) => {
    return new Promise((resolve, reject) => {
      Tesseract.recognize(image, "eng").then(({ data: { text } }) => {
        resolve(text);
      }).catch((error) => {
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
  const match = input.match(/SERIAL\sNO\s[^\n§]*§[5S][^\s]*_[^\s]+/);

  // If a match is found, extract the relevant part and remove unnecessary characters
  if (match) {
    const serialNumber = match[0].replace(/§|/g, "");
    const afterSerialNo = getDataAfterSerialNo(serialNumber);
    // Replace the leading "5" with "SS"
    const formattedSerialNumberString = formattedSerialNumber(afterSerialNo);

    return formattedSerialNumberString;
  }

  // Return null if no match is found
  return null;
}
function getDataAfterSerialNo(inputString) {
  // Regular expression to match variations of "SERIAL NO"
  const regex = /SER(?:İ|I)AL\sNO\s*(.*)/i;

  // Find the first match
  const match = inputString.match(regex);

  // If a match is found, extract the data after the match
  if (match) {
    const dataAfterSerialNo = match[1].trim();
    return dataAfterSerialNo;
  } else {
    return "Serial No not found in the input string";
  }
}

const formattedSerialNumber = (input) => {
  input = input.trim();
  if (input.startsWith("5S")) {
    return `SS${input.slice(2)}`;
  } else if (input.startsWith("55")) {
    return `SS${input.slice(2)}`;
  } else if (input[0] || input[1] !== "S") {
    return `SS${input.slice(2)}`;
  } else if (input.startsWith("S5")) {
    return `SS${input.slice(2)}`;
  } else {
    return input;
  }
};
