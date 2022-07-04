import { useState, useRef } from 'react';
import classes from './SearchPlayer.module.css';

const SearchPlayer = () => {
    const [error, setError] = useState(false);
    const usernameRef = useRef('');

    const submitHandler = (event) => {
        const value = usernameRef.current.value;
        event.preventDefault();

        if (value.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid username.'
            })
            return;
        }

        console.log(value);
    }

    return (
        <form className={classes["search-player"]} onSubmit={submitHandler}>
            <input className={classes["search-player-input"]} placeholder="Username" type="text" ref={usernameRef}></input>
            <button className={classes["search-player-button"]}>Lookup</button>
        </form>
    )
}

export default SearchPlayer;