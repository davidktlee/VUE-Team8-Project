<template>
  <div class="dropdown">
    <div class="dropdown--title">
      {{ coupones.title }}
    </div>
    <select v-model="productStore.filters" class="dropdown--item">
      <option v-for="item of coupones.values" :key="item.value" :value="item.value">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useProductStore } from '~/src/store/product'

export default {
  data() {
    return {
      coupones: {
        title: '거래 상태',
        values: [
          { name: '전체', value: 'all' },
          { name: '거래요청', value: 'request' },
          { name: '거래완료', value: 'done' },
          { name: '거래취소', value: 'canceled' },
        ],
      },
    }
  },
  computed: {
    ...mapStores(useProductStore),
  },
}
</script>

<style scoped lang="scss">
.dropdown {
  display: flex;
  margin: 22px auto 10px 450px;
  &--title {
    display: block;
    margin: 10px 20px;
    font-size: 1.1rem;
    line-height: 22px;
    font-weight: bold;
  }
  select {
    width: 320px;
    margin: 0 20px;
    height: 40px;
    border: 1px solid #999;
    border-radius: 3px;
  }
}
</style>
