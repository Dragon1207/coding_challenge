const convert = (art) => {
    return { ...art.toJSON(), comments: art.comments.map(comment => {
        if (comment.user_id === null) {
            const { user_id, ...commentWithoutUserId } = comment.toJSON();
            return commentWithoutUserId;
        } else {
            return comment.toJSON();
        }
    })};
}

module.exports = {
    convert
}