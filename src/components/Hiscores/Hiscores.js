import SearchPlayer from './SearchPlayer/SearchPlayer';
import SkillLevel from './SkillLevel/SkillLevel';
import TotalLevel from './TotalLevel/TotalLevel';
import classes from './Hiscores.module.css';

export default function Hiscores(props) {
    return (
        <div className={classes.hiscores}>
            <div className={classes["hiscores-container"]}>
                <div className={classes['skills-container']}>
                    <SearchPlayer />
                    <SkillLevel skills={props.skills} />
                    <TotalLevel />
                </div>
            </div>
        </div>
    )
}
