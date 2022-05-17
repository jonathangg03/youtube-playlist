import { createRoot } from 'react-dom/client'
import App from './components/App'
import { VideosContextProvider } from './Context/videosContext'
import './styles.css'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <VideosContextProvider>
    <App />
  </VideosContextProvider>
)
