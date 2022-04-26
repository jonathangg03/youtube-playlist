import { createRoot } from 'react-dom/client'
import App from './components/App'
import { SearchContextProvider } from './Context/searchContext'
import './styles.css'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <SearchContextProvider>
    <App />
  </SearchContextProvider>
)
