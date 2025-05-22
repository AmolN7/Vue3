<template>
    <div>
    <h1>Table Sorting</h1>
    <!-- {{ users }} -->
  <v-table
    :data="users"
  >
    <thead slot="head">
      <v-th :sortKey="nameLength" defaultSort="desc">Name</v-th>
      <v-th sortKey="age">Age</v-th>
      <v-th sortKey="address.state">State</v-th>
      <v-th :customSort="dateSort">Registered</v-th>
    </thead>
    <tbody slot="body" slot-scope="{displayData}">
      <tr v-for="row in displayData" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.age }}</td>
        <td>{{ row.address.state }}</td>
        <td>{{ row.registered }}</td>
      </tr>
    </tbody>
  </v-table>
  </div>
</template>
<script>
import users from '../data/users.json'

export default {
  name: 'Sorting',
  data: () => ({
    users
  }),
  methods: {
    nameLength (row) {
      return row.name.length
    },
    dateSort(a, b) {
      let date1 = new Date(a.registered).getTime();
      let date2 = new Date(b.registered).getTime();
      
      return date1 - date2;
    }
  }
}
</script>
<style scoped>
.vt-sort:before{
    font-family: FontAwesome;
    padding-right: 0.5em;
    width: 1.28571429em;
    display: inline-block;
    text-align: center;
}

.vt-sortable:before{
    content: "\f0dc";
}

.vt-asc:before{
    content: "\f160";
}

.vt-desc:before{
    content: "\f161";
}
</style>