const router = require('express').Router();

const {
    createUser,
    login
} = require ('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, saveBook);

router.route('/login').post(login);

module.exports = router;