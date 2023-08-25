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

// Use a getter method to format the timestamp on query
thoughtSchema
    .virtual('formattedThoughtCreatedAt')
    // Getter
    .get(function () {
        return this.createdAt.toLocaleString;
    });

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