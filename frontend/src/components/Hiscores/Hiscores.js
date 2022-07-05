import SearchByName from './SearchByName/SearchByName';
import Skills from './Skills/Skills';
import TotalLevel from './TotalLevel/TotalLevel';
import classes from './Hiscores.module.css';

const Hiscores = ({ stats, getPlayerUsername }) => {
    return (
        <div className={classes.hiscores}>
            <div className={classes["hiscores-container"]}>
                <div className={classes['hiscores-player-container']}>
                    <SearchByName getPlayerUsername={getPlayerUsername} />
                    <Skills stats={stats} />
                    <TotalLevel stats={stats} />
                </div>
            </div>
        </div>
    )
}

export default Hiscores;