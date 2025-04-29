import { order } from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const newOrder = await order.create(req.body);
    return res
      .status(201)
      .send({ data: newOrder, message: "Order Created Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in creating order",
      stack: error.errors,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const allOrders = await order.find();
    if (!allOrders.length) {
      return res.status(200).send({ message: "No Orders Found" });
    }
    return res.status(200).send({
      data: allOrders,
      message: "Orders Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in fetching order",
      stack: error,
    });
  }
};

export const getOrderbyId = async (req, res) => {
  try {
    const orderId = req.params.id;
    const specificOrder = await order.findById(orderId);
    if (!specificOrder) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Order not found" });
    }
    return res.status(200).send({
      data: specificOrder,
      message: "Specific Order Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in fetching order",
      stack: error,
    });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const specificOrder = await order.findByIdAndUpdate(orderId, req.body, {
      returnDocument: "after",
    });
    if (!specificOrder) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Order not found" });
    }
    return res.status(200).send({
      data: specificOrder,
      message: "Order Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      statusCode: 400,
      message: "Error in updating order",
      stack: error.errors,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const specificOrder = await order.findByIdAndDelete(orderId);
    if (!specificOrder) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Order not found" });
    }
    return res.status(200).send({
      data: specificOrder,
      message: "Order deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .send({ statusCode: 400, message: "Error in deleting order" });
  }
};
