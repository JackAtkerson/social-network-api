const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .post(addFriend)
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userid/friends/:friendId')
    .delete(deleteFriend)

module.exports = router;