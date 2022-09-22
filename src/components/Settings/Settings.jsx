import classes from './Settings.module.css'


const Settings = (props) => {
    return(
        <div className={classes.item}>
            <h2>Settings</h2>
            <a>security</a>
            <a>privecy</a>
            <a>support</a>
        </div>
    )
}

export default Settings