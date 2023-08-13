const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "holy cow!!",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "Original comment lol",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "it is unbelievable, wow",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "This is cool.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Good stuff, I want to know more.",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "No one cares!",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "That's your opinion and I respect it.",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "I like that. Keep it coming",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;