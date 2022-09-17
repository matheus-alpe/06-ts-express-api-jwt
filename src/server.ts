import app from './app'
import config from './config'

const PORT = config.SERVER.PORT || 3421

export default function () {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}
