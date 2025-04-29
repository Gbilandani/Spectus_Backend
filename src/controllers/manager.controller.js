import { matchedData } from "express-validator";
import { Manager } from "../models/manager.model.js";
import { order } from "../models/order.model.js";
import { SalesPerson } from "../models/salesPerson.model.js";

export const createManager = async (req, res) => {
  try {
    const body = matchedData(req);
    const newManager = await Manager.create(body);
    return res
      .status(201)
      .send({ data: newManager, message: "Manager Created Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in creating manager",
      stack: error.errors,
    });
  }
};

export const getManagers = async (req, res) => {
  try {
    const managers = await Manager.find();
    if (!managers.length) {
      return res.status(404).send({ message: "No Managers Found" });
    }
    return res.status(200).send({
      data: managers,
      message: "Managers Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .send({ statusCode: 400, message: "Error in fetching managers" });
  }
};

export const getManagerbyId = async (req, res) => {
  try {
    const managerId = req.params.id;
    const specificmanager = await Manager.findById(managerId);
    if (!specificmanager) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Manager not found" });
    }
    return res.status(200).send({
      data: specificmanager,
      message: "Manager Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in fetching Manager",
      stack: error,
    });
  }
};

export const getManagerDetails = async (req, res) => {
  try {
    const managerId = req.params.id;
    const specificmanager = await Manager.findById(managerId);
    if (!specificmanager) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Manager not found" });
    }
    const orders = await order.find({ managedBy: managerId });
    const salesPerson = await SalesPerson.find({ managedBy: managerId });
    const data = {
      manager: specificmanager,
      orders,
      totalOrders: orders.length,
      salesPerson,
      totalSalesPerson: salesPerson.length,
    };
    return res.status(200).send({
      data,
      message: "Manager Details Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in fetching Manager",
      stack: error,
    });
  }
};

export const updateManager = async (req, res) => {
  try {
    const managerId = req.params.id;

    const updateManager = await Manager.findByIdAndUpdate(managerId, req.body, {
      returnDocument: "after",
    });
    if (!updateManager) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Manager not found" });
    }

    return res.status(200).send({
      data: updateManager,
      message: "manager Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in updating manager",
      stack: error.errors,
    });
  }
};

export const deleteManager = async (req, res) => {
  try {
    const managerId = req.params.id;
    const manager = await Manager.findByIdAndDelete(managerId);
    if (!manager) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Manager not found" });
    }
    res.status(200).send({
      data: manager,
      message: "Manager deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ statusCode: 400, message: "Error in deleting manager" });
  }
};
