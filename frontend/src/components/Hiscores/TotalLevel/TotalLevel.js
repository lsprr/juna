import classes from './TotalLevel.module.css';

const TotalLevel = ({ stats }) => {
    return Object.entries(stats)
        .filter(([key]) => key === 'overall')
        .map(([key, value]) => {
            return (
                <div className={classes["total-level"]} key={key}>
                    <div>Total Level:</div>
                    <div>{value.level}</div>
                </div>
            )
        })
}

export default TotalLevel;