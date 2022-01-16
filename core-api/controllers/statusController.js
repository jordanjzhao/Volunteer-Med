/*
    Controllers, Originally written By Dhruv
*/

const statusController = {};

statusController.test = async(req, res) => {
  res.code(200);
  res.send({msg: 'Server is up and running!'});
}

export default statusController;