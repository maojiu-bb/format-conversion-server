import express from 'express'

const app = express()

app.listen('3006', () => {
  console.log('express serve running at http://localhost:3006')
})
