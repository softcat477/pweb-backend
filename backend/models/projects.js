const mongoose = require('mongoose');
const config = require('../utils/config');

// PORT = config.PORT
// DB_URL = config.MONGODB_URL

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  bullets: {
    type: [String],
    required: true,
  },
  skills: {
    type: [{icon: String, link: String, text: String}],
    required: false
  },
  order: {
    type: Number,
    required: true
  }
});

projectSchema.set("toJSON", {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
  }
});

(async () => {
    try {
        await mongoose.connect(await config.DB_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Failed to connect to DB:", error);
    }
})();

const Project = mongoose.model("Project", projectSchema);

module.exports = Project
