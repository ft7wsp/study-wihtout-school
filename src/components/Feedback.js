import classes from './Feedback.module.css'

function Feedback(props) {


    return (


        <div>

            <form action="https://formsubmit.co/tliliradhi8@gmail.com" method="POST">
                <input name="name" type="text" className={classes.feedbackInput} placeholder="Name" />
                <input name="email" type="text" className={classes.feedbackInput} placeholder="Email" />
                <textarea name="text" className={classes.feedbackInput} placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>


        </div>
    )
}





export default Feedback