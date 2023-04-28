const { User, Art, Comment } = require('../models'); // import User models
const Sequelize = require('sequelize');
const { convert } = require('../helpers/convert');

const getArts = async (req, res) => {
    try {
        let arts = await Art.findAll({
            attributes: ['id', 'title', 'artist', 'year'],
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: Comment,
                as: 'comments',
                attributes: ['id', 'content', 'name', ['user_id', 'userID']],
            }]
        });
        if (arts.length) {
            // Remove user_id field for comments with null userID
            for (i=0; i<arts.length; i++) {
                arts[i] = convert(arts[i])                
            }
            res.status(200).json(arts);
        }
        else res.status(404).json({ message: "No arts found" });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
};

const getArtById = async (req, res) => {
    const artId = req.params.id;

    try {
        let art = await Art.findOne({
            where: { id: artId },
            attributes: ['id', 'title', 'artist', 'year'],
            order: [['id', 'ASC']],
            include: [{
                model: Comment,
                as: 'comments',
                attributes: ['id', 'content', 'name', ['user_id', 'userID']],
            }]
        });
        if (art) {
            // Remove user_id field for comments with null userID
            art = convert(art)
            console.log(art)
            res.status(200).json(art);
        }
        else res.status(404).json({ message: `Art id ${artId} not found` });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
};

const addCommentForArt = async (req, res) => {
    const artID = req.params.id;
    const { userID, name, content } = req.body;
    let nameR = ""
    console.log("userid", userID)

    try {
        const existingArt = await Art.findOne({ where: { id: artID } });

        if (!existingArt) return res.status(404).json({ message: `Art id ${artID} not found` });
        if (userID) {
            const existingUser = await User.findOne({ where: { id: userID } });
            if (!existingUser) return res.status(400).json({ message: 'Invalid User' });
            nameR = existingUser.name;
        }
        if (!userID) {
            const existingComment = await Comment.findOne({
                where: {
                    name: name,
                    user_id: null
                }
            });
            if (!name) return res.status(400).json({ message: "Name should be provided" });
            if (existingComment) return res.status(400).json({ message: `${name} can't add comments to this art more. If you want to add more comments, please sign in.` });
            nameR = name
        }
        if (!content) return res.status(404).json({ message: "Content should be provided" });

        const comment = await Comment.create({
            user_id: userID === "" ? null : userID,
            name: nameR,
            content: content,
            art_id: artID,
        });

        res.status(201).json(comment);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getArts,
    getArtById,
    addCommentForArt
}