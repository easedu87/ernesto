import globalStyles from '../styles/global.js'
import styles from '../styles.module.css'

function Home(props) {

    const registerUser = event => {
        event.preventDefault();

        console.log(event.target.name.value);
        console.log(event.target.cpf.value);
        console.log(event.target.tel.value);
    }

    return (
        <div className={styles.container}>
            <style jsx global>
                {globalStyles}
            </style>
            <div className={styles.content}>
                <p>
                    ERNESTO
                </p>
                <h1>
                    * O HONESTO *
                </h1>
                <form onSubmit={registerUser}>
                    <label htmlFor="name">Nome completo*</label>
                    <input id="name" type="text" autoComplete="name" required />

                    <label htmlFor="name">CPF*</label>
                    <input id="cpf" type="number" autoComplete="cpf" required />

                    <label htmlFor="name">Celular*</label>
                    <input id="tel" type="number" autoComplete="tel" required />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Home