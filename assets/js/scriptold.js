function loadCTF(ctf) {
    const ctfData = getCtfData(ctf);
    const tableBody = document.querySelector("#ctf-table tbody");
    tableBody.innerHTML = "";

    ctfData.forEach(ctf => {
        const row = document.createElement("tr");
        Object.values(ctf).forEach((value, index) => {
            const cell = document.createElement("td");
            if (index === 1) {
                const link = document.createElement("a");
                link.href = value.url;
                link.textContent = value.name;
                cell.appendChild(link);
            } else {
                cell.textContent = value;
            }
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

function getCtfData(ctf) {
    const ctfData = {
        passetonhack: [
            { category: "Web", ctf: { name: "Passetonhack", url: "https://www.defense.gouv.fr/comcyber/actualites/passe-ton-hack-dabord-2e-edition-elargie-lensemble-du-territoire-francais" }, date: "01/01/2023" }
        ],
        fcsc2024: [
            { category: "OSINT", ctf: { name: "FCSC 2024", url: "https://cyber.gouv.fr/france-cybersecurity-challenge-2023" }, date: "02/02/2024" }
        ],
        fcsc2023: [
            { category: "Pwn", ctf: { name: "Introduction - Poney", url: "https://ctf.reqlu.fr/blog/fcsc2k23/introduction-poney.html" }, date: "21/03/2023" }
        ]
    };
    return ctfData[ctf] || [];
}
