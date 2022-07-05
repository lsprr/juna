import { useState, useRef } from 'react';
import classes from './SearchByName.module.css';

const SearchByName = ({ getPlayerUsername }) => {
    const [error, setError] = useState(null);
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
        } else {
            setError(null);
        }

        getPlayerUsername(value)
    }

    return (
        <>
            {error && <p>{error.message}</p>}
            <form className={classes["search-by-name"]} onSubmit={submitHandler}>
                <input className={classes["search-by-name-input"]} placeholder="Username" type="text" ref={usernameRef}></input>
                <button className={classes["search-by-name-button"]}>Lookup</button>
            </form>
        </>
    )
}

export default SearchByName;