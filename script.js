document.addEventListener("DOMContentLoaded", async () => {
    const cargarDatos = async () => {   
      try {
        const url = "https://swapi.dev/api/people/";
        const res = await fetch(url);
        const datos = await res.json();
        console.log("Datos recibidos de la API:", datos);
        return datos.results; // Solo necesitas los resultados de la API, no todo el objeto de respuesta
      } catch (err) {
        console.error('Error al cargar datos:', err);
        return null;
      }
    };

    const renderTable = async () => {
      const data = await cargarDatos();
      const tableBody = document.querySelector('.table-body');
      
      if (!data || !Array.isArray(data)) {
        console.error('Los datos recibidos no son válidos:', data);
        return;
      }
      
      data.forEach(character => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${character.name || '-'}</td>
          <td>${character.height || '-'}</td>
          <td>${character.mass || '-'}</td>
          <td>${character.gender || '-'}</td>
        `;
        tableBody.appendChild(row);
      });
    };

    // Llamar a la función renderTable para comenzar la carga y renderizado de los datos
    renderTable();
  });