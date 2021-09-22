<template>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender"
    @update="onUpdate"
    @destroy="onDestroy"/>
</template>

<script>
import VueHighcharts from 'vue3-highcharts'
import { ref } from 'vue'

export default {
    name: 'Charts',
    components: {
        VueHighcharts
    },
    setup() {
        const data = ref([1, 2, 3])
        const chartData = computed(() =>{
            return {
                series: [{
                    name: 'Test Series',
                    data: data.value,
                }],
            }
        });

        const onRender = () => {
            console.log('Chart rendered');
        };

        const onUpdate = () => {
            console.log('Chart updated');
        };

        const onDestroy = () => {
            console.log('Chart destroyed');
        };

        return {
            chartData,
            onRender,
            onUpdate,
            onDestroy,
        };
    }
}
</script>