import express, { json } from 'express'
import config from './config/environment'
import { APIs_v1 } from './routes/v1'
import cors from 'cors'
import connectDB from './config/database'
import env from './config/environment'

const app = express()

//Xử lý cors
app.use(cors())

//Cho phép req.body json data
app.use(express.json())

//Sử dụng APIs_v1
app.use('/v1', APIs_v1)

connectDB();

app.listen(env.PORT, () => {
  console.log(`I am running at ${env.PORT}`)
})