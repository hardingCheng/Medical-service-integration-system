<template>
  <div class="quick-links">
    <Card
      class="quick-links-card"
      style="width: 240px"
      :padding="10"
      v-for="(items, index) in quicklinks"
      :key="index"
      :bordered="false"
    >
      <p slot="title">
        <Icon
          v-if="items.type.num === 1"
          :type="items.type.icontype"
          size="20"
        />
        {{ items.title }}
      </p>
      <router-link
        slot="extra"
        :to="{
          name: items.mainulrinfo.url,
          params: {
            type: items.mainulrinfo.type,
            info: items.mainulrinfo.context,
          },
        }"
      >
        全部<Icon type="ios-arrow-forward" size="18" />
      </router-link>
      <ul>
        <li v-for="(item, index) in items.data" :key="index">
          <router-link :to="item.url">{{ setNameInfo(item.name) }}</router-link>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  name: "QuickLinks",
  components: {},
  data() {
    return {
      quicklinks: [
        {
          title: "核酸检测",
          type: {
            num: 0,
            icontype: "",
          },
          mainulrinfo: {
            url: "nucleicacid",
            type: "0",
            context: "all",
          },
          data: [
            {
              name: "北京大学人民医院",
              url: "https://movie.douban.com/subject/1292052/",
            },
            {
              name: "北京大学人民医院",
              url: "https://movie.douban.com/subject/1292052/",
            },
            {
              name: "北京大学人民医院",
              url: "https://movie.douban.com/subject/1292052/",
            },
            {
              name: "北京大学人民医院",
              url: "https://movie.douban.com/subject/1292052/",
            },
          ],
        },
        {
          title: "常见科室",
          type: {
            num: 0,
            icontype: "",
          },
          mainulrinfo: {
            url: "departmentlist",
            type: "0",
            context: "all",
          },
          data: [
            {
              name: "神经内科",
              url: "https://movie.douban.com/subject/1292052/",
            },
            {
              name: "神经内科",
              url: "https://movie.douban.com/subject/1292052/",
            },
            {
              name: "神经内科",
              url: "https://movie.douban.com/subject/1292052/",
            },
            {
              name: "神经内科",
              url: "https://movie.douban.com/subject/1292052/",
            },
          ],
        },
        {
          title: "平台公告",
          type: {
            num: 1,
            icontype: "md-volume-up",
          },
          mainulrinfo: {
            url: "platformbulletinlist",
            type: "0",
            context: "a",
          },
          data: [
            {
              name: "北京市第一中西医结合医院东坝院区通知",
              url: "/platformbulletin/3/105",
            },
            {
              name: "北京市第一中西医结合医院东坝院区通知",
              url: "/platformbulletin/3/106",
            },
            {
              name: "北京市第一中西医结合医院东坝院区通知",
              url: "/platformbulletin/3/107",
            },
          ],
        },
        {
          title: "停诊公告",
          type: {
            num: 1,
            icontype: "ios-clipboard",
          },
          mainulrinfo: {
            url: "platformbulletinlist",
            type: "0",
            context: "a",
          },
          data: [
            {
              name: "北京德尔康尼骨科医院骨科停诊公告",
              url: "/platformbulletin/3/105",
            },
            {
              name: "北京德尔康尼骨科医院骨科停诊公告",
              url: "/platformbulletin/3/105",
            },
            {
              name: "北京德尔康尼骨科医院骨科停诊公告",
              url: "/platformbulletin/3/105",
            },
          ],
        },
      ],
    };
  },
  methods: {
    setNameInfo(data) {
      if (data.length > 10) {
        return data.substring(0, 13) + "...";
      } else {
        return data;
      }
    },
  },
  mounted() {},
  computed: {},
};
</script>
<style scoped>
.quick-links-card {
  margin-bottom: 20px;
}
.quick-links-card li {
  margin-bottom: 10px;
}
</style>
