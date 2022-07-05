import classes from './Skills.module.css';

const Skills = ({ stats }) => {
    return Object.entries(stats)
        .sort()
        .filter(([key]) => key !== 'overall')
        .map(([key, value]) => {
            return (
                <div className={classes['skill']} key={key} id={key}>
                    <div className={classes["skill-icon"]}>
                        <img src={value.image} alt={value.image} />
                        <div className={classes["skill-input-container"]}>
                            <input id={key} className={classes["skill-current-level"]} type="text" defaultValue={value.level} />
                            <div className={classes["skill-slash"]} />
                            <div className={classes["skill-max-level"]}>{value.level}</div>
                        </div>
                    </div>
                </div>
            )
        })
}

export default Skills;