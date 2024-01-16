document.addEventListener('DOMContentLoaded', () => {
    const bord = document.getElementById('spelbord');
    const kolommen = 7, rijen = 6;
    let huidigeSpeler = 'rood'; // Rood begint

    const maakBord = () => {
        for (let rij = 0; rij < rijen; rij++) {
            for (let kolom = 0; kolom < kolommen; kolom++) {
                const cel = document.createElement('div');
                cel.classList.add('cel');
                cel.dataset.kolom = kolom;
                cel.dataset.rij = rij;
                cel.addEventListener('click', doeZet);
                bord.appendChild(cel);
            }
        }
    };

    const doeZet = (e) => {
        const kolom = e.target.dataset.kolom;
        plaatsSchijf(kolom);
        // Toevoegen: Controleer winnaar en wissel speler
    };

    const plaatsSchijf = (kolom) => {
        const vrijeCellen = [...document.querySelectorAll(\`.cel[data-kolom='${kolom}']:not(.rood):not(.geel)\`)];
        const ondersteCel = vrijeCellen[vrijeCellen.length - 1];
        if (ondersteCel) {
            ondersteCel.classList.add(huidigeSpeler);
            wisselSpeler();
        }
    };

    const wisselSpeler = () => {
        huidigeSpeler = huidigeSpeler === 'rood' ? 'geel' : 'rood';
    };

    maakBord();
});