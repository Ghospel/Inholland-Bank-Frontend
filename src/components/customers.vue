<template>
    <div class="container">
        <h3>Customer</h3>
        <v-data-table :headers="headers" :items="values" class="elevation-1" hide-actions>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.id }}</td>
          </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
  name: "customers",
  props: {
    values: Array,
  },
  data() {
    return{
        headers: 
        [{
            width: '200',
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'iban'
        },
        {
            text: 'ID',
            value: 'type'
        }
    ],
    }
},

};
</script>

