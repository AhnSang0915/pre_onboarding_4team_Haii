const userService = require('../services/user');

const createUser = async (req, res) => {
  const { name, account, email, password, phoneNumber, region } = req.body;

  if (!(name && account && email && password && phoneNumber)) {
    res.status(400).json({ err: '칸을 제대로 입력해주세요.' });
  }

  if (password.length < 8 || password.length > 16) {
    res.status(400).json({ err: '비밀번호 길이를 확인해주세요.' });
  }

  try {
    await userService.createUser(
      name,
      account,
      email,
      password,
      phoneNumber,
      region
    );
    res.status(200).json({ message: '회원가입 되었습니다.' });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ err: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { id, token } = await userService.login(email, password);

    return res.status(201).json({ id, token });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const updateMgr = async (req, res) => {
  const adminId = req.params.adminId;
  const { mgrId, name, phone_number, region } = req.body;
  try {
    const Before_update = await userService.beforeUpdateMgr(mgrId);
    const After_update = await userService.updateMgr(
      adminId,
      mgrId,
      name,
      phone_number,
      region
    );
    res
      .status(200)
      .json({ message: 'Update SUCCESS', Before_update, After_update });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

module.exports = { createUser, login, updateMgr };
