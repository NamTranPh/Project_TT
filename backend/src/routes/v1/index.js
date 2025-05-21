import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'APIs v1 are already to use.'
  })
})

export const APIs_v1 = Router