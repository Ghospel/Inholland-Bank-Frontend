<template>
    <div id="secure">
        <v-app id="inspire">
        <h1>Personal Account</h1>
        <p>
            <v-data-table :headers="headers" :items="info" class="elevation-1" hide-actions>
                <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.iban }}</td>
                    <td class="text-xs-left">{{ props.item.type }}</td>
                    <td class="text-xs-left">{{ props.item.balance }}</td>
                    <td class="text-xs-left">{{ props.item.minimalBalance }}</td>
                    <td class="text-xs-left">{{ props.item.daylimit }}</td>
                </template>
            </v-data-table>
        </p>
        </v-app>
    </div>
</template>

<script>
    const axios = require('axios');
export default {
    name: 'Secure',
    data() {
        return {
            info: [],
            headers: [{
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
            ]
        };
    },
    mounted() {
        axios
            .get('http://localhost:8080/api/accounts', {
                params: {

                },
                headers: {
                    'Authorization': "Bearer" + this.$store.state.accessToken
                }
            })
            .then(response => (this.info = response.data))
            .catch(function (error) {
                info = 'An error has occured.'
            })
    },
    methods: {}
}
</script>

<style scoped>
    #secure {
        width: 100vw;
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>