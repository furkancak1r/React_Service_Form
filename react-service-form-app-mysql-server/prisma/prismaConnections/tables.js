const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const formDataImport = async (data) => {
  try {
    await prisma.formdata.create({
      data: data,
    });
    return true;
  } catch (error) {
    console.error("Error importing data:", error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};


const listItemDataImport = async (data) => {
  try {
    await prisma.listItemData.createMany({
      data: data,
    });
    return true;
  } catch (error) {
    console.error("Error importing data:", error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};


module.exports = { formDataImport,listItemDataImport };
