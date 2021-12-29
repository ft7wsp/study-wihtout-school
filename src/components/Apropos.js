import classes from './Apropos.module.css'
import logo from './logo.png'

function Apropos() {
    return (
        <div className={classes.container}>


            <div className={classes.img}>

                <img src={logo} alt="logo" />
            </div>
            <div className={classes.text}>
                <h1 className={classes.title}>es-repos</h1>
                <p className={classes.p}>c'est une plateforme simple qui vise à aider les étudiants ESPRIT à réviser en leur fournissant les cours et les TD, nous espérons qu'à l'avenir nous pourrons fournir des examens ainsi que leurs corrections, et cela ne sera possible qu'avec votre aide...

                    afin de rendre ce projet complet et possible, nous avons besoin de votre aide pour récupérer les cours manquants ainsi que les examens et leurs corrections, si vous souhaitez aider, veuillez nous envoyer un email à esprit.cours1@gmail.com</p>
            </div>

        </div>
    )
}

export default Apropos