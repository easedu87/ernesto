const ewelink = require('ewelink-api');

export async function getServerSideProps() {
    const connection = new ewelink({
        email: 'edu.arruda.souza@gmail.com',
        password: 'cz11m8fu',
        region: 'us',
    });

    // const devices = await connection.getDevices();
    const status = await connection.setDevicePowerState('1000e4bff4', 'toggle');
    
    return {
        props: {
            devices: status
        }
    }
}

function Home(props) {

    // console.log("*************", props);

    const registerUser = event => {
        event.preventDefault();

        console.log(event.target.name.value);
        console.log(event.target.cpf.value);
        console.log(event.target.tel.value);
    }

    return (
        <form onSubmit={registerUser}>
            <label htmlFor="name">Nome completo*</label>
            <input id="name" type="text" autoComplete="name" required />

            <label htmlFor="name">CPF*</label>
            <input id="cpf" type="number" autoComplete="cpf" required />

            <label htmlFor="name">Celular*</label>
            <input id="tel" type="number" autoComplete="tel" required />

            <button type="submit">Register</button>
        </form>
    )
}

export default Home