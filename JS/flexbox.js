document.addEventListener('DOMContentLoaded', function() {
    const productos = [
        { id: 1, nombre: "Monitor Curvo 144hz", stock: true },
        { id: 2, nombre: "Silla Ergonomica", stock: false },
        { id: 3, nombre: "Teclado Mecanico", stock: true },
        { id: 4, nombre: "Mouse Inalambrico", stock: true },
        { id: 5, nombre: "TV QLED 85", stock: false },
        { id: 6, nombre: "Pad Mouse XL", stock: true }
    ];

    const contenedor = document.getElementById('contenedor-tarjetas');

    function renderizar(array) {
        contenedor.innerHTML = '';
        array.forEach(item => {
            const div = document.createElement('div');
            div.className = 'tarjeta';

            const h3 = document.createElement('h3');
            h3.textContent = item.nombre;

            const p = document.createElement('p');
            p.textContent = item.stock ? 'En Stock' : 'Sin Stock';

            div.appendChild(h3);
            div.appendChild(p);
            contenedor.appendChild(div);
        });
    }

    renderizar(productos);

    const btnFiltrar = document.getElementById('btn-filtrar');
    const btnReset = document.getElementById('btn-reset');

    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', () => {
            const filtrados = productos.filter(p => p.stock);
            renderizar(filtrados);
        });
    }

    if (btnReset) {
        btnReset.addEventListener('click', () => {
            renderizar(productos);
        });
    }
});