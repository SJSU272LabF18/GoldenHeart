require('dotenv').config() // !IMPORTANT requires .env file

module.exports = {
  port: process.env.PORT,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  secret: process.env.APP_SECRET,
  mongo: {
    uri: process.env.MONGOURI
  },
  awsaccess: {
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    region: process.env.REGION
  },
  bucket: process.env.BUCKET
}
