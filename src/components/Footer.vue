<template>
  <div id="footerComponent" class="footer max-940">
    <v-row class="hidden-sm-and-down">
      <v-col class="align-self-center">
        <v-img src="@/assets/img/logo.png" class="flex-grow-0" max-width="140"></v-img>
      </v-col>
      <v-col>
        <div class="tit">关于Callchain</div>
        <a class="txt">公告</a>
        <a class="txt">风险提示</a>
      </v-col>
      <v-col>
        <div class="tit">开发工具</div>
        <a class="txt">文档</a>
        <a class="txt">Github</a>
      </v-col>
      <v-col class="align-end">
        <div class="box">
          <div class="tit">联系我们</div>
          <a class="txt">技术支持</a>
          <a class="txt">FAQ</a>
        </div>
      </v-col>
    </v-row>
    <div class="copyright">CopyRight©2018-2021 Callchain Foundation All Rights Reserved.</div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
    }),
    methods: {
    }
  }
</script>

<style lang="scss">
#footerComponent {
  width: 940px;
  margin-top: 80px;
  .col {
    display: inline-flex;
    flex-direction: column;
    line-height: 32px;
    .tit {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }
  .box {
    width: 80px;
  }
  a {
    color: #333;
  }
  .copyright {
    margin-top: 40px;
    line-height: 60px;
    border-top: 1px solid #333;
  }

}
@media screen and (max-width: 1000px) {
  #footerComponent {
    margin-top: 0;
    font-size: 12px;
    .copyright {
      padding-left: 24px;
    }
  }
}
</style>
