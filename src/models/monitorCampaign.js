const mongoose = require('mongoose');

const monitorCampaignSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    drones: [
      {
        type: String,
        required: true,
      },
    ],
    monitoredObjects: [{
      type: String,
      required: true,
    }],
    monitoredZone: {
      type: String,
      required: true,
    },
    mechanism: {
      type: String,
      required: true,
    },
    metadataType: {
      type: String,
      required: true,
    },
    resolution: {
      type: String,
      required: true,
    },
    labels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Label',
      },
    ],
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const monitorCampaignModel = mongoose.model(
  'MonitorCampain',
  monitorCampaignSchema
);

module.exports = monitorCampaignModel;
