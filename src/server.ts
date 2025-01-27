import express from "express"
import filmsRoutes from "./routes/filmRoutes"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello!')
  })

  app.use(express.json())

  app.use('/api/',filmsRoutes)

  app.listen(port, () => {
    console.log(`Running on ${port}`)
  })