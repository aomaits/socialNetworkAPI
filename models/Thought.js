const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
    }
);

// Create a virtual property `reactionCount` that gets the length of the thought's reactions array field on query.
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    });

// Initialize our Thoughts model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;


// Thought model will include Reaction! 