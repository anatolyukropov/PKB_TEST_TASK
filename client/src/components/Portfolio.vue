<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="wrapper">
        <h1 class="table-title">Портфель</h1>
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
        name: 'Portfolio',
        data() {
            return {
                headers: [
                    {
                        text: 'id',
                        align: 'center',
                        sortable: false,
                        value: 'id_portfolio',
                        width : '25%'
                    },
                    { text: 'Имя Портфеля', value: 'Portfolio_name', align: 'center',  width : '25%' },
                    { text: 'Дата Подписи', value: 'Sign_date', align: 'center', width : '25%' },
                    { text: 'Дата завершения', value: 'End_date', align: 'center', width : '25%' },
                ],
                items: [],
            }
        },
        async created() {
            let portfolio = await this.$http.get(`/api/portfolio/all`)
            portfolio.data.success
                ? (this.items = portfolio.data.msg)
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
