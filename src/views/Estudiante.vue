<template>
  <h1>SERVICIOS ESTUDIANTE</h1>
  <div>
    <h2>Obtener estudiante</h2>
    <input type="number" placeholder="ID de Estudiante" v-model="idEstudiante" />
    <button @click="getEstudiante" >Consultar</button>
    <h3 v-if="estudiante">{{estudiante}}</h3>
  </div>

  <div>
    <h2>Crear Estudiante</h2>
    <input type="text" placeholder="Nombre de Estudiante" v-model="nombre" />
    <br>
    <input type="text" placeholder="Apellido de Estudiante" v-model="apellido" />
    <br>
    <input type="text" placeholder="Direccion de Estudiante" v-model="direccion" />
    <br>
    <input type="number" placeholder="Edad de Estudiante" v-model="edad" />
    <br>
    <button @click="postEstudiante">Insertar</button>
    <h3 v-if="respuesta">{{respuesta}}</h3>
  </div>

  <div>
    <h2>Actualizar Estudiante</h2>
    <input type="number" placeholder="ID de Estudiante" v-model="idEstudiante" />
    <br>
    <input type="text" placeholder="Nombre de Estudiante" v-model="nombre" />
    <br>
    <input type="text" placeholder="Apellido de Estudiante" v-model="apellido" />
    <br>
    <input type="text" placeholder="Direccion de Estudiante" v-model="direccion" />
    <br>
    <input type="number" placeholder="Edad de Estudiante" v-model="edad" />
    <br>
    <button @click="postEstudiante">Insertar</button>
    <h3 v-if="respuesta">{{respuesta}}</h3>
  </div>

  <div>
    <h2>Borrar estudiante</h2>
    <input type="number" placeholder="ID de Estudiante" v-model="idBorrar" />
    <button @click="deleteEstudiante" >Borrar</button>
  </div>


</template>
<script>
import obtenerEstudiante from '../js/clienteEstudiante.js'
import insertarEstudiante from "../js/clienteEstudiante.js"
import actualizarEstudiante from "../js/clienteEstudiante.js"
import borrarEstudiante from "../js/borrarEstudiante.js"
export default {
  name: 'Pagina Estudiante',
  data() {
    return {
      idEstudiante: null,
      estudiante: null,
      respuesta : null,

      nombre: null,
      apellido: null,
      direccion: null,
      edad: null,

      idBorrar: null,

    };
  },
  methods:{
    async getEstudiante() {
      this.estudiante = await obtenerEstudiante(this.idEstudiante)
      console.log(this.estudiante)
    },
    
    async postEstudiante() {
      const estu = {
        'id': null,
        'nombre': this.nombre,
        'apellido': this.apellido,
        'direccion': this.direccion,
        'edad': this.edad,
      }
      console.log(estu)
      this.respuesta = await insertarEstudiante(this.estu)
      console.log(this.respuesta)
    },
    async putEstudiante() {
      const estu = {
        'id': null,
        'nombre': this.nombre,
        'apellido': this.apellido,
        'direccion': this.direccion,
        'edad': this.edad,
      }
      this.respuesta = await actualizarEstudiante(this.idEstudiante, estu)
      console.log(this.respuesta)
    },
    async deleteEstudiante() {
      this.respuesta = await borrarEstudiante(this.idBorrar)
      console.log(this.respuesta)
    }
  }
}
</script>

<style>
</style>
