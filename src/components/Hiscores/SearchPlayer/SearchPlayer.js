import classes from './SearchPlayer.module.css';

export default function SearchPlayer() {
    return (
        <div className={classes["search-player"]}>
            <input className={classes["search-player-input"]} placeholder="Username" type="text"></input>
            <button className={classes["search-player-button"]}>Lookup</button>
        </div>
    )
}
