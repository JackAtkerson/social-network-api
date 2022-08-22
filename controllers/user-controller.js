const { User, Thought } = require('../models');

const userController = {
    //GET all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //GET user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Could not find a user with this id' });
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //CREATE user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    //UPDATE user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Could not find a user with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    //DELETE user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Could not find a user with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //CREATE a friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId}},
            { new: true })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({message: 'Could not find a user with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    },
    //DELETE a friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'Could not find a user with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    }
};

module.exports = userController;