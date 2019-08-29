<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="wrapper">
        <h1 class="table-title">Задолженность</h1>
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
        name: 'Debt',
        data() {
            return {
                show : false,
                headers: [
                    {
                        text: 'Клиент',
                        align: 'center',
                        sortable: false,
                        value: 'FIO',
                        width : '25%'
                    },
                    { text: 'id', value: 'id_debt', align: 'center',  width : '25%' },
                    { text: 'Портфель', value: 'Portfolio_name', align: 'center', width : '25%' },
                    { text: 'Сумма Долга', value: 'Debt_sum', align: 'center', width : '25%' },
                ],
                items: [],
            }
        },
        async created() {
            let portfolio = await this.$http.get(`/api/debt/all`)
            portfolio.data.success
                ? (this.items = portfolio.data.response)
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
    .save-text {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 100px;
        margin-left: -100px;
        background-color: white;
        text-align: center;
        font-size: 20px;
        line-height: 100px;
        opacity: 0;
    }

</style>
