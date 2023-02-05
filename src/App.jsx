import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import ContentMain from "./components/ContentMain";
import BottomNewsList from "./components/BottomNewsList";
function App() {
	return (
		<div className="App">
			<Container fluid="lg">
				<Navbar />
				<ContentMain />
				<BottomNewsList />
			</Container>
		</div>
	);
}

export default App;
