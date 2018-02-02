var history = require('../../bots/history/locale/en/historyBot');
var feedback = require('../../bots/feedback/locale/en/feedbackBot');

module.exports = [
  {
    in: "Please choose a language \n\n Por favor, elige un idioma",
    out: "English"
  },
  {
    in: "Language change was successfull",
  },
  {
    in: "What bot do you want?",
    out: "history"
  },
  { 
    in: history["history-welcome"], 
    out: "go feedback" 
  },
  {
    in: feedback["feedback-welcome"]
  }
];