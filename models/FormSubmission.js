// Mongoose removed. FormSubmission model removed. Use another ORM or driver if needed.

const formSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    default: '',
  },
  budget: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.FormSubmission || mongoose.model('FormSubmission', formSubmissionSchema);
