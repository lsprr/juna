import { useState, useEffect, useCallback } from 'react';
import Skills from './Skills';
import Player from './components/Player/Player';
import Hiscores from './components/Hiscores/Hiscores';
import Quests from './components/Quests/Quests';
import './App.module.css';

const App = () => {
    const [username, setUsername] = useState('');
    const [stats, setStats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOSRSStats = useCallback(async () => {

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8080/stats/`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setStats(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchOSRSStats();
    }, [fetchOSRSStats]);

    console.log(stats);

    return (
        <>
            <header>
                <Player />
            </header>
            <main>
                <section>
                    <Hiscores skills={Skills} stats={stats} />
                </section>
            </main>
        </>
    );
}

export default App;
