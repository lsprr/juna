import classes from './SkillsLevel.module.css';

export default function SkillLevel(props) {
    return props.skills.map((skill) => (
        <div className={classes['skill-entry']} key={skill.name}>
            <div className={classes["skill-icon"]}>
                <img src={skill.image} alt={skill.image} />
                <div className={classes["skill-input-container"]}>
                    <input id={skill.name} className={classes["skill-input"]} type="text" defaultValue="??" />
                    <div className={classes["skill-divider"]} />
                    <div className={classes["skill-max-level"]}>99</div>
                </div>
            </div>
        </div>
    ))
}
