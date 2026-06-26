    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-persona');
    const tbody = document.getElementById('tabla-body');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);

        const imc = (peso / (altura * altura)).toFixed(2);

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${edad}</td>
            <td>${altura} m</td>
            <td>${peso} kg</td>
            <td><strong>${imc}</strong></td>
            <td><button class="btn-eliminar">Quitar</button></td>
        `;

        tr.querySelector('.btn-eliminar').addEventListener('click', function() {
            tr.remove();
        });

        tbody.appendChild(tr);
        form.reset();
    });
});