import css from 'styled-jsx/css'

export default css.global`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    min-height: 100%;
}

body {
    background: #000;
    background-size: cover;
    -webkit-font-smoothing: antialiased im !important;
}

body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
}
`