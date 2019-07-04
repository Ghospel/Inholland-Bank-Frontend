<template>
    <div v-if="this.dataReady">
        <accounts :headers="this.headers" :values="this.info"></accounts>
    </div>
</template>

<script>

import { getAccounts } from './../api'
import accounts from './../components/accounts'

export default {
    components: {
        accounts
    },
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