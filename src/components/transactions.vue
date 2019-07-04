<template>
    <div class="container">
        <h3>Transactions</h3>
        <v-data-table :headers="headers" :items="values" class="elevation-1" hide-actions>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.date }}</td>
            <td class="text-xs-left">{{ props.item.amount }}</td>
            <td class="text-xs-left">{{ props.item.description }}</td>
            <td class="text-xs-left">{{ props.item.recipientIBAN }}</td>
            <td class="text-xs-left">{{ props.item.fromIBAN }}</td>
            <td class="text-xs-left">{{ props.item.type }}</td>
          </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
  name: "transactions",
  props: {
    values: Array,
  },
  data() {
    return{
        headers: 
        [{
            width: '200',
            text: 'Date',
            align: 'left',
            sortable: false,
            value: 'date'
        },
        {
            text: 'Amount',
            value: 'amount'
        },
        {
            text: 'Description',
            value: 'description'
        },
        {
            text: 'Recipient',
            value: 'recipientIBAN'
        },
        {
            text: 'From',
            value: 'fromIBAN'
        },
        {
            text: 'Type',
            value: 'type'
        },
    ],
    }
},

};
</script>

