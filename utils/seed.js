const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getMaxListeners } = require('../models/Reaction');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }
    
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    const users = [
        {
            username: 'JOJO',
            email: 'jojogogo@hotmail.com',
        },
        {
            username: 'wonderfrank',
            email: 'vanderhaus@hotmail.com',
            friends: [1],
        },
        {
            username: 'Cameron_B',
            email: 'camiam@hotmail.com',
            friends: [2],
        },
        {
            username: 'gone-fishing',
            email: 'DavidGMorning@hotmail.com',
            friends: [1, 3],
        },
        {
            username: 'THEillest',
            email: 'THEillest@hotmail.com',
            friends: [1, 2, 3, 4],
        },
    ];
    const thoughts = [
        {
            thoughtText: `It's hard to keep a white shirt clean.`,
            username: 'gone-fishing',
        },
        {
            thoughtText: `I been in the game for a MINUTE`,
            username: 'THEillest',
        },
        {
            thoughtText: `Where's the beef?`,
            username: 'Cameron_B',
        },
        {
            thoughtText: `Nope. No thanks.`,
            username: 'JOJO',
        },
        {
            thoughtText: `Anyone heard from wonderfrank?`,
            username: 'JOJO',
        },
    ];

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

});