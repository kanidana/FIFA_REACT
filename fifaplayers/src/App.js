// importation du composant player et du fichier app.css
import PlayersList from './components/PlayersList';
import './App.css';

// declaration de la fonction app avec l'appel du composant playerslist
function App() {
  return (
    <div className='App'>
        <PlayersList />
    </div>
  )
}

// importation du composant racine app
export default App;
