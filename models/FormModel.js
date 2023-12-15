const mongoose = require("mongoose");

const FormSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
  },
  { timestamps: true }
);

const FormModel = mongoose.model("FormSubmission", FormSubmissionSchema);

module.exports = FormModel;
