import { useState, useEffect, useCallback } from 'react';
import Skills from './Skills';
import Hiscores from './components/Hiscores/Hiscores';
import Quests from './components/Quests/Quests';
import './App.module.css';

const merge = (...args) => {
    let target = {};
    const merger = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    target[prop] = merge(target[prop], obj[prop]);
                } else {
                    target[prop] = obj[prop];
                }
            }
        }
    };
    for (let i = 0; i < args.length; i++) {
        merger(args[i]);
    }
    return target;
};

const App = () => {
    const [username, setUsername] = useState('');
    const [stats, setStats] = useState(Skills);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOSRSStats = useCallback(async () => {

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8080/stats/${username}`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            const newData = merge(data.skills, Skills);
            setStats(newData);
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);

    }, [username]);

    useEffect(() => {
        if (username) {
            fetchOSRSStats();
        }
    }, [username, fetchOSRSStats]);

    console.log(isLoading);

    return (
        <>
            <main>
                <section>
                    <aside>
                        <Hiscores stats={stats} getPlayerUsername={setUsername} />
                    </aside>
                </section>
            </main>
        </>
    );
}

export default App;
