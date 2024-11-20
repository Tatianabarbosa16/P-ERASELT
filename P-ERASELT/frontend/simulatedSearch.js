const trialForm = document.getElementById("trialForm");
const searchResultsSection = document.getElementById("searchResultsSection");
const crudSection = document.getElementById("crudSection");
const goToCrudButton = document.getElementById("goToCrudButton");

// Datos simulados para la búsqueda
const searchResults = [
    { name: "Cuenta 1", type: "Correo", url: "https://example.com/cuenta1" },
    { name: "Cuenta 2", type: "Red Social", url: "https://example.com/cuenta2" },
    { name: "Cuenta 3", type: "Suscripción", url: "https://example.com/cuenta3" }
];

// Manejar formulario de prueba gratuita
trialForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Prueba gratuita iniciada! Mostrando resultados simulados...");
    loadSearchResults();
    trialForm.parentElement.style.display = "none";
    searchResultsSection.style.display = "block";
});

// Mostrar datos simulados
const loadSearchResults = () => {
    const searchResultsTable = document.getElementById("searchResultsTable");
    searchResultsTable.innerHTML = ""; // Limpia la tabla

    searchResults.forEach((result, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${result.name}</td>
            <td>${result.type}</td>
            <td><a href="${result.url}" target="_blank">${result.url}</a></td>
            <td><button class="delete-btn" data-index="${index}">Borrar</button></td>
        `;

        searchResultsTable.appendChild(row);
    });
};

// Ir a CRUD
goToCrudButton.addEventListener("click", () => {
    searchResultsSection.style.display = "none";
    crudSection.style.display = "block";
});
