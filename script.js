// MODEL
const MenuModel = {
    items: [
        { id: 1, nombre: "Espresso", desc: "Intenso y puro, corazón del café.", precio: "$2.50" },
        { id: 2, nombre: "Capuccino", desc: "Balance perfecto entre café y crema.", precio: "$3.50" },
        { id: 3, nombre: "Latte Vainilla", desc: "Suave toque dulce y aromático.", precio: "$4.00" }
    ]
};

// VIEW
const MenuView = {
    renderMenu(items, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = items.map(item => `
            <div class="col-md-4">
                <div class="card card-menu p-4" onclick="MenuController.selectItem(${item.id})">
                    <h4>${item.nombre}</h4>
                    <p class="text-muted">Click para ver más</p>
                </div>
            </div>
        `).join('');
    },
    showLoader(show) {
        document.getElementById('loader').classList.toggle('d-none', !show);
    },
    openModal(item) {
        const modalEl = document.getElementById('menuModal');
        document.getElementById('modal-body-content').innerHTML = `
            <div class="modal-header"><h5>${item.nombre}</h5></div>
            <div class="modal-body"><p>${item.desc}</p><strong>${item.precio}</strong></div>
        `;
        new bootstrap.Modal(modalEl).show();
    }
};

// CONTROLLER
const MenuController = {
    init() {
        MenuView.renderMenu(MenuModel.items, 'menu-container');
    },
    selectItem(id) {
        MenuView.showLoader(true);
        // Simular carga de datos
        setTimeout(() => {
            const item = MenuModel.items.find(i => i.id === id);
            MenuView.showLoader(false);
            MenuView.openModal(item);
        }, 800);
    }
};

document.addEventListener('DOMContentLoaded', MenuController.init);