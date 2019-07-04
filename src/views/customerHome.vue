<template>
    <div id="secure">
        <v-app id="inspire">
        <h1>Personal Account</h1>
        <p />
            <div v-if="dataReady">
                <v-data-table :headers="headers" :items="info" class="elevation-1" hide-actions>
                    <template v-slot:items="props">
                        <td class="text-xs-left">{{ props.item.iban }}</td>
                        <td class="text-xs-left">{{ props.item.type }}</td>
                        <td class="text-xs-left">{{ props.item.balance }}</td>
                        <td class="text-xs-left">{{ props.item.minimalBalance }}</td>
                        <td class="text-xs-left">{{ props.item.daylimit }}</td>
                    </template>
                </v-data-table>
            </div>
        </v-app>
    </div>
</template>

<script>

import { getAccounts } from './../api'

export default {
    name: 'Secure',
    data() {
        return {
            dataReady: false,
            info: ['test'],
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
    async mounted() {
        let tmp = await getAccounts(this.$store.state.accessToken);
        this.info = tmp;
        this.dataReady = true;
        console.log('info ', tmp)
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