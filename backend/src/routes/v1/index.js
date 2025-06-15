import express from 'express'

const Router = express.Router()

Router.get('/', (req, res) => {
  res.status(200).json({
    message: 'APIs v1 are already to use.'
  })
})

export const APIs_v1 = Router