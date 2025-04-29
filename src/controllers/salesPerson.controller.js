import { SalesPerson } from "../models/salesPerson.model.js";

export const createSalesPerson = async (req, res) => {
  try {
    const body = matchedData(req);
    const newSalesPerson = await SalesPerson.create(body);
    return res.status(201).send({
      data: newSalesPerson,
      message: "SalesPerson Created Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in creating SalesPerson",
      stack: error.errors,
    });
  }
};

export const getSalesPerson = async (req, res) => {
  try {
    const allSalesPersons = await SalesPerson.find();
    if (!allSalesPersons.length) {
      return res.status(200).send({ message: "No SalesPersons Found" });
    }
    return res.status(200).send({
      data: allSalesPersons,
      message: "SalesPersons Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in fetching SalesPersons",
      stack: error,
    });
  }
};

export const getSalesPersonById = async (req, res) => {
  try {
    const salesPersonId = req.params.id;
    const salesPerson = await SalesPerson.findById(salesPersonId);
    if (!salesPerson) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "SalesPerson not found" });
    }
    return res.status(200).send({
      data: salesPerson,
      message: "SalesPerson Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in fetching SalesPerson",
      stack: error,
    });
  }
};

export const updateSalesPerson = async (req, res) => {
  try {
    const salesPersonId = req.params.id;
    const salesPerson = await SalesPerson.findByIdAndUpdate(
      salesPersonId,
      req.body,
      {
        returnDocument: "after",
      }
    );
    if (!salesPerson) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "SalesPerson not found" });
    }
    return res.status(200).send({
      data: salesPerson,
      message: "SalesPerson Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in updating SalesPerson",
      stack: error.errors,
    });
  }
};

export const deleteSalesPerson = async (req, res) => {
  try {
    const salesPersonId = req.params.id;
    const salesPerson = await SalesPerson.findByIdAndDelete(salesPersonId);
    if (!salesPerson) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "SalesPerson not found" });
    }
    return res.status(200).send({
      data: salesPerson,
      message: "SalesPerson deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .send({ statusCode: 400, message: "Error in deleting SalesPerson" });
  }
};
