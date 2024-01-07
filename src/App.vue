<template>
  <div class="demo">
    <div class="demo-text">demo text</div>
  </div>
</template>

<style lang="less" scoped>
@color: red;

.demo {
  &-text {
    color: @color;
    text-decoration: dashed;
  }
}
</style>
