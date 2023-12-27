const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const formDataImport = async (data) => {
  try {
    await prisma.formdata.create({ data: data });
    return true;
  } catch (error) {
    console.error("Error importing data:", error);
    return false;
  }
};

const listItemDataImport = async (data) => {
  try {
    await prisma.listItemData.createMany({ data: data });
    return true;
  } catch (error) {
    console.error("Error importing data:", error);
    return false;
  }
};

const createNewUser = async (data) => {
  const { username, hash } = data;
  try {
    await prisma.serviceFormAdminUsersTable.create({
      data: {
        username: username,
        passwordHashed: hash,
      },
    });
    return true;
  } catch (error) {
    console.error("Error importing data:", error);
    return false;
  }
};

const doesUserExist = async (username) => {
  const user = await prisma.serviceFormAdminUsersTable.findUnique({
    where: { username: username },
  });
  return user !== null;
};

const findUniqueUser = async (username) => {
  try {
    const response = await prisma.serviceFormAdminUsersTable.findUnique({
      where: { username: username },
    });
    return response;
  } catch (error) {
    console.error("Error finding unique user:", error);
    return null;
  }
};

module.exports = {
  formDataImport,
  listItemDataImport,
  createNewUser,
  doesUserExist,
  findUniqueUser,
};
