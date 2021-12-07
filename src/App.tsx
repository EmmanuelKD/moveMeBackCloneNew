import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Routes/Routs';
import "./index.css"

function App() {
  return (
    <BrowserRouter >
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
