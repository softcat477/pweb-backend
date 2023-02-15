require("dotenv").config()

PORT = process.env.PORT
MONGODB_URL = process.env.MONGODB_URL

SECRET = process.env.SECRET

module.exports = {PORT, MONGODB_URL, SECRET}