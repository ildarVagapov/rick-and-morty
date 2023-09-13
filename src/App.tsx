import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header/Header'
import { Characters } from './pages/Characters'
import { Footer } from './components/Footer/Footer'

function App() {

	return (
		<div className='wrapper'>
			<Header />
			<div className='main'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={< Characters />} />
				</Routes>
			</div>
			<Footer />
		</div>

	)
}

export default App
