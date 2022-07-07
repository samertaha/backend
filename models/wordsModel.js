const mongoose = require('mongoose');
const wordSchema = mongoose.Schema(
  {
    hebrew: {
      type: String,
      required: true,
    },
    arabic: {
      type: String,
      required: true,
    },

    Hspelling: {
      type: String,
      required: true,
    },
    Aspelling: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('WordBank', wordSchema);
