import 'reflect-metadata'
import app from './app'
import config from './config'

const PORT = config.SERVER.PORT || 3421

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
