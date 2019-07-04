<template>
    <div v-if="this.dataReady">
        <p />
        <h1>Personal Account</h1>
        <customers :values="this.customersData"></customers>
        <accounts :values="this.accountsData"></accounts>
        <transactions :values="this.transactionsData"></transactions>
    </div>
</template>

<script>

import { getAccounts, getCustomers, getTransactions } from './../api'
import accounts from './../components/accounts'
import customers from './../components/customers'
import transactions from './../components/transactions'

export default {
    components: {
        accounts,
        customers,
        transactions
    },
    name: 'Secure',
    data() {
        return {
            dataReady: false,
            accountsData: [],
            customersData: [],
            transactionsData: []
        };
    },
    async mounted() {
        let tmpAccounts = await getAccounts(this.$store.state.accessToken);
        let tmpCustomers = await getCustomers(this.$store.state.accessToken);
        let tmpTransactions = await getTransactions(this.$store.state.accessToken);
        this.transactionsData = tmpTransactions;
        this.accountsData = tmpAccounts;
        this.customersData = tmpCustomers;
        this.dataReady = true;
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