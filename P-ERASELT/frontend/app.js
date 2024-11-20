const accountForm = document.getElementById('accountForm');
const accountsTable = document.getElementById('accountsTable');
const messageBox = document.getElementById('messageBox'); // Contenedor de mensajes

// Variable para manejar el estado de edición
let editingAccountId = null;

// Función para mostrar mensajes    // Verde para éxito, rojo para error, amarillo para info
const showMessage = (message, type = 'success') => {
    messageBox.textContent = message;
    messageBox.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    messageBox.style.color = '#fff';
    messageBox.style.padding = '10px';
    messageBox.style.borderRadius = '5px';
    setTimeout(() => {
        messageBox.textContent = '';
    }, 3000);
};

// Obtener todas las cuentas
const fetchAccounts = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/accounts');
        if (!response.ok) throw new Error('Error al obtener las cuentas');

        const accounts = await response.json();
        accountsTable.innerHTML = ''; // Limpiar tabla

        accounts.forEach(account => {
            const row = accountsTable.insertRow();
            row.innerHTML = `
                <td>${account.platformName}</td>
                <td><a href="${account.profileUrl}" target="_blank">${account.profileUrl}</a></td>
                <td>${account.infoType}</td>
                <td>
                    <button onclick="editAccount('${account._id}')">Editar</button>
                    <button onclick="deleteAccount('${account._id}')">Eliminar</button>
                </td>
            `;
        });
    } catch (error) {
        showMessage('Error al cargar las cuentas', 'error');
        console.error(error);
    }
};

// Crear o actualizar cuenta
accountForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const platformName = document.getElementById('platformName').value;
    const profileUrl = document.getElementById('profileUrl').value;
    const infoType = document.getElementById('infoType').value;

    const accountData = { platformName, profileUrl, infoType };

    try {
        const method = editingAccountId ? 'PUT' : 'POST';
        const url = editingAccountId
            ? `http://localhost:3000/api/accounts/${editingAccountId}`
            : 'http://localhost:3000/api/accounts';

        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(accountData),
        });

        if (!response.ok) throw new Error('Error al guardar la cuenta');

        showMessage(editingAccountId ? 'Cuenta actualizada' : 'Cuenta agregada');
        fetchAccounts();
        accountForm.reset();
        editingAccountId = null; // Resetear estado de edición
    } catch (error) {
        showMessage('Error al guardar la cuenta', 'error');
        console.error(error);
    }
});

// Editar cuenta
const editAccount = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/accounts/${id}`);
        if (!response.ok) throw new Error('Error al cargar la cuenta');

        const account = await response.json();
        document.getElementById('platformName').value = account.platformName;
        document.getElementById('profileUrl').value = account.profileUrl;
        document.getElementById('infoType').value = account.infoType;

        editingAccountId = id;
        showMessage('Editando cuenta. Realiza los cambios y guarda.', 'info');
    } catch (error) {
        showMessage('Error al cargar la cuenta', 'error');
        console.error(error);
    }
};

// Eliminar cuenta
const deleteAccount = async (id) => {
    const confirmDelete = confirm('¿Estás seguro de eliminar esta cuenta?');
    if (confirmDelete) {
        try {
            const response = await fetch(`http://localhost:3000/api/accounts/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Error al eliminar la cuenta');

            showMessage('Cuenta eliminada');
            fetchAccounts();
        } catch (error) {
            showMessage('Error al eliminar la cuenta', 'error');
            console.error(error);
        }
    }
};

// Inicializar
fetchAccounts();
