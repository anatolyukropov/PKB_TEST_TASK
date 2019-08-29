<template>
    <div class="wrapper">
        <h1 class="table-title">Платежи</h1>
        <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-1"
                loading="true"
        >
        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: "Payment",
        data() {
            return {
                headers: [
                    {
                        text: 'id Долга',
                        align: 'center',
                        sortable: false,
                        value: 'id_debt',
                        width : '33%'
                    },
                    { text: 'Сумма платежа', value: 'Payment_sum', align: 'center',  width : '33%' },
                    { text: 'Дата платежа', value: 'Date', align: 'center', width : '33%' },
                ],
                items: [],
            }
        },
        async created() {
            let payment = await this.$http.get(`/api/payment/all`)
            payment.data.success
                ? (this.items = payment.data.response)
                : (this.items = this.items)
        },
    }
</script>

<style scoped>
    .table-title {
        text-align: center;
    }
    .wrapper {
        position: relative;
    }
</style>