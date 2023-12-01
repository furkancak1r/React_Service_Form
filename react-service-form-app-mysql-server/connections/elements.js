const { formDataImport } = require("../prisma/prismaConnections/formData.js");
const uploadFormData = async (data) => {
  console.log(data);
  const response = await formDataImport(data);
  return response;

};

module.exports = { uploadFormData };
