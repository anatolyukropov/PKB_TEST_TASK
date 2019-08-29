<template>
    <div class="wrapper">
        <h1 class="table-title">Календарь</h1>
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
                        text: 'Месяц',
                        align: 'center',
                        sortable: false,
                        value: 'Cal_date',
                        width : '100%'
                    },
                ],
                items: [],
            }
        },
        async created() {
            let payment = await this.$http.get(`/api/calendar/all`)
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