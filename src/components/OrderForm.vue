<template>
  <div class="order-form">
      <h1>{{ msg }}</h1>
      <el-row>
          <el-col :span="24">
              <el-input placeholder="Input amount of contracts" v-model="contractSize">
                  <template slot="prepend">Contracts</template>
              </el-input>
          </el-col>
      </el-row>

      <el-row>
          <el-col :span="18">
              <el-input placeholder="Input amount of orders" v-model="orderAmount">
                  <template slot="prepend">Orders</template>
              </el-input>
          </el-col>
          <el-col :span="6">
              <el-select v-model="scalingTypeValue" placeholder="Scaling type" style="width: 100%;">
                  <el-option
                          v-for="item in scalingTypes"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>
          </el-col>
      </el-row>
      <div>
          <el-table :data="orderSequence" style="width: 100%">
              <el-table-column prop="size" label="Size" align="left">
              </el-table-column>

              <el-table-column prop="type" label="Type" align="left">
              </el-table-column>

              <el-table-column prop="scalingType" label="Type" align="left">
              </el-table-column>
          </el-table>
      </div>
  </div>
</template>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
</style>

<script>
    import { LinearScaled } from "../ordering"

    export default {
        name: 'OrderForm',
        computed: {
            orderSequence() {
                switch(this.scalingTypeValue) {
                    case 'Linear':
                        return LinearScaled.make(this.contractSize, this.orderAmount)
                    default:
                        return []
                }
            }
        },
        data() {
            return {
                contractSize: 0,
                orderAmount: 0,
                scalingTypes: [{
                    value: 'Linear',
                    label: 'Linear'
                }, {
                    value: 'Increasing',
                    label: 'Increasing'
                }, {
                    value: 'Decreasing',
                    label: 'Decreasing'
                }, {
                    value: 'InOut',
                    label: 'InOut'
                }, {
                    value: 'OutIn',
                    label: 'OutIn'
                }],
                scalingTypeValue: 'Linear',
                msg: 'Order form',
            };
        },
    };
</script>
