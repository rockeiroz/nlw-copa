function newGermany(date, day, games) {
    return `
    <div id="dias" class="proximo">
        <h2>${date} <span>${day}</span></h2>
        ${games}
    </div>
    `
}

function germanyGame(player1, hour, player2) {
    return `
    <li>
        <img src="imagens/Bandeiras dos países/icon=${player1}.svg" alt="${player1}">
        <strong>${hour}</strong>
        <img src="imagens/Bandeiras dos países/icon=${player2}.svg" alt="${player2}">
    </li>
    `
}

function newBrazil(date, day, games) {
    return `
    <div id="dias" class="proximo">
        <h2>${date} <span>${day}</span></h2>
        ${games}
    </div>
    `
}

function brazilGame(player1, hour, player2) {
    return `
    <li>
        <img src="imagens/Bandeiras dos países/icon=${player1}.svg" alt="${player1}">
        <strong>${hour}</strong>
        <img src="imagens/Bandeiras dos países/icon=${player2}.svg" alt="${player2}">
    </li>
    `
}

document.querySelector("#app").innerHTML = `
<header>
    <img src="./assets/logo.svg" alt="logo da NLW">
</header>

<main id="datas">
    <div id="germany" class="selecao">
        <ul>
            <h1>Alemanha</h1>
            <div id="dias">
                <h2>23/11 <span>quarta</span></h2>
                ${germanyGame("germany", "10:00", "japan")}
            </div>
            ${newGermany("27/11", "domingo", germanyGame('spain', '16:00', 'germany'))}
            ${newGermany("01/12", "quinta", germanyGame('costa rica', '16:00', 'germany'))}
        </ul>
    </div>

    <div id="brazil" class="selecao">
        <ul>
            <h1>Brasil</h1>
            <div id="dias">
                <h2>24/11 <span>quinta</span></h2>
                ${brazilGame('brazil', '16:00', 'serbia')}
            </div>
            ${newBrazil("28/11", "segunda", brazilGame('brazil', '13:00', 'switzerland'))}
            ${newBrazil("02/12", "sexta", brazilGame('cameroon', '16:00', 'brazil'))}
        </ul>
    </div>
</main>
`