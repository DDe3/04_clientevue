import axios from 'axios'


// GET
const obtenerEstudiante = async (id) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Navegador': 'Chrome'
    }
    const data = axios.get(`http://localhost:8081/ApiEstudiantes/V2/estudiantes/${id}`,headers).then(r => r.data)
    return data
}

// POST
const insertarEstudiante = async (body) => {
    const headers = {
        'Access-Control-Allow-Origin': '',
        'Content-Type': 'application/json',
        'Navegador': 'Chrome'
    }
    const data = axios.post(`http://localhost:8081/ApiEstudiantes/V2/estudiantes`, body, headers).then(r => r.data)
    console.log(data);
}

// PUT
const actualizarEstudiante = async (body, id) => {
    const data = axios.put(`http://localhost:8081/ApiEstudiantes/V2/estudiantes/${id}`, body).then(r => r.data)
    console.log(data);
}

// DELETE
const borrarEstudiante = async (id) => {
    const headers = {
        'Access-Control-Allow-Origin': '',
        'Content-Type': 'application/json',
        'Navegador': 'Chrome'
    }
    const data = axios.delete(`http://localhost:8081/ApiEstudiantes/V2/estudiantes/${id}`, body).then(r => r.data)
    console.log(data);
}

export default obtenerEstudiante; insertarEstudiante; actualizarEstudiante; borrarEstudiante;