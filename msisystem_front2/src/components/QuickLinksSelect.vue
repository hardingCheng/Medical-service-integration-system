<template>
  <div class="hospital-selection">
    <div class="hospital-info">
      <div class="region-info">
        <span>地区：</span>
        <div class="region">
          <span
            class="actve"
            :class="[regionid === item.regionid ? 'active' : '']"
            @click="regionsfind(item.regionid)"
            v-for="(item, index) in regions"
            :key="index"
            >{{ item.title }}</span
          >
        </div>
      </div>
    </div>
    <div class="hospital-info-show">
        <Scroll :on-reach-bottom="handleReachBottom" height="600">
          <Card
            :bordered="true"
            :padding="0"
            v-for="(item, index) in hospitalnfolin"
            :key="index"
            class="card-style"
          >
            <p slot="title">{{ item.title }}</p>
            <div class="cardnews clearfix">
              <div class="card-left">
                  <div class="outpatient">
                    <Alert style=" padding-right:25px">核酸检测门诊</Alert>
                  </div>
                 
              </div>
              <div class="card-right">
                <img :src="item.himg" alt="" />
              </div>
            </div>
          </Card>
        </Scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "HospitalSelection",
  data() {
    return {
      regionid: 0,
      regions: [
        {
          title: "全部",
          regionid: 0,
        },
        {
          title: "东城区",
          regionid: 1,
        },
        {
          title: "西城区",
          regionid: 2,
        },
        {
          title: "朝阳区",
          regionid: 3,
        },
        {
          title: "丰台区",
          regionid: 4,
        },
        {
          title: "石景山区",
          regionid: 5,
        },
        {
          title: "海淀区",
          regionid: 6,
        },
        {
          title: "门头沟区",
          regionid: 7,
        },
        {
          title: "房山区",
          regionid: 8,
        },
        {
          title: "通州区",
          regionid: 9,
        },
        {
          title: "顺义区",
          regionid: 10,
        },
        {
          title: "大兴区",
          regionid: 11,
        },
        {
          title: "昌平区",
          regionid: 12,
        },
        {
          title: "怀柔区",
          regionid: 13,
        },
        {
          title: "平谷区",
          regionid: 14,
        },
        {
          title: "密云区",
          regionid: 15,
        },
        {
          title: "延庆区",
          regioni: 16,
        },
      ],
      hospitalinfo: [
        {
          title: "北京协和医院",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23176337663806575.png"),
        },
        {
          title: "中国人民解放军总医院（301医院）",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23177271556061774.png"),
        },
        {
          title: "北京第一人民医院",
          grade: "三级甲等",
          time: "16:00",
          himg: require("../static/23176618472499403.png"),
        },
        {
          title: "北京大学人民医院",
          grade: "三级甲等",
          time: "06:00",
          himg: require("../static/23177084467557645.png"),
        },
        {
          title: "北京协和医院",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23176337663806575.png"),
        },
        {
          title: "中国人民解放军总医院（301医院）",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23177271556061774.png"),
        },
        {
          title: "北京第一人民医院",
          grade: "三级甲等",
          time: "16:00",
          himg: require("../static/23176618472499403.png"),
        },
        {
          title: "北京大学人民医院",
          grade: "三级甲等",
          time: "06:00",
          himg: require("../static/23177084467557645.png"),
        },
        {
          title: "北京协和医院",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23176337663806575.png"),
        },
        {
          title: "中国人民解放军总医院（301医院）",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23177271556061774.png"),
        },
        {
          title: "北京第一人民医院",
          grade: "三级甲等",
          time: "16:00",
          himg: require("../static/23176618472499403.png"),
        },
        {
          title: "北京大学人民医院",
          grade: "三级甲等",
          time: "06:00",
          himg: require("../static/23177084467557645.png"),
        },
        {
          title: "北京协和医院",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23176337663806575.png"),
        },
        {
          title: "中国人民解放军总医院（301医院）",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23177271556061774.png"),
        },
        {
          title: "北京第一人民医院",
          grade: "三级甲等",
          time: "16:00",
          himg: require("../static/23176618472499403.png"),
        },
        {
          title: "北京大学人民医院",
          grade: "三级甲等",
          time: "06:00",
          himg: require("../static/23177084467557645.png"),
        },
        {
          title: "北京协和医院",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23176337663806575.png"),
        },
        {
          title: "中国人民解放军总医院（301医院）",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23177271556061774.png"),
        },
        {
          title: "北京第一人民医院",
          grade: "三级甲等",
          time: "16:00",
          himg: require("../static/23176618472499403.png"),
        },
        {
          title: "北京大学人民医院",
          grade: "三级甲等",
          time: "06:00",
          himg: require("../static/23177084467557645.png"),
        },
        {
          title: "北京协和医院",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23176337663806575.png"),
        },
        {
          title: "中国人民解放军总医院（301医院）",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23177271556061774.png"),
        },
        {
          title: "北京第一人民医院",
          grade: "三级甲等",
          time: "16:00",
          himg: require("../static/23176618472499403.png"),
        },
        {
          title: "北京大学人民医院",
          grade: "三级甲等",
          time: "06:00",
          himg: require("../static/23177084467557645.png"),
        },
        {
          title: "北京协和医院",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23176337663806575.png"),
        },
        {
          title: "中国人民解放军总医院（301医院）",
          grade: "三级甲等",
          time: "8:30",
          himg: require("../static/23177271556061774.png"),
        },
        {
          title: "北京第一人民医院",
          grade: "三级甲等",
          time: "16:00",
          himg: require("../static/23176618472499403.png"),
        },
        {
          title: "北京大学人民医院",
          grade: "三级甲等",
          time: "06:00",
          himg: require("../static/23177084467557645.png"),
        },
      ],
      hospitalnfolin: [],
      text: "",
    };
  },
  components: {},
  mounted() {
    this.getHospitalInfo();
  },
  methods: {
    gradesfind(data) {
      this.gradeid = data;
      console.log(this.gradeid);
    },
    regionsfind(data) {
      this.regionid = data;
      console.log(this.gradeid, this.regionid);
    },
    getHospitalInfo() {
      let len;
      if (this.hospitalinfo.length < 10) {
        len = this.hospitalinfo.length;
      } else {
        len = 10;
      }
      for (let i = 0; i < len; i++) {
        this.hospitalnfolin.push(this.hospitalinfo[i]);
      }
    },
    handleReachBottom() {
      return new Promise((resolve) => {
        setTimeout(() => {
          let len = 10;
          if (this.hospitalinfo.length === this.hospitalnfolin.length) {
            this.$Message["error"]({
              background: true,
              content: "已经没有数据了",
            });
            console.log(1);
          }
          let len1 = this.hospitalnfolin.length;
          if (this.hospitalinfo.length - len1 < 10) {
            len = this.hospitalinfo.length - len1;
          }
          for (let i = 0; i < len; i++) {
            this.hospitalnfolin.push(this.hospitalinfo[len1 + i]);
          }
          resolve();
        }, 2000);
      });
    },
  },
};
</script>

<style scoped>
.hospital-selection {
  position: relative;
  margin: 20px;
}
.region-info .region {
  position: absolute;
  left: 40px;
  top: -5px;
}
.region span {
  display: inline-block;
  margin: 5px 15px;
  cursor: pointer;
}
.active {
  color: #4490f1;
}
.hospital-info-show {
  margin-top: 50px;
}
.grade {
  margin-top: -15px;
}
.time {
  margin-top: 20px;
}
.card-left p {
  display: inline-block;
  margin: 0 10px;
}
.card-right img {
  width: 80px;
  height: 80px;
}
.col-style {
  margin-bottom: 10px;
}
.clearfix:after {
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  /* 触发 hasLayout */
  zoom: 1;
}
.cardnews {
  position: relative;
}
.card-style {
    margin-bottom: 10px;
}
.card-style-left {
  float: left;
  margin-bottom: 10px;
  width: 325px;
}
.card-style-right {
  float: right;
  margin-bottom: 10px;
  width: 325px;
}
</style>
