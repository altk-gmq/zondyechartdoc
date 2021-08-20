---
title: 安装
---

# 安装

## npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```sh
npm install ZondyEchart --save
```

如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装图表组件
```sh
import Vue from 'vue'
import ZondyEchart  from 'ZondyEchart '

Vue.use(ZondyEchart )
```
## 快速上手