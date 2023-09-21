import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header/Header'
import { Characters } from './pages/Characters'
import { Footer } from './components/Footer/Footer'
import { FullCharacter } from './pages/FullCharacter'

function App() {

	return (
		<div className='wrapper transition-all'>
			<Header />
			<div className='main'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={< Characters />} />
					<Route path="/fullcharacter/:id" element={< FullCharacter />} />
				</Routes>
			</div>
			<Footer />
		</div>

	)
}

export default App
