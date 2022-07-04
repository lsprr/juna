import SearchPlayer from './SearchPlayer/SearchPlayer';
import SkillLevel from './SkillLevel/SkillLevel';
import TotalLevel from './TotalLevel/TotalLevel';
import classes from './Hiscores.module.css';

const Hiscores = ({ skills, stats }) => {
    return (
        <div className={classes.hiscores}>
            <div className={classes["hiscores-container"]}>
                <div className={classes['skills-container']}>
                    <SearchPlayer />
                    <SkillLevel skills={skills} stats={stats} />
                    <TotalLevel stats={stats} />
                </div>
            </div>
        </div>
    )
}

export default Hiscores;