<template>
  <div>
      <center>
            <h1> Prueba de consumos </h1>
            <table class="table">
            <thead><tr><th>nombre</th>
            <th>ruta</th>
            <th>SubOpciones</th></tr></thead>
            <tbody>
                <tr v-for="t in objetos" v-bind:key="t.nombreOpcion" >
                <td>{{t.nombreOpcion}}</td>
                <td>{{t.rutaOpcion}}</td>
                <td v-for="subs in t.subOpciones" v-bind:key="subs.nombreOpcion" >
                    {{subs.nombreOpcion}}  ruta de la opcion {{subs.rutaOpcion}}
                </td>
                </tr>
            </tbody>
            </table>

      </center>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name : 'consumos',
    methods : {
        ...mapActions(["leerObjetos"])
    },
    computed: {
    ...mapGetters(["objetos"])
    },
    created() {
    this.leerObjetos();
  }


}
</script>

<style>

</style>