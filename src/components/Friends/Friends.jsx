import classes from './Friends.module.css'


const Friends = (props) => {

    
    return(
        <div className={classes.item}>
            <ul className={classes.friendsList}>
                <li className={classes.items}>
                    <img src="https://www.telegraph.co.uk/content/dam/news/2018/04/17/TELEMMGLPICT000160652001_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg" alt="" />
                    {props.name}
                </li>
                <li className={classes.items}>
                    <img src="https://www.daniosorio.com/wp-content/uploads/2018/10/portrait-faces-and-photography-french-woman-cover.jpg" alt="" />
                    {props.name}
                </li>
                <li className={classes.items}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIjt1729YRBsVKe30AwJ2rHv4nWJBrUxxsQ&usqp=CAU" alt="" />
                    {props.name}
                </li>
            </ul>
        </div>
    )
}

export default Friends