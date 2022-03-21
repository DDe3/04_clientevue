import axios from 'axios'

const borrarEstudiante = async (id) => {
    
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    const data = axios.delete(`http://localhost:8081/ApiEstudiantes/V2/estudiantes/${id}`, header).then(r => r.data)
    console.log(data);
}

export default borrarEstudiante