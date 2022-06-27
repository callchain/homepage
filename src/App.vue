<template>
  <v-app id="app">
    <v-app-bar height="80" class="white flex-grow-0 v-app-bar--hide-shadow">
      <div class="logo d-flex">
        <v-img src="@/assets/img/logo.png" width="120"></v-img>
      </div>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
            text
            class="nav"
        >
          <a href="" class="text-decoration-none fz-16 red--text">
            {{$t('app.home')}}
          </a>
        </v-btn>
        <v-menu bottom offset-y open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
                text
                class="nav"
            >
              <a href="" class="text-decoration-none fz-16 red--text">
                {{$t('app.developer')}}
              </a>
              <v-icon color="red">fa-angle-down</v-icon>
            </v-btn>
          </template>
          <div class="menu-list">
            <a class="menu-list-item" href="https://github.com/callchain/call-lib/wiki" target="_blank">
              <v-icon color="primary">fa-code</v-icon>
              <div class="txt">
                <div class="fz-16 red--text">{{$t('app.develop_doc')}}</div>
                <div class="fz-12 red--text">{{$t('app.develop_doc_tip')}}</div>
              </div>
            </a>
            <a class="menu-list-item" href="https://github.com/callchain" target="_blank">
              <v-icon color="primary">fa-github</v-icon>
              <div class="txt">
                <div class="fz-16 red--text">{{$t('app.github')}}</div>
                <div class="fz-12 red--text">{{$t('app.github_tip')}}</div>
              </div>
            </a>
          </div>
        </v-menu>
        <v-menu bottom offset-y open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
                text
                class="nav"
            >
              <a href="" class="text-decoration-none fz-16 red--text">
                {{$t('app.ecosystem')}}
              </a>
              <v-icon color="red">fa-angle-down</v-icon>
            </v-btn>
          </template>
          <div class="menu-list">
            <div class="tit fz-16 red--text">{{$t('app.explorer')}}</div>
            <a class="menu-list-item" href="http://block.callchain.cc/" target="_blank">
              <v-icon color="primary">fa-chrome</v-icon>
              <div class="txt">
                <div class="fz-16 red--text">{{$t('app.explorer_item')}}</div>
                <div class="fz-12 red--text">{{$t('app.explorer_item_tip')}}</div>
              </div>
            </a>
            <div class="tit fz-16 red--text">{{$t('app.wallet')}}</div>
            <a class="menu-list-item" href="https://wallet.callchain.cc/" target="_blank">
              <v-icon color="primary">fa-briefcase</v-icon>
              <div class="txt">
                <div class="fz-16 red--text">{{$t('app.wallet_item1')}}</div>
                <div class="fz-12 red--text">{{$t('app.wallet_item1_tip')}}</div>
              </div>
            </a>
            <a class="menu-list-item" href="https://wallet.callchain.cc/" target="_blank">
              <v-icon color="primary">fa-link</v-icon>
              <div class="txt">
                <div class="fz-16 red--text">CallMask</div>
                <div class="fz-12 red--text">Web extension wallet for Callchain</div>
              </div>
            </a>
            <a class="menu-list-item" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xcf7c87cb192bf21660b360f3f270400a42070aea" target="_blank">
              <v-icon color="primary">fa-compass</v-icon>
              <div class="txt">
                <div class="fz-16 red--text">{{$t('app.wallet_item2')}}</div>
                <div class="fz-12 red--text">{{$t('app.wallet_item2_tip')}}</div>
              </div>
            </a>
            <div class="tit fz-16 red--text">{{$t('app.bridge')}}</div>
            <a class="menu-list-item" href="https://bridge.callchain.cc/" target="_blank">
              <v-icon color="primary">fa-compress</v-icon>
              <div class="txt">
                <div class="fz-16 red--text">{{$t('app.bridge_item')}}</div>
                <div class="fz-12 red--text">{{$t('app.bridge_item_tip')}}</div>
              </div>
            </a>
          </div>
        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-menu class="ml-auto" bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="red"
              v-bind="attrs"
              v-on="on"
              width="94"
              class="px-3 ml-md-0 ml-auto btn-lang hidden-sm-and-down"
              outlined
          >
            <span class="red--text flex-grow-1 fz-14">{{ langTxt }}</span>
            <v-icon color="red">mdi-menu-down</v-icon>
          </v-btn>
          <v-btn
              color="red"
              v-bind="attrs"
              v-on="on"
              width="94"
              class="px-3 ml-md-0 ml-auto btn-lang hidden-sm-and-up"
              text
          >
            <span class="red--text flex-grow-1 fz-14">{{ langTxt }}</span>
            <v-icon color="red">mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in langArr"
              :key="index"
              @click="onChangeLang(item)"
          >
            <v-list-item-title class="black--text">{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-icon class="font-weight-bold red--text hidden-md-and-up" @click="onToggleDrawer">fa-bars</v-icon>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <w-footer></w-footer>
    <v-overlay :value="drawer">
      <v-list class="m-nav">
        <v-list-item class="border-b">
          <v-list-item-title @click="onToggleDrawer" class="red--text">{{$t('app.home')}}</v-list-item-title>
        </v-list-item>
        <v-list-group
            :value="false"
        >
          <template class="border-b" v-slot:activator>
            <v-list-item-title class="red--text">{{$t('app.developer')}}</v-list-item-title>
          </template>

          <v-list
              :value="true"
              no-action
              sub-group
          >

            <v-list-item
                link
            >
              <v-list-item-title class="pl-5 d-flex nav">
                <v-icon color="primary">fa-code</v-icon>
                <div class="txt pl-4">
                  <div class="fz-16 red--text">{{$t('app.develop_doc')}}</div>
                  <div class="fz-12 red--text">{{$t('app.develop_doc_tip')}}</div>
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                link
            >
              <v-list-item-title class="pl-5 d-flex nav">
                <v-icon color="primary">fa-github</v-icon>
                <div class="txt pl-4">
                  <div class="fz-16 red--text">{{$t('app.github')}}</div>
                  <div class="fz-12 red--text">{{$t('app.github_tip')}}</div>
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list>

        </v-list-group>
        <v-list-group
            :value="false"
        >
          <template class="border-b" v-slot:activator>
            <v-list-item-title class="red--text">{{$t('app.ecosystem')}}</v-list-item-title>
          </template>

          <v-list
              :value="true"
              no-action
              sub-group
          >

            <v-list-item
                link
            >
              <v-list-item-title class="pl-5 d-flex nav">
                <v-icon color="primary">fa-chrome</v-icon>
                <div class="txt pl-4">
                  <div class="fz-16 red--text">{{$t('app.explorer_item')}}</div>
                  <div class="fz-12 red--text">{{$t('app.explorer_item_tip')}}</div>
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                link
            >
              <v-list-item-title class="pl-5 d-flex nav">
                <v-icon color="primary">fa-briefcase</v-icon>
                <div class="txt pl-4">
                  <div class="fz-16 red--text">{{$t('app.wallet_item1')}}</div>
                  <div class="fz-12 red--text">{{$t('app.wallet_item1_tip')}}</div>
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                link
            >
              <v-list-item-title class="pl-5 d-flex">
                <v-icon color="primary">fa-compress</v-icon>
                <div class="txt pl-4">
                  <div class="fz-16 red--text">{{$t('app.bridge_item')}}</div>
                  <div class="fz-12 red--text">{{$t('app.bridge_item_tip')}}</div>
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list>

        </v-list-group>

      </v-list>
    </v-overlay>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';
import WFooter from '@/components/Footer';

export default {
  components: {WFooter},
  computed: mapState({
    connect: (state) => state.connect
  }),
  data: () => ({
    links: [
      {text: 'Home', url: '/'},
      {text: 'Developer', url: '/'},
      {text: 'Ecosystem', url: '/'},
    ],
    lang: 'en-US',
    langTxt: 'English',
    langArr: [{text: '简体中文', value: 'zh-CN'}, {text: 'English', value: 'en'}],
    activeIdx: 0,
    drawer: false,
    group: null,
  }),
  methods: {
    onChangeLang({value, text}) {
      this.lang = value;
      this.langTxt = text;
      this.$i18n.locale = value;
    },
    onToggleDrawer() {
      this.drawer = !this.drawer;
    },
  },

  mounted() {
    this.$i18n.locale = this.lang;
  }
}
</script>

<style lang="scss">
#app {
  //background-color: rgb(245, 245, 245);
  overflow: hidden;

  .nav.active {
    border-bottom: 2px solid #c91c46;
  }

  .drawer {
    top: 0 !important;
    max-height: none;
    height: 100vh !important;
  }

  .v-btn {
    text-transform: none;
  }

  .container--fluid {
    max-width: 1440px;
  }

  .c-1200 {
    max-width: 1200px;
  }

  .v-toolbar__content {
    padding: 20px;
  }

  .logo {
    padding-left: 120px;
  }

  .btn-lang {
    width: 94px;
    height: 26px;
    font-size: 12px;
  }

  .menu-list {
    width: 280px;
    padding: 30px 15px;
    background-color: #fff;
    .tit {
      margin-bottom: 8px;
    }
    &-item {
      display: flex;
      margin-bottom: 8px;
      cursor: pointer;
      &:last-of-type {
        margin-bottom: 0;
      }
      .txt {
        margin-left: 15px;
      }
      &:link,a:visited{
        text-decoration:none;
      }
      &:hover{
        text-decoration:underline;
      }

    }
  }

  @media screen and (max-width: 1000px) {
    .logo {
      padding-left: 0;
    }
    .v-overlay {
      top: 80px;
    }
    .m-nav {
      position: fixed;
      top: 80px;
      right: 0;
      left: 0;
      background-color: #fff;
      border-top: 1px solid #c91c46;
      padding: 0;
      .v-list {
        background-color: #fff;
      }
      .v-list-item {
        padding: 0 24px;
      }
      .border-b {
        border-bottom: 1px solid #c91c46;
      }
      .v-list-group {
        border-bottom: 1px solid #c91c46;
      }
      .v-icon {
        color: #c91c46;
      }
      .txt {
        line-height: 1.5;
      }
      .nav {
        height: 50px;
      }
    }
  }

}

.br-8 {
  border-radius: 8px;
}

.br-16 {
  border-radius: 16px;
}

.pointer {
  cursor: pointer;
}

.max-450 {
  max-width: 450px;
}

.max-360 {
  max-width: 360px;
}

.max-1200 {
  max-width: 1200px;
}

.max-1100 {
  max-width: 1100px;
}

.max-940 {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.center-v-x {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center-h-x {
  display: flex;
  justify-content: center;
}

.wt-10 {
  width: 100%;
}

.wt-5 {
  width: 50%;
}

.wt-86 {
  width: 86%;
}

.h-50 {
  height: 50px;
}

.fz-12 {
  font-size: 12px;
}

.fz-14 {
  font-size: 14px;
}

.fz-16 {
  font-size: 16px;
}

.fz-18 {
  font-size: 18px;
}

.fz-20 {
  font-size: 20px;
}

.fz-24 {
  font-size: 24px;
}

.fz-30 {
  font-size: 30px;
}

.fz-48 {
  font-size: 48px;
}
</style>
