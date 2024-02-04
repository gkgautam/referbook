import mongoose from 'mongoose';

const resumeFormSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    }
},{ timestamps: true });
mongoose.models = {};
const ResumeForm = mongoose.model('resumeForm', resumeFormSchema);
export default ResumeForm;
