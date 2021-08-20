---
title: 柱状图
---
## 用法

<bar />

## 布局

::: demo

```html
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    }
  }
</script>
:::

## 标题
## tooltip
## 图例
## 自定义颜色
## 渐变
## 最大最小
## 加载动画
## 缩放
## 多数据显示
## 主题切换