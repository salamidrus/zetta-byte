const Blog = require("../models/blog");

exports.GetAll = async (req, res, next) => {
  try {
    const data = await Blog.find();

    res.status(200).json({
      success: true,
      message: "Successfully retrieve all blogs!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.GetOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Blog.findById(id);

    if (!data)
      return res.status(404).json({
        success: false,
        message: `Blog with id:${id} is not found!`,
      });

    res.status(200).json({
      success: true,
      message: "Successfully get the blog!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.Create = async (req, res, next) => {
  try {
    // Check if name's taken
    const { name, description } = req.body;

    const data = await Blog.create({ name, description });

    res.status(201).json({
      success: true,
      message: "Successfully create the blog!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.Update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkExistingBlog = await Blog.findById(id);

    if (!checkExistingBlog)
      return res.status(404).json({
        success: false,
        message: `Blog with id:${id} is not found!`,
      });

    // for dynamic update
    let obj = {};
    for (let input in req.body) {
      obj[input] = req.body[input];
    }

    const data = await Blog.findByIdAndUpdate(id, { $set: obj }, { new: true });

    res.status(200).json({
      success: true,
      message: "Successfully update the data!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.Delete = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully delete the data!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
