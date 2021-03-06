const mongoose = require('mongoose');

const labelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Payload', 'Drones', 'Sự cố'],
      required: true,
    },
    isDefault: {
      type: Boolean,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const labelModel = mongoose.model('Label', labelSchema);

module.exports = labelModel;
