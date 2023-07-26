import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";
import cartModel from "../models/cartModel.js";
import feedbackModel from "../models/feedbackModel.js";
import fs from "fs";
import slugify from "slugify";
import braintree from "braintree";
import dotenv from "dotenv";

dotenv.config();

//get Cart Controller

export const getCartController = async (req, res) => {
  try {
    const { uid } = req.params;
    // console.log("hii" + uid)
    const cart = await cartModel.find({ user: uid });
    // console.log(cart)
    res.status(200).send({
      success: true,
      message: "Success",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng cart product",
      error,
    });
  }
};

//get Cart Products Controller

export const getCartProductController = async (req, res) => {
  try {
    const { pid } = req.params;
    // console.log("hii" + uid)
    const product = await productModel.find({ _id: pid });
    // console.log(cart)
    res.status(200).send({
      success: true,
      message: "Success",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      // success: false,
      // message: "Eror while getitng cart product",
      error,
    });
  }
};

//add to cart
export const addToCartController = async (req, res) => {
  try {
    const pid = req.params.pid;
    const { user, product } = req.body;
    const order = new cartModel({
      user: user,
      product: pid,
    }).save();
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "ohhh nooo",
      error: error.message,
    });
  }
};

//deleteCartProductController
export const deleteCartProductController = async (req, res) => {
  try {
    const pid = req.params.pid;
    console.log("Pid =", pid);
    await cartModel.findOneAndDelete({ product: pid });
    res.status(200).send({
      success: true,
      message: "Cart Product Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};

//add to cart
export const feedbackController = async (req, res) => {
  try {
    const { formData } = req.body;
    const feedback = new feedbackModel({
      fullName: formData.fullName,
      email: formData.email,
      feedback: formData.feedback,
    }).save();
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "ohhh nooo",
      error: error.message,
    });
  }
};
