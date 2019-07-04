<template>
  <div class="container">
      <h3>Accounts</h3>
        <v-data-table :headers="headers" :items="values" class="elevation-1" hide-actions>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.iban }}</td>
            <td class="text-xs-left">{{ props.item.type }}</td>
            <td class="text-xs-left">{{ props.item.balance }}</td>
            <td class="text-xs-left">{{ props.item.minimalBalance }}</td>
            <td class="text-xs-left">{{ props.item.daylimit }}</td>
          </template>
        </v-data-table>
  </div>
</template>

<script>
export default {
  name: "accounts",
  data() {
    return{
        headers: 
        [{
            width: '200',
            text: 'IBAN',
            align: 'left',
            sortable: false,
            value: 'iban'
        },
        {
            text: 'Account Type',
            value: 'type'
        },
        {
            text: 'Account Balance',
            value: 'balance'
        },
        {
            text: 'Minimum Balance',
            value: 'minimumBalance'
        },
        {
            text: 'Daily Transaction Limit',
            value: 'daylimit'
        }
    ],
    }
},
props: {
    values: Array,
}
};
</script>

