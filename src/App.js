import Skills from './Skills';
import Player from './components/Player/Player';
import Hiscores from './components/Hiscores/Hiscores';
import Quests from './components/Quests/Quests';
import './App.module.css';

function App() {
    return (
        <>
            <header>
                <Player />
            </header>
            <main>
                <section>
                    <Hiscores skills={Skills} />
                </section>
            </main>
        </>
    );
}

export default App;
