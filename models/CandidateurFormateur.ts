import { Schema, model, models } from 'mongoose';

const CandidateurFormateurSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required.'],
  },
  secondName: {
    type: String,
    required: [true, 'second name is Required.'],
  },
  email: {
    type: String,
    required: [true, 'email is required.'],
  },
  phone: {
    type: String,
    required: [true, 'phone is required.'],
  },
  level: {
    type: [String],
    required: [true, 'level is required.'],
  },
  subject: {
    type: String,
    required: [true, 'subject is required'],
  },
  state: {
    type: String,
    required: [true, 'state is required'],
  },
  cv: {
    type: String,
    required: [true, 'cv is required'],
  },
  photo: {
    type: String,
  }
}, {
    timestamps: true
});

const CandidateurFormateur = models.CandidateurFormateur || model('CandidateurFormateur', CandidateurFormateurSchema);

export default CandidateurFormateur;