const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const formDataImport = async (data) => {
    try {
        const defaultData = {
            reportNo: null,
            serviceNo: null,
            outOfWarranty: null,
            withinWarranty: null,
            freeService: null,
            paidService: null,
            contractMaintenance: null,
            withMaterial: null,
            discoveryDetection: null,
            serialNumber: null,
            productDescription: null,
            productBrand: null,
            productCategory: null,
            model: null,
            firstTechnician: null,
            arrivalTime: null,
            departureTime: null,
            serviceStartTime: null,
            serviceEndTime: null,
            totalDistance: null,
            coolingFailure: null,
            powerFailure: null,
            assembly: null,
            plumbingMalfunction: null,
            renovation: null,
            maintenance: null,
            discovery: null,
            another: null,
            malfunctionDefinition: null,
            defectivePartSerialNumber: null,
            additionalThingsToDo: null,
            engineerTechnicianNameSurname: null,
            customerNameSurname: null,
        };

        const formData = await prisma.formdata.create({
            data: { ...defaultData, ...data },
        });

        console.log("Data imported successfully:", formData);
    } catch (error) {
        console.error("Error importing data:", error);
    } finally {
        await prisma.$disconnect();
    }
};
module.exports = { formDataImport };

// const data = {
//     reportNo: '123',
//     serviceNo: '456',
//     outOfWarranty: true,
//     withinWarranty: false,
//     freeService: false,
//     paidService: true,
//     contractMaintenance: true,
//     withMaterial: false,
//     discoveryDetection: true,
//     serialNumber: 'ABC123',
//     productDescription: 'Product description',
//     productBrand: 'Product brand',
//     productCategory: 'Product category',
//     model: 'Product model',
//     firstTechnician: 'John Doe',
//     arrivalTime: new Date().toISOString(), // Provide a valid ISO-8601 DateTime
//     departureTime: new Date().toISOString(),
//     serviceStartTime: new Date().toISOString(),
//     serviceEndTime: new Date().toISOString(),
//     totalDistance: 100,
//     coolingFailure: true,
//     powerFailure: false,
//     assembly: false,
//     plumbingMalfunction: true,
//     renovation: false,
//     maintenance: true,
//     discovery: false,
//     another: 'Another value',
//     malfunctionDefinition: 'Malfunction definition',
//     defectivePartSerialNumber: 'DEF456',
//     additionalThingsToDo: 'Additional things to do',
//     engineerTechnicianNameSurname: 'Jane Smith',
//     customerNameSurname: 'John Smith',
// }
