// prettier-ignore

document.addEventListener("DOMContentLoaded", function() {
    const teams = {};
    const fixturesDiv = document.getElementById("fixtures");
    const pointsTable = document.getElementById("pointsTable").getElementsByTagName("tbody")[0];

    const teamNames = [
        'APOEL FC (CYP)',
        'FC Astana (KAZ)',
        'Istanbul Basaksehir FK (TUR)',
        'FK Borac (BIH)',
        'NK Celje (SVN)',
        'Cercle Brugge KSV (BEL)',
        'Chelsea FC (ENG)',
        'FC Copenhagen (DEN)',
        'FC Dinamo-Minsk (BLR)',
        'Djurgarden (SWE)',
        'ACF Fiorentina (ITA)',
        'KAA Gent (BEL)',
        'Heart of Midlothian FC (SCO)',
        'FC Heidenheim (GER)',
        'HJK Helsinki (FIN)',
        'Jagiellonia Bialystok (POL)',
        'Larne FC (NIR)',
        'LASK (AUT)',
        'Legia Warszawa (POL)',
        'FC Lugano (SUI)',
        'FK Mlada Boleslav (CZE)',
        'Molde FK (NOR)',
        'FC Noah (ARM)',
        'NK Olimpija Ljubljana (SVN)',
        'Omonoia FC (CYP)',
        'Pafos FC (CYP)',
        'Panathinaikos FC (GRE)',
        'FC Petrocub (MDA)',
        'Real Betis Balompie (ESP)',
        'Shamrock Rovers FC (IRL)',
        'SK Rapid (AUT)',
        'FC St. Gallen (SUI)',
        'The New Saints FC (WAL)',
        'FK TSC (SRB)',
        'Vikingur Reykjavik (ISL)',
        'Vitoria SC (POR)'
    ];
    
      

    teamNames.forEach(team => {
        teams[team] = {
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            awayGoals: 0,
            awayWins: 0,
            points: 0
        };
    });

    const fixtures = [
        // Matchday 1 - Wednesday 2 October 2024
        { matchday: 1, date: "2024-10-02", team1: "Istanbul Basaksehir FK (TUR)", team2: "SK Rapid (AUT)", score1: 1, score2: 2 },
        { matchday: 1, date: "2024-10-02", team1: "Vitoria SC (POR)", team2: "NK Celje (SVN)", score1: 3, score2: 1 },
        // Matchday 1 - Thursday 3 October 2024
        { matchday: 1, date: "2024-10-03", team1: "Molde FK (NOR)", team2: "Larne FC (NIR)", score1: 3, score2: 0 },
        { matchday: 1, date: "2024-10-03", team1: "Legia Warszawa (POL)", team2: "Real Betis Balompie (ESP)", score1: 1, score2: 0 },
        { matchday: 1, date: "2024-10-03", team1: "FC Heidenheim (GER)", team2: "NK Olimpija Ljubljana (SVN)", score1: 2, score2: 1 },
        { matchday: 1, date: "2024-10-03", team1: "Omonoia FC (CYP)", team2: "Vikingur Reykjavik (ISL)", score1: 4, score2: 0 },
        { matchday: 1, date: "2024-10-03", team1: "FC Astana (KAZ)", team2: "FK TSC (SRB)", score1: 1, score2: 0 },
        { matchday: 1, date: "2024-10-03", team1: "Cercle Brugge KSV (BEL)", team2: "FC St. Gallen (SUI)", score1: 6, score2: 2 },
        { matchday: 1, date: "2024-10-03", team1: "FC Dinamo-Minsk (BLR)", team2: "Heart of Midlothian FC (SCO)", score1: 1, score2: 2 },
        { matchday: 1, date: "2024-10-03", team1: "FC Noah (ARM)", team2: "FK Mlada Boleslav (CZE)", score1: 2, score2: 0 },
        { matchday: 1, date: "2024-10-03", team1: "Chelsea FC (ENG)", team2: "KAA Gent (BEL)", score1: 4, score2: 2 },
        { matchday: 1, date: "2024-10-03", team1: "FC Copenhagen (DEN)", team2: "Jagiellonia Bialystok (POL)", score1: 1, score2: 2 },
        { matchday: 1, date: "2024-10-03", team1: "ACF Fiorentina (ITA)", team2: "The New Saints FC (WAL)", score1: 2, score2: 0 },
        { matchday: 1, date: "2024-10-03", team1: "LASK (AUT)", team2: "Djurgarden (SWE)", score1: 2, score2: 2 },
        { matchday: 1, date: "2024-10-03", team1: "Shamrock Rovers FC (IRL)", team2: "APOEL FC (CYP)", score1: 1, score2: 1 },
        { matchday: 1, date: "2024-10-03", team1: "FC Lugano (SUI)", team2: "HJK Helsinki (FIN)", score1: 3, score2: 0 },
        { matchday: 1, date: "2024-10-03", team1: "FC Petrocub (MDA)", team2: "Pafos FC (CYP)", score1: 1, score2: 4 },
        { matchday: 1, date: "2024-10-03", team1: "FK Borac (BIH)", team2: "Panathinaikos FC (GRE)", score1: 1, score2: 1 },

        // Matchday 2 - Thursday 24 October 2024
        { matchday: 2, date: "2024-10-24", team1: "Vikingur Reykjavik (ISL)", team2: "Cercle Brugge KSV (BEL)", score1: 3, score2: 1 },
        { matchday: 2, date: "2024-10-24", team1: "KAA Gent (BEL)", team2: "Molde FK (NOR)", score1: 2, score2: 1 },
        { matchday: 2, date: "2024-10-24", team1: "Djurgarden (SWE)", team2: "Vitoria SC (POR)", score1: 1, score2: 2 },
        { matchday: 2, date: "2024-10-24", team1: "APOEL FC (CYP)", team2: "FK Borac (BIH)", score1: 0, score2: 1 },
        { matchday: 2, date: "2024-10-24", team1: "SK Rapid (AUT)", team2: "FC Noah (ARM)", score1: 1, score2: 0 },
        { matchday: 2, date: "2024-10-24", team1: "Heart of Midlothian FC (SCO)", team2: "Omonoia FC (CYP)", score1: 2, score2: 0 },
        { matchday: 2, date: "2024-10-24", team1: "FC St. Gallen (SUI)", team2: "ACF Fiorentina (ITA)", score1: 2, score2: 4 },
        { matchday: 2, date: "2024-10-24", team1: "Panathinaikos FC (GRE)", team2: "Chelsea FC (ENG)", score1: 1, score2: 4 },
        { matchday: 2, date: "2024-10-24", team1: "Jagiellonia Bialystok (POL)", team2: "FC Petrocub (MDA)", score1: 2, score2: 0 },
        { matchday: 2, date: "2024-10-24", team1: "NK Celje (SVN)", team2: "Istanbul Basaksehir FK (TUR)", score1: 5, score2: 1 },
        { matchday: 2, date: "2024-10-24", team1: "Larne FC (NIR)", team2: "Shamrock Rovers FC (IRL)", score1: 1, score2: 4 },
        { matchday: 2, date: "2024-10-24", team1: "Real Betis Balompie (ESP)", team2: "FC Copenhagen (DEN)", score1: 1, score2: 1 },
        { matchday: 2, date: "2024-10-24", team1: "HJK Helsinki (FIN)", team2: "FC Dinamo-Minsk (BLR)", score1: 1, score2: 0 },
        { matchday: 2, date: "2024-10-24", team1: "NK Olimpija Ljubljana (SVN)", team2: "LASK (AUT)", score1: 2, score2: 0 },
        { matchday: 2, date: "2024-10-24", team1: "The New Saints FC (WAL)", team2: "FC Astana (KAZ)", score1: 2, score2: 0 },
        { matchday: 2, date: "2024-10-24", team1: "FK Mlada Boleslav (CZE)", team2: "FC Lugano (SUI)", score1: 0, score2: 1 },
        { matchday: 2, date: "2024-10-24", team1: "FK TSC (SRB)", team2: "Legia Warszawa (POL)", score1: 0, score2: 3 },
        { matchday: 2, date: "2024-10-24", team1: "Pafos FC (CYP)", team2: "FC Heidenheim (GER)", score1: 0, score2: 1 },
    
        // Matchday 3 - Thursday 7 November 2024
        { matchday: 3, date: "2024-11-07", team1: "Vikingur Reykjavik (ISL)", team2: "FK Borac (BIH)", score1: 2, score2: 0 },
        { matchday: 3, date: "2024-11-07", team1: "KAA Gent (BEL)", team2: "Omonoia FC (CYP)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-11-07", team1: "Legia Warszawa (POL)", team2: "FC Dinamo-Minsk (BLR)", score1: 4, score2: 0 },
        { matchday: 3, date: "2024-11-07", team1: "HJK Helsinki (FIN)", team2: "NK Olimpija Ljubljana (SVN)", score1: 0, score2: 2 },
        { matchday: 3, date: "2024-11-07", team1: "Shamrock Rovers FC (IRL)", team2: "The New Saints FC (WAL)", score1: 2, score2: 1 },
        { matchday: 3, date: "2024-11-07", team1: "FC Petrocub (MDA)", team2: "SK Rapid (AUT)", score1: 0, score2: 3 },
        { matchday: 3, date: "2024-11-07", team1: "FK TSC (SRB)", team2: "FC Lugano (SUI)", score1: 4, score2: 1 },
        { matchday: 3, date: "2024-11-07", team1: "Pafos FC (CYP)", team2: "FC Astana (KAZ)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-11-07", team1: "Chelsea FC (ENG)", team2: "FC Noah (ARM)", score1: 8, score2: 0 },
        { matchday: 3, date: "2024-11-07", team1: "FC Copenhagen (DEN)", team2: "Istanbul Basaksehir FK (TUR)", score1: 2, score2: 2 },
        { matchday: 3, date: "2024-11-07", team1: "LASK (AUT)", team2: "Cercle Brugge KSV (BEL)", score1: 0, score2: 0 },
        { matchday: 3, date: "2024-11-07", team1: "Real Betis Balompie (ESP)", team2: "NK Celje (SVN)", score1: 2, score2: 1 },
        { matchday: 3, date: "2024-11-07", team1: "Djurgarden (SWE)", team2: "Panathinaikos FC (GRE)", score1: 2, score2: 1 },
        { matchday: 3, date: "2024-11-07", team1: "APOEL FC (CYP)", team2: "ACF Fiorentina (ITA)", score1: 2, score2: 1 },
        { matchday: 3, date: "2024-11-07", team1: "Vitoria SC (POR)", team2: "FK Mlada Boleslav (CZE)", score1: 2, score2: 1 },
        { matchday: 3, date: "2024-11-07", team1: "Heart of Midlothian FC (SCO)", team2: "FC Heidenheim (GER)", score1: 0, score2: 2 },
        { matchday: 3, date: "2024-11-07", team1: "Jagiellonia Bialystok (POL)", team2: "Molde FK (NOR)", score1: 3, score2: 0 },
        { matchday: 3, date: "2024-11-07", team1: "Larne FC (NIR)", team2: "FC St. Gallen (SUI)", score1: 1, score2: 2 },
  
        // Matchday 4 - Wednesday 27 November 2024
        { matchday: 4, date: "2024-11-27", team1: "Istanbul Basaksehir FK (TUR)", team2: "FC Petrocub (MDA)", score1: 1, score2: 1 },
        // Matchday 4 - Thursday 28 November 2024
        { matchday: 4, date: "2024-11-28", team1: "FC Astana (KAZ)", team2: "Vitoria SC (POR)", score1: 1, score2: 1 },
        { matchday: 4, date: "2024-11-28", team1: "Molde FK (NOR)", team2: "APOEL FC (CYP)", score1: 0, score2: 1 },
        { matchday: 4, date: "2024-11-28", team1: "FC Heidenheim (GER)", team2: "Chelsea FC (ENG)", score1: 0, score2: 2 },
        { matchday: 4, date: "2024-11-28", team1: "Cercle Brugge KSV (BEL)", team2: "Heart of Midlothian FC (SCO)", score1: 2, score2: 0 },
        { matchday: 4, date: "2024-11-28", team1: "The New Saints FC (WAL)", team2: "Djurgarden (SWE)", score1: 0, score2: 1 },
        { matchday: 4, date: "2024-11-28", team1: "FC St. Gallen (SUI)", team2: "FK TSC (SRB)", score1: 2, score2: 2 },
        { matchday: 4, date: "2024-11-28", team1: "Panathinaikos FC (GRE)", team2: "HJK Helsinki (FIN)", score1: 1, score2: 0 },
        { matchday: 4, date: "2024-11-28", team1: "FK Borac (BIH)", team2: "LASK (AUT)", score1: 2, score2: 1 },
        { matchday: 4, date: "2024-11-28", team1: "NK Celje (SVN)", team2: "Jagiellonia Bialystok (POL)", score1: 3, score2: 3 },
        { matchday: 4, date: "2024-11-28", team1: "FC Dinamo-Minsk (BLR)", team2: "FC Copenhagen (DEN)", score1: 1, score2: 2 },
        { matchday: 4, date: "2024-11-28", team1: "FC Noah (ARM)", team2: "Vikingur Reykjavik (ISL)", score1: 0, score2: 0 },
        { matchday: 4, date: "2024-11-28", team1: "ACF Fiorentina (ITA)", team2: "Pafos FC (CYP)", score1: 3, score2: 2 },
        { matchday: 4, date: "2024-11-28", team1: "SK Rapid (AUT)", team2: "Shamrock Rovers FC (IRL)", score1: 1, score2: 1 },
        { matchday: 4, date: "2024-11-28", team1: "Omonoia FC (CYP)", team2: "Legia Warszawa (POL)", score1: 0, score2: 3 },
        { matchday: 4, date: "2024-11-28", team1: "NK Olimpija Ljubljana (SVN)", team2: "Larne FC (NIR)", score1: 1, score2: 0 },
        { matchday: 4, date: "2024-11-28", team1: "FC Lugano (SUI)", team2: "KAA Gent (BEL)", score1: 2, score2: 0 },
        { matchday: 4, date: "2024-11-28", team1: "FK Mlada Boleslav (CZE)", team2: "Real Betis Balompie (ESP)", score1: 2, score2: 1 },

        // Matchday 5 - Thursday 12 December 2024
        { matchday: 5, date: "2024-12-12", team1: "Vikingur Reykjavik (ISL)", team2: "Djurgarden (SWE)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "FC Astana (KAZ)", team2: "Chelsea FC (ENG)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "FC Copenhagen (DEN)", team2: "Heart of Midlothian FC (SCO)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "ACF Fiorentina (ITA)", team2: "LASK (AUT)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "Istanbul Basaksehir FK (TUR)", team2: "FC Heidenheim(GER)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "Legia Warszawa (POL)", team2: "FC Lugano (SUI)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "HJK Helsinki (FIN)", team2: "Molde FK (NOR)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "NK Olimpija Ljubljana (SVN)", team2: "Cercle Brugge KSV (BEL)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "FC Petrocub (MDA)", team2: "Real Betis Balompie (ESP)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "FC Dinamo-Minsk (BLR)", team2: "Larne FC (NIR)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "FC Noah (ARM)", team2: "APOEL FC (CYP)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "KAA Gent (BEL)", team2: "FK TSC (SRB)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "Omonoia FC (CYP)", team2: "SK Rapid (AUT)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "Shamrock Rovers FC (IRL)", team2: "FK Borac (BIH)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "The New Saints FC (WAL)", team2: "Panathinaikos FC (GRE)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "FK Mlada Boleslav (CZE)", team2: "Jagiellonia Bialystok (POL)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "FC St. Gallen (SUI)", team2: "Vitoria SC (POR)", score1: null, score2: null },
        { matchday: 5, date: "2024-12-12", team1: "Pafos FC (CYP)", team2: "NK Celje (SVN)", score1: null, score2: null },
  
        // Matchday 6 - Thursday 19 December 2024
        { matchday: 6, date: "2024-12-19", team1: "Chelsea FC (ENG)", team2: "Shamrock Rovers FC (IRL)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "LASK (AUT)", team2: "Vikingur Reykjavik (ISL)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Real Betis Balompie (ESP)", team2: "HJK Helsinki (FIN)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Molde FK (NOR)", team2: "FK Mlada Boleslav (CZE)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "FC Heidenheim (GER)", team2: "FC St. Gallen (SUI)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Djurgarden (SWE)", team2: "Legia Warszawa (POL)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "APOEL FC (CYP)", team2: "FC Astana (KAZ)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "SK Rapid (AUT)", team2: "FC Copenhagen (DEN)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Vitoria SC (POR)", team2: "ACF Fiorentina (ITA)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Cercle Brugge KSV (BEL)", team2: "Istanbul Basaksehir FK (TUR)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "FC Lugano (SUI)", team2: "Pafos FC (CYP)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Heart of Midlothian FC (SCO)", team2: "FC Petrocub (MDA)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Panathinaikos FC (GRE)", team2: "FC Dinamo-Minsk (BLR)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "FK TSC (SRB)", team2: "FC Noah (ARM)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "FK Borac (BIH)", team2: "Omonoia FC (CYP)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Jagiellonia Bialystok (POL)", team2: "NK Olimpija Ljubljana (SVN)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "NK Celje (SVN)", team2: "The New Saints FC (WAL)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-19", team1: "Larne FC (NIR)", team2: "KAA Gent (BEL)", score1: null, score2: null },
    ];  

    const matchdays = {};

    fixtures.forEach(fixture => {
        if (!matchdays[fixture.matchday]) {
            matchdays[fixture.matchday] = [];
        }
        matchdays[fixture.matchday].push(fixture);
    });

    Object.keys(matchdays).forEach(matchday => {
        const dayDiv = document.createElement("div");
        dayDiv.className = "matchday";
        const button = document.createElement("button");
        button.innerText = `Matchday ${matchday}`;
        button.className = 'matchday-button';

        const fixtureContainer = document.createElement("div");
        fixtureContainer.style.display = 'none';

        button.addEventListener("click", function() {
            fixtureContainer.style.display = fixtureContainer.style.display === 'none' ? 'block' : 'none';
        });

        dayDiv.appendChild(button);

        matchdays[matchday].forEach(fixture => {
            createFixture(fixture.team1, fixture.team2, fixture.date, fixture.score1, fixture.score2, fixtureContainer);
        });

        dayDiv.appendChild(fixtureContainer);
        fixturesDiv.appendChild(dayDiv);
    });

    function createFixture(team1, team2, date, score1, score2, parentDiv) {
        const fixture = document.createElement("div");
        fixture.className = "fixture fade-in";  // Added fade-in class
    
        fixture.innerHTML = `
            <div class="fixture-date">${date}</div>
            <div class="team-name">${team1}</div>
            <div class="score-inputs">
                <input type="number" min="0" class="team1-score" data-team="${team1}" value="${score1 !== null ? score1 : ''}">
                -
                <input type="number" min="0" class="team2-score" data-team="${team2}" value="${score2 !== null ? score2 : ''}">
            </div>
            <div class="team-name">${team2}</div>
        `;
    
        parentDiv.appendChild(fixture);
    }

    function removeFixture(element) {
        element.classList.add("fade-out");
        setTimeout(() => {
            element.remove();
        }, 500); // Match the duration of the fadeOut animation
    }
    
    

    function resetTeams() {
        teamNames.forEach(team => {
            teams[team] = {
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                awayGoals: 0,
                awayWins: 0,
                points: 0
            };
        });
    }

    function recountStats() {
        resetTeams();
        fixtures.forEach(fixture => {
            if (fixture.score1 !== null && fixture.score2 !== null) {
                updateTeamStats(fixture.team1, fixture.team2, fixture.score1, fixture.score2, fixture.date);
                updateTeamStats(fixture.team2, fixture.team1, fixture.score2, fixture.score1, fixture.date);
            }
        });
    }

    function updateTeamStats(team, opponent, goalsFor, goalsAgainst, date) {
        // Ensure the team exists in the teams object
        if (!teams[team]) {
            console.error(`Team ${team} is not defined.`);
            return;
        }
    
        // Ensure the opponent exists in the teams object
        if (!teams[opponent]) {
            console.error(`Opponent ${opponent} is not defined.`);
            return;
        }
    
        teams[team].played += 1;
        teams[team].goalsFor += goalsFor;
        teams[team].goalsAgainst += goalsAgainst;
    
        const isAwayGame = (teams[team].played + teams[opponent].played) % 2 === 0;
    
        if (goalsFor > goalsAgainst) {
            teams[team].won += 1;
            teams[team].points += 3;
            if (isAwayGame) {
                teams[team].awayWins += 1;
            }
        } else if (goalsFor === goalsAgainst) {
            teams[team].drawn += 1;
            teams[team].points += 1;
        } else {
            teams[team].lost += 1;
        }
    
        if (isAwayGame) {
            teams[team].awayGoals += goalsFor;
        }
    }
    

    function updatePointsTable() {
        pointsTable.innerHTML = "";
        const sortedTeams = Object.entries(teams).sort((a, b) => 
            b[1].points - a[1].points || // Points
            (b[1].goalsFor - b[1].goalsAgainst) - (a[1].goalsFor - a[1].goalsAgainst) || // Goal difference
            b[1].goalsFor - a[1].goalsFor || // Goals scored
            b[1].awayGoals - a[1].awayGoals || // Away goals scored
            b[1].won - a[1].won || // Wins
            b[1].awayWins - a[1].awayWins // Away wins
        );
    
        sortedTeams.forEach((team, index) => {
            const row = pointsTable.insertRow();
            row.className = index < 8 ? 'top8 table-row-update' : index < 24 ? 'mid8 table-row-update' : 'bottom4 table-row-update'; // Apply classes based on rank
    
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = team[0];
            row.insertCell(2).innerText = team[1].played;
            row.insertCell(3).innerText = team[1].won;
            row.insertCell(4).innerText = team[1].drawn;
            row.insertCell(5).innerText = team[1].lost;
            row.insertCell(6).innerText = team[1].goalsFor;
            row.insertCell(7).innerText = team[1].goalsAgainst;
            row.insertCell(8).innerText = team[1].goalsFor - team[1].goalsAgainst;
            row.insertCell(9).innerText = team[1].points;
        });
    
        // Remove the animation class after the animation ends
        setTimeout(() => {
            document.querySelectorAll('.table-row-update').forEach(row => {
                row.classList.remove('table-row-update');
            });
        }, 1000); // Animation duration time
    }
    
    

    document.addEventListener("change", function(event) {
        if (event.target.classList.contains("team1-score") || event.target.classList.contains("team2-score")) {
            const fixtureDiv = event.target.closest(".fixture");
            const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
            const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
            const score1 = parseInt(fixtureDiv.querySelector(".team1-score").value) || 0;
            const score2 = parseInt(fixtureDiv.querySelector(".team2-score").value) || 0;

            // Update fixture scores
            fixtures.forEach(fixture => {
                if (fixture.team1 === team1 && fixture.team2 === team2) {
                    fixture.score1 = score1;
                    fixture.score2 = score2;
                }
            });

            // Recount stats and update points table
            recountStats();
            updatePointsTable();
        }
    });



    
    function saveData() {
        console.log("Saving data...");
        const userInputs = fixtures.map(fixture => ({
            team1: fixture.team1,
            team2: fixture.team2,
            score1: fixture.score1,
            score2: fixture.score2,
            userModified: fixture.userModified || false
        }));
        localStorage.setItem('userInputs', JSON.stringify(userInputs));
    }

    function loadData() {
        const savedInputs = localStorage.getItem('userInputs');
        if (savedInputs) {
            const parsedInputs = JSON.parse(savedInputs);
            parsedInputs.forEach((savedFixture, index) => {
                const fixture = fixtures.find(f => f.team1 === savedFixture.team1 && f.team2 === savedFixture.team2);
                if (fixture) {
                    fixture.score1 = savedFixture.score1;
                    fixture.score2 = savedFixture.score2;
                }
            });

            // Apply saved inputs to input fields
            document.querySelectorAll('.fixture').forEach(fixtureDiv => {
                const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
                const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
                const fixture = fixtures.find(f => f.team1 === team1 && f.team2 === team2);
                if (fixture) {
                    const score1Input = fixtureDiv.querySelector(".team1-score");
                    const score2Input = fixtureDiv.querySelector(".team2-score");
                    score1Input.value = fixture.score1 !== null ? fixture.score1 : '';
                    score2Input.value = fixture.score2 !== null ? fixture.score2 : '';
                }
            });
        }
    }

    function resetData() {
        console.log("Resetting data...");
        localStorage.removeItem('userInputs');
        fixtures.forEach(fixture => {
            if (fixture.userModified) {
                fixture.score1 = null;
                fixture.score2 = null;
                fixture.userModified = false;
            }
        });
        document.querySelectorAll('.team1-score, .team2-score').forEach(input => {
            if (!input.readOnly) {
                input.value = '';
            }
        });
        recountStats();
        updatePointsTable();
    }

    document.getElementById('resetButton').addEventListener('click', resetData);

    document.addEventListener("change", function(event) {
        if (event.target.classList.contains("team1-score") || event.target.classList.contains("team2-score")) {
            const fixtureDiv = event.target.closest(".fixture");
            const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
            const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
            const score1 = parseInt(fixtureDiv.querySelector(".team1-score").value);
            const score2 = parseInt(fixtureDiv.querySelector(".team2-score").value);

            if (!isNaN(score1) && !isNaN(score2)) {
                // Update fixture scores
                fixtures.forEach(fixture => {
                    if (fixture.team1 === team1 && fixture.team2 === team2) {
                        fixture.score1 = score1;
                        fixture.score2 = score2;
                        fixture.userModified = true; // Mark as user modified
                    }
                });

                // Recount stats and update points table
                recountStats();
                updatePointsTable();
                saveData(); // Save data after every change
            }
        }
    });
    
    function convertToCSV(data) {
        const csvRows = [];
        const headers = ["Position", "Team", "Played", "Won", "Drawn", "Lost", "Goals For", "Goals Against", "Goal Difference", "Points"];
        csvRows.push(headers.join(","));
    
        data.forEach((row, index) => {
            const values = [
                index + 1,
                row[0],
                row[1].played,
                row[1].won,
                row[1].drawn,
                row[1].lost,
                row[1].goalsFor,
                row[1].goalsAgainst,
                row[1].goalsFor - row[1].goalsAgainst,
                row[1].points
            ];
            csvRows.push(values.join(","));
        });
    
        return csvRows.join("\n");
    }
    
    function downloadCSV(data) {
        const csvData = convertToCSV(data);
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'conference_league_predictions.csv');
        a.click();
    }
    
    document.getElementById('exportCSVButton').addEventListener('click', () => {
        const sortedTeams = Object.entries(teams).sort((a, b) => 
            b[1].points - a[1].points ||
            (b[1].goalsFor - b[1].goalsAgainst) - (a[1].goalsFor - a[1].goalsAgainst) ||
            b[1].goalsFor - a[1].goalsFor ||
            b[1].awayGoals - a[1].awayGoals ||
            b[1].won - a[1].won ||
            b[1].awayWins - a[1].awayWins
        );
    
        downloadCSV(sortedTeams);
    });
    
    loadData(); // Load data on page load
    recountStats();
    updatePointsTable();

    const { jsPDF } = window.jspdf;

    function exportToPDF() {
        const doc = new jsPDF();
    
        // Title
        let y = 20;
        doc.setFontSize(24);
        doc.setTextColor(0, 51, 102); // UEFA Blue
        doc.text("UEFA Europa Conference League Predictor", 105, y, null, null, "center");
        y += 20;
    
        // Fixtures Header
        doc.setFontSize(18);
        doc.text("Fixtures", 105, y, null, null, "center");
        y += 10;
    
        // Fixtures Section with Table Layout
        Object.keys(matchdays).forEach((matchday, matchdayIndex) => {
            if (matchdayIndex > 0) {
                doc.addPage();
                y = 20; // Reset starting point on new page for each matchday
            }
    
            doc.setFontSize(16);
            doc.setTextColor(0, 51, 102);
            doc.text(`Matchday ${matchday}`, 10, y);
            y += 10;
    
            // Table Header for Fixtures
            const columnWidths = {
                date: 30,
                teams: 120,
                score: 40,
            };
            const startX = 10;
    
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.setFillColor(0, 51, 102); // UEFA Blue
            doc.rect(startX, y - 7, 190, 8, "F");
            doc.setTextColor(255, 255, 255);
            doc.text("Date", startX, y);
            doc.text("Teams", startX + columnWidths.date + 5, y);
            doc.text("Score", startX + columnWidths.date + columnWidths.teams + columnWidths.score - 5, y, null, null, "right");
            y += 10;
    
            matchdays[matchday].forEach((fixture, index) => {
                const { team1, team2, score1, score2, date } = fixture;
    
                // Alternating row background colors
                const bgColor = index % 2 === 0 ? [245, 245, 245] : [255, 255, 255];
                doc.setFillColor(...bgColor);
                doc.rect(10, y - 7, 190, 8, "F");
    
                // Fixture Details
                doc.setFontSize(12);
                doc.setTextColor(0, 0, 0); // Black
    
                // Date
                doc.text(date, startX, y);
    
                // Teams
                const teamText = `${team1} vs ${team2}`;
                const maxTeamTextLength = 40; // Adjust if needed for longer names
                const truncatedTeamText = teamText.length > maxTeamTextLength
                    ? `${teamText.substring(0, maxTeamTextLength)}...`
                    : teamText;
                doc.text(truncatedTeamText, startX + columnWidths.date + 5, y);
    
                // Score
                const scoreText = `${score1 !== null ? score1 : '-'} - ${score2 !== null ? score2 : '-'}`;
                doc.text(scoreText, startX + columnWidths.date + columnWidths.teams + columnWidths.score - 5, y, null, null, "right");
    
                y += 10;
            });
    
            y += 10;
        });
    
        // Points Table Section
        const rowsPerPage = [8, 16, 12]; // Top 8, 9-24, 25-36
        const startIndices = [0, 8, 24]; // Start indices for each page
    
        rowsPerPage.forEach((rowCount, pageIndex) => {
            doc.addPage();
            y = 20;
    
            doc.setFontSize(18);
            doc.setTextColor(0, 51, 102); // UEFA Blue
            doc.text("Points Table", 105, y, null, null, "center");
            y += 10;
    
            const tableBody = Array.from(document.querySelectorAll("#pointsTable tbody tr"))
                .slice(startIndices[pageIndex], startIndices[pageIndex] + rowCount)
                .map((row, rowIndex) => {
                    const rowData = Array.from(row.cells).map(cell => cell.innerText);
                    const rank = rowData[0];
                    const indicatorColor = pageIndex === 0
                        ? [0, 255, 0] // Green for Top 8
                        : pageIndex === 1
                            ? [255, 215, 0] // Gold for 9-24
                            : [255, 0, 0]; // Red for 25-36
    
                    // Add a colored indicator next to the rank
                    return [
                        {
                            content: "",
                            styles: {
                                cellWidth: 5,
                                halign: "center",
                                valign: "middle",
                                fillColor: indicatorColor,
                            },
                        },
                        rank, // Replace "Position" with "No."
                        ...rowData.slice(1),
                    ];
                });
    
            // Render Points Table
            doc.autoTable({
                startY: y,
                head: [
                    ["", "No.", "Team", "Played", "Won", "Drawn", "Lost", "Goals For", "Goals Against", "Goal Difference", "Points"],
                ],
                body: tableBody,
                bodyStyles: {
                    halign: "center",
                },
                styles: {
                    lineWidth: 0.1,
                    lineColor: [200, 200, 200],
                },
                headStyles: {
                    fillColor: [45, 45, 45],
                    textColor: [255, 255, 255],
                },
                columnStyles: {
                    0: { cellWidth: 5 }, // Indicator column
                    1: { cellWidth: 10 }, // No. column
                },
            });
        });
    
        // Footer
        doc.setFontSize(10);
        doc.setTextColor(169, 169, 169);
        doc.text("Generated by UEFA Europa Conference League Predictor", 105, 290, null, null, "center");
    
        // Save the PDF
        doc.save("EuropaConferenceLeaguePredictions.pdf");
    }
    
    
    document.getElementById("exportPDFButton").addEventListener("click", exportToPDF);

});
