import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return(
        <div className={classes.sidebar}>
            <h1 className={classes.title}>{props.title}</h1>

            <div className={classes.content}>
                <h2 className={classes.subtitle}>{props.subtitle}</h2>
                {props.content.map( (item, index) => {
                    return (
                        <div key={index} className={classes.itemContainer}>
                            <span className="material-icons-outlined">{item.icon}</span>
                            <p className={classes.item}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar;