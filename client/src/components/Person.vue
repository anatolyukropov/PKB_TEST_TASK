<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="wrapper">
        <transition name="fade">
            <div class="save-text" ref="fade">
                <p>Сохранено</p>
            </div>
        </transition>
        <h1 class="table-title">Клиент</h1>
        <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            @input.native="update($event)"
            loading="true"
        >
            <template v-slot:item.FIO="props">
                <textarea
                    class="slot-FIO__text"
                    v-model="props.item.FIO"
                    :id="props.item.id_person"
                ></textarea>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'Person',
    data() {
        return {
            show : false,
            headers: [
                {
                    text: 'id',
                    align: 'center',
                    sortable: false,
                    value: 'id_person',
                    width : '50%'
                },
                { text: 'ФИО', value: 'FIO', align: 'center', sortable: true, width : '50%' },
            ],
            items: [],
        }
    },
    async created() {
        let personData = await this.$http.get(`/api/person/all`)
        personData.data.success
            ? (this.items = personData.data.response)
            : (this.items = this.items)
    },
    methods: {
        update: _.debounce(function(e) {
                this.save(e.target.value, e.target.id)
        }, 2000),
        save: async function(value, id) {
            let res = await this.$http.post(
                `/api/person/update/${id}/fio/${value}`
            );
            if (res.data.success) {
                if (this.$refs.fade.classList.contains('save-text_fade')) {
                    let elm = document.getElementsByClassName('save-text')[0],
                        newone = elm.cloneNode(true);
                    elm.parentNode.replaceChild(newone, elm);
                } else {
                    this.$refs.fade.classList.toggle('save-text_fade');
                }
            }
        },
    },
}
</script>

<style scoped>
.slot-FIO__text:focus {
    outline: none !important;
}
.slot-FIO__text {
    resize: none;
    line-height: 20px;
    height: 20px;
    width: auto;
}
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
.save-text_fade {
    animation: fadeInAndOut  2s  ease-in-out;
    animation-fill-mode: backwards;
}

@keyframes fadeInAndOut {
    from {opacity: 0;}
    50% {opacity: 1;}
    to {opacity: 0;}
}

</style>
