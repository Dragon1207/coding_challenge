const { User } = require('../models'); // import User models

const createUser = async (req, res) => {
    try {
        
        const { name, age, location } = req.body;
        if (!name) return res.status(400).json({ message: "Name should be provided." });
        if (!age) return res.status(400).json({ message: "Age should be provided." });
        if (!location) return res.status(400).json({ message: "Location should be provided." });

        const existingUser = await User.findOne({ where: { name } });
        if (existingUser) {
            return res.status(400).json({ message: "User with this name already exists." });
        }

        const user = await User.create(req.body);

        res.status(201).json(user);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'age', 'location'],
            order: [
                ['id', 'ASC'],
            ]
        });
        if (users.length) res.status(200).json(users);
        else res.status(404).json({ message: "No users found" });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createUser,
    getUsers
}