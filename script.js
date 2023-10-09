document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const monthDropdown = document.getElementById('monthDropdown');
    const yearDropdown = document.getElementById('yearDropdown');
    const letterDropdown = document.getElementById('letterDropdown');

    // Función para cargar la imagen del calendario para el mes y año seleccionados
    function cargarImagenCalendario(mes, anio) {
        // Agrega tu lógica para cargar la imagen aquí
        // Por ejemplo, puedes mostrar una imagen diferente para cada mes y año seleccionados.
        // calendar.innerHTML = `<img src="calendario_${mes}_${anio}.jpg" alt="Calendario ${mes}/${anio}">`;
    }

    // Función para llenar el menú desplegable de años con el rango desde 2022 hasta 2100
    function llenarAnios() {
        for (let i = 2022; i <= 2100; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearDropdown.appendChild(option);
        }
    }

    // Manejar la selección de mes y año
    monthDropdown.addEventListener('change', () => {
        const selectedMonth = parseInt(monthDropdown.value);
        const selectedYear = parseInt(yearDropdown.value);
        cargarImagenCalendario(selectedMonth, selectedYear);
    });

    yearDropdown.addEventListener('change', () => {
        const selectedMonth = parseInt(monthDropdown.value);
        const selectedYear = parseInt(yearDropdown.value);
        cargarImagenCalendario(selectedMonth, selectedYear);
    });

    // Manejar la búsqueda por letra
    letterDropdown.addEventListener('change', () => {
        const selectedLetter = letterDropdown.value;
        if (selectedLetter) {
            // Agrega la lógica para buscar la primera fecha que comienza con la letra seleccionada
            // Luego, carga la imagen del calendario para esa fecha
        }
    });

    // Inicialmente, cargar la imagen del calendario para el mes y año actual
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();
    const anioActual = fechaActual.getFullYear();
    monthDropdown.value = mesActual;
    yearDropdown.value = anioActual;
    cargarImagenCalendario(mesActual, anioActual);

    // Llenar el menú desplegable de años al cargar la página
    llenarAnios();
});
