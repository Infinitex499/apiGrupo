const cargarDatos = async () => {   
    try {
        const url = "http://nolaborables.com.ar/api/v2/feriados/2016?formato=mensual";
        const res = await fetch(url);
        const datos = await res.json();
        return datos;
    } catch (err) {
        console.log(err);
    }
    cargarDatos();
};