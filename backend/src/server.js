import express, { json } from 'express'
import { env } from './configs/environment'
import { APIs_v1 } from './routes/v1'
import cors from 'cors'

const app = express()

//Xử lý cors
app.use(cors())

//Cho phép req.body json data
app.use(json())

//Sử dụng APIs_v1
app.use('/v1', APIs_v1)

app.listen(env.PORT, env.HOST, () => {
  console.log(`I am running at ${env.HOST}:${env.PORT}/`)
})