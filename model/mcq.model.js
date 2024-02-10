const mongoose = require('mongoose');


const mcqSchema = new mongoose.Schema({
  question: {
    type: String,
   
  },
  options: [
    {
      optionText: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        default: false,
      },
    },
  ],
});


const MCQ = mongoose.model('MCQ', mcqSchema);


module.exports = {MCQ};
