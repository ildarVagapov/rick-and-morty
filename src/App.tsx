import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Header } from './components/Header/Header'
import { CharactersPage } from './pages/CharactersPage'
import { Footer } from './components/Footer/Footer'
import { FullCharacterPage } from './pages/FullCharacterPage'
import { LocationPage } from './pages/LocationPage'
import { EpisodePage } from './pages/EpisodePage'
import { Navigation } from './components/Navigation/Navigation'

function App() {

	return (
		<div className='wrapper transition-all'>
			<Header />
			<Navigation />
			<div className='main'>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/characters" element={< CharactersPage />} />
					<Route path="/fullcharacter/:id" element={< FullCharacterPage />} />
					<Route path="/location" element={< LocationPage />} />
					<Route path="/episode" element={< EpisodePage />} />
				</Routes>
			</div>
			<Footer />
		</div>

	)
}

export default App
