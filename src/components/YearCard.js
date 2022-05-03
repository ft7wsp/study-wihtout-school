import { useParams } from 'react-router-dom'
import test from './Quran.pdf'
import classes from './YearCard.module.css'


function YearCard(props) {

    const { id } = useParams();


    const subjectsTitles = (id) => {
        switch (id) {
            case '1er':
                // return ['Anatomie',
                //     'Physiologie',
                //     'Physiologie de sang',
                //     'Génétique',
                //     'Histologie',
                //     'Cytologie',
                //     'Psychologie',
                //     'Soins dans la communauté ',
                //     ' Techniques de communication',
                //     'Idi',
                //     ' Droit de patient',
                //     '  Microbiologie',
                //     ' Informatique',
                //     ' Biochimie ',
                //     '  Éthique ',
                //     '  Démarche de soins ',
                //     '  Techniques infirmières',
                //     'Ergonomie ',
                //     ' Anglais']

                return ['diagnostic', 'physiology', 'psychology']
            case '2eme':
                // return [' Mathematiue de base 3', 'Reseaux de communication', ' Mathematiue de base 4', 'Base de donnees', 'System & Scripting', 'Fondements des Resaux', 'Arichitecture des microcontroleaurs', 'Project WEB', 'C++']
            case '3eme':
                // return ['Finance', 'Environnement entreprise', 'UML', 'Java', 'IP essentials', 'Switched Net', 'Analyse numeriue', 'Calcul scientifique', 'UNIX', 'Francais', 'Genie loiciel', 'Routing', 'SGBD', 'Symfony', "Techniues de'estimatin port l'ingenieur", 'Theorie des languages et Complilation', 'Programmation des Terminaus Mobiles']
            default:
                return ['no subjects found']
        }
    }
    console.log(subjectsTitles('1er'));

    return (
        <div>
            <div className={classes.userRoute}>
                Home {id}
            </div>
            <main className={classes.main}>
                <h2>Matiere:</h2>
                <div className={classes.title}>
                    <div className={classes.subjects}>
                        {subjectsTitles(id).map(sub =>
                            <a href={require(`./${id}/${sub}.pdf`) ? require(`./${id}/${sub}.pdf`) : require(`./Quran.pdf`)} target='_blank'>  <div className={classes.subject} key={sub + Math.random()}>{sub}</div> </a>
                        )}
                    </div>
                </div>
            </main>

        </div>
    )
}



export default YearCard
