const { Post } = require('../models');

const postData = [
    {
        title: "The crypto exchange Bittrex has reached a settlement with the SEC",
        content: "The bankrupt exchange agreed to payh a fine of $24 million to settle the SEC’s charges that it operated as an unregistered national securities exchange, broker, and clearing agency.",
        user_id: 1
    },
    {
        title: "The FCC is taking public comments on its plan for a cybersecurity version of the Energy Star Sticker",
        content: "If you have questions about the proposed US Cyber Trust Mark that’s supposed to help customers answer questions about security and privacy. this 30-day comment period is a good time to speak up.",
        user_id: 2
    },
    {
        title: "Slack’s bigest redesign ever tries to tame the chaos of your workday",
        content: "Slack seems to get more chaotic the more you use it. Now, the company is trying to help you tame all your messages and channels.",
        user_id: 2

    },
    {
        title: "Origin’s EON 14-S laptop has great gaming performance for less - if you don’t need a high resolution di",
        content: "The Origin EON14-S has its quirks, but it delivers great frame rates for demanding games it a big discount from the competition",
        user_id: 5
    },
    {
        title: "Zuckerberg, Musk fight night may be postponed due to Elon needing surgery",
        content: "Elon Musk says he may need surgery before a proposed cage match with Mark Zuckerberg, that the Meta founder set for Aug. 26",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;