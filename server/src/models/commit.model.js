const mongoose = require('mongoose');

const commitsSchema = new mongoose.Schema({
    owner: {type: String, required: true},
    commit: {type: String, required: true, unique: true},
    repo: {type: String, required: true},
    text: {type: String, required: true}
}, {
    versionKey: false,
    timestamps: true
})

const Commit = mongoose.model("commit", commitsSchema);

module.exports = Commit;