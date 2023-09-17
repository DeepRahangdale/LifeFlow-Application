 const testController = (req, res) => {
    res.status(200).send({
      message: "Welcome users",
      success: true,
    });
  };
  
module.exports = { testController };