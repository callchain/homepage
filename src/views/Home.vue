<template>
  <v-container id="home" class="px-6">
    <div class="sec1 max-940 d-flex align-center justify-space-between">
      <div class="slogan">
        <div class="tit red--text">{{$t("home.mission")}}</div>
        <div class="mt-6 txt">{{$t("home.mission_tip")}}</div>
        <v-btn class="mt-6" color="primary">
          <span>{{$t("home.start")}}</span>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <video src="@/assets/video/video.mp4" controls muted loop autoplay></video>
    </div>
    <div class="notice-list d-flex align-center justify-center">
      <v-icon color="primary">fa-volume-up</v-icon>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <div class="notice d-flex align-center justify-space-between">
            <a>Callchain跨链桥正式上线，支持主流资产一键跨链</a>
            <span class="hidden-sm-and-down">2021-07-16 17:54:03</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="notice d-flex align-center justify-space-between">
            <a>风险提示: Callchain官方不会发布任何Swap项目，因为所有项目都是由社区开发的，所以Callchain对这些项目造成的问题不承担任何责任。此外，Callchain不为相关项目提供客户服务。</a>
            <span class="hidden-sm-and-down">2021-07-16 17:54:03</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="sec2 max-940 d-flex align-center">
      <v-img src="@/assets/img/a.png" width="380"/>
      <div class="art">
        <div class="tit red--text">{{$t("home.why_call")}}</div>
        <div class="txt">
          {{$t("home.why_call_tip1")}}<br/>
          {{$t("home.why_call_tip2")}}
        </div>
      </div>
    </div>
    <div class="sec3 max-940">
      <div class="tit red--text text-center">{{$t("home.advantage")}}</div>
      <div class="d-flex justify-space-between align-center">
        <div class="fz-20">{{$t("home.advantage1")}}</div>
        <v-img src="@/assets/img/b.png" max-width="240"/>
      </div>
      <div class="d-flex justify-space-between align-center">
        <v-img src="@/assets/img/c.png" max-width="240"/>
        <div class="fz-20">{{$t("home.advantage2")}}</div>
      </div>
      <div class="d-flex justify-space-between align-center">
        <div class="fz-20">{{$t("home.advantage3")}}</div>
        <v-img src="@/assets/img/d.png" max-width="240"/>
      </div>
      <div class="d-flex justify-space-between align-center">
        <v-img src="@/assets/img/e.png" max-width="240"/>
        <div class="fz-20">{{$t("home.advantage4")}}</div>
      </div>
    </div>
    <div class="sec4 max-940">
      <div class="tit fz-48 red--text text-center">{{$t("home.milestone")}}</div>
      <div class="subtit fz-20 text-center">{{$t("home.milestone_tip")}}</div>
      <div class="timeline-list">
        <div class="timeline-list_item start">
          <div class="time">2018-04</div>
          <div class="txt">{{$t("home.milestone1")}}</div>
        </div>
        <div class="timeline-list_item">
          <div class="time">2018-09</div>
          <div class="txt">{{$t("home.milestone2")}}</div>
        </div>
        <div class="timeline-list_item">
          <div class="time">2019-04</div>
          <div class="txt">{{$t("home.milestone3")}}</div>
        </div>
        <div class="timeline-list_item">
          <div class="time">2020-05</div>
          <div class="txt">{{$t("home.milestone4")}}</div>
        </div>
        <div class="timeline-list_item">
          <div class="time">2020-11</div>
          <div class="txt">{{$t("home.milestone5")}}</div>
        </div>
        <div class="timeline-list_item end">
          <div class="txt">{{$t("home.milestone6")}}</div>
        </div>
      </div>
    </div>
    <div class="sec6 max-940">
      <div class="tit">{{$t("home.community")}}</div>
      <div class="subtit">
        {{$t("home.community_tip1")}}<br/>
        {{$t("home.community_tip2")}}
      </div>
      <v-row class="links">
        <v-col cols="6" md="3"><a class="d-flex flex-column align-center" href="https://twitter.com/callchainLedger" target="_blank">
          <v-icon x-large>fa-twitter</v-icon>
          <div class="txt">Twitter</div>
        </a></v-col>
        <v-col cols="6" md="3"><a class="d-flex flex-column align-center" href="https://t.me/callchain_group" target="_blank">
          <v-icon x-large>fa-telegram</v-icon>
          <div class="txt">Telegram</div>
        </a></v-col>
        <v-col cols="6" md="3"><a class="d-flex flex-column align-center" href="https://github.com/callchain" target="_blank">
          <v-icon x-large>fa-github</v-icon>
          <div class="txt">Github</div>
        </a></v-col>
        <v-col cols="6" md="3"><a  class="d-flex flex-column align-center" href="https://callchain.medium.com" target="_blank">
          <v-icon x-large>fa-medium</v-icon>
          <div class="txt">Medium</div>
        </a></v-col>
      </v-row>
    </div>
    <div class="sec7 max-940">
      <div class="tit">{{$t("home.subscription")}}</div>
      <div class="subtit">{{$t("home.subscription_tip")}}</div>
      <div class="ipt">
        <input type="text" placeholder="" />
        <div class="btn">{{$t("home.subscribe")}}</div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
import 'swiper/swiper-bundle.css'

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        direction: 'vertical',
        height: 32,
        autoplay: true,
        loop: true,
        speed: 500
        // Some Swiper option/callback...
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  #home {
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .swiper-container {
      height: 32px;
      overflow: hidden;
      line-height: 32px;
      width: 940px;
      margin-right: 0;
      margin-left: 8px;
    }
    .notice-list {
      overflow: hidden;
      width: 100%;
      justify-content: center;
      margin-top: 80px;
    }
    .notice {
      a {
        color: #333;
        max-width: 750px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .sec1 {
      height: 460px;
      .slogan {
        line-height: 1;
        width: 280px;
        .tit {
          font-size: 60px;
        }
        .txt {
          font-size: 20px;
        }
      }
      video {
        //height: 460px;
        height: 300px;
      }
    }

    .sec2 {
      padding-top: 150px;
      padding-bottom: 80px;
      .art {
        margin-left: 50px;
      }
      .tit {
        font-size: 40px;
      }
      .txt {
        font-size: 20px;
        line-height: 32px;
      }
    }
    .sec3 {
      padding: 80px 0;
      .tit {
        font-size: 48px;
      }
    }
    .timeline-list {
      display: flex;
      line-height: 32px;
      text-align: center;
      padding-top: 22px;
      margin: 60px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 9px;
        height: 4px;
        background-color: rgb(9, 64, 42);
      }
      .time {
        color: #c91c46;
        font-size: 20px;
        margin-top: 10px;
      }
      .txt {
        font-size: 20px;
        line-height: 32px;
      }
      &_item {
        width: 180px;
        margin: 8px;
        position: relative;
        &:last-of-type {
          margin-top: 18px;
        }
        &:before {
          content: '';
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 32px;
          background: url("../assets/img/call.png") no-repeat center center;
          background-size: 100%;
        }
      }
      .start, .end {
        &:before {
          background: none;
          top: -26px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #c91c46;
        }
      }
      .end:before {
        top: -35px;
        transition: all .5s;
        animation: zoomIn 1s ease-in-out infinite;
      }
      @keyframes zoomIn {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.3);
        }
      }
    }
    .sec5 {
      .tit {
        font-size: 48px;
        color: #c91c46;
        text-align: center;
      }
      .band-list {
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

      }
    }
    .sec6 {
      padding-top: 120px;
      margin: 0 auto;
      .tit {
        font-size: 48px;
        color: #c91c46;
        text-align: center;
      }
      .subtit {
        text-align: center;
      }
      .links {
        margin-top: 30px;
        img {
          width: 64px;
        }
        .col {
          justify-content: center;
          display: inline-flex;
        }
        a {
          color: #333;
          text-decoration: none;
          text-align: center;
          .txt {
            margin-top: 10px;
          }
          .v-image {
            transition: all .5s ease-in-out;
          }
          .v-image:hover {
            transform: scale(1.2);
          }
        }
      }
    }
    .sec7 {
      margin-top: 80px;
      padding: 75px 0 100px;
      background-color: rgb(254, 191, 201);
      .tit {
        font-size: 48px;
        text-align: center;
      }
      .subtit {
        text-align: center;
      }
      .ipt {
        display: flex;
        margin: 16px auto 0;
        width: 400px;
        input {
          flex: 1 1;
          background-color: #fff;
          border-radius: 4px;
          text-indent: 16px;
        }
        .btn {
          width: 80px;
          height: 32px;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
          border-radius: 4px;
          margin-left: 20px;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      .tit {
        font-size: 24px!important;
        text-align: left!important;
      }
      .subtit {
        font-size: 12px!important;
        line-height: 20px;
        text-align: left!important;
      }
      .sec1 {
        flex-direction: column!important;
        align-items: flex-start!important;
        justify-content: center!important;
        padding: 30px 0;
        height: auto;
        video {
          margin-top: 30px;
          width: 100%;
          height: 200px;
          object-fit: fill;
        }
      }
      .notice-list {
        margin-top: 0;
      }
      .sec2 {
        flex-direction: column!important;
        align-items: center!important;
        padding: 30px 0;
        .v-image {
          width: 290px!important;
        }
        .art {
          margin-left: 0!important;
          margin-top: 28px;
        }
        .txt {
          font-size: 12px;
          line-height: 20px;
        }
      }
      .sec3 {
        padding: 30px 0;
        .v-image {
          width: 108px!important;
        }
        .tit {
          margin-bottom: 40px;
        }
        .fz-20 {
          font-size: 16px;
          &:nth-of-type(odd) {
            margin-left: 16px;
          }
          &:nth-of-type(even) {
            margin-right: 16px;
          }
        }
        .d-flex {
          flex-direction: row-reverse;
          margin-bottom: 60px;
        }
      }
      .sec4 {
        padding: 30px 0;
        .timeline-list {
          flex-direction: column;
          margin: 60px 0 40px;
          padding: 0;
          padding-left: 60px;
          &:before {
            left: 28px;
            top: 0;
            bottom: 0;
            width: 4px;
            right: auto;
            height: 100%;
          }
          .time, .txt {
            font-size: 14px;
            text-align: left;
          }
        }
        .timeline-list_item {
          padding-left: 40px;
        }
        .timeline-list_item:before {
          top: 50%;
          left: -38px;
          transform: translate(-50%, -50%);
        }
        .timeline-list .end:before {
          left: -46px;
        }
      }
      .sec5 {
        padding: 30px 0;
        .v-image {
          width: 80px!important;
          height: 80px!important;
        }
      }
      .sec6 {
        padding: 30px 0;
      }
      .sec7 {
        margin-top: 0;
        padding: 32px 24px 24px;
        .subtit {
          margin-top: 10px;
        }
        .ipt {
          margin-top: 38px;
          flex-direction: column;
          width: 100%;
          height: 90px;
          .btn {
            margin-left: 0;
            margin-top: 26px;
          }
        }
      }
    }
  }
</style>