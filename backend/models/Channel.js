'use strict';

const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

channelSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
