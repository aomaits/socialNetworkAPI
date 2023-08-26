const { Thought, User } = require('../models');

module.exports = {
    //get all thoughts, return as json
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ 
                _id: req.params.thoughtID
            });

            if (!thought) {
                return res.status(404).json({
                    message: 'No thought exists with that ID.'
                });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //create new thought & add thought to user model's thoughts array
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                message: 'Thought created, but found no user with that ID',
                })
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // update a thought 
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtID },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // delete a thought and update the corresponding thought array for the User model
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtID });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            const user = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtID },
                { $pull: { thoughts: req.params.thoughtID } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                message: 'Thought deleted but no user with this id!',
                });
            }

            res.json({ message: 'Application successfully deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
//   // Adds a tag to an application. This method is unique in that we add the entire body of the tag rather than the ID with the mongodb $addToSet operator.
//   async addTag(req, res) {
//     try {
//       const application = await Application.findOneAndUpdate(
//         { _id: req.params.applicationId },
//         { $addToSet: { tags: req.body } },
//         { runValidators: true, new: true }
//       );

//       if (!application) {
//         return res.status(404).json({ message: 'No application with this id!' });
//       }

//       res.json(application);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Remove application tag. This method finds the application based on ID. It then updates the tags array associated with the app in question by removing it's tagId from the tags array.
//   async removeTag(req, res) {
//     try {
//       const application = await Application.findOneAndUpdate(
//         { _id: req.params.applicationId },
//         { $pull: { tags: { tagId: req.params.tagId } } },
//         { runValidators: true, new: true }
//       );

//       if (!application) {
//         return res.status(404).json({ message: 'No application with this id!' });
//       }

//       res.json(application);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
};
