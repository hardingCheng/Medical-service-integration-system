<template>
  <div class="hospital-selection">
    <h3>医院</h3>
    <div class="hospital-info">
      <div class="grade-info">
        <span>等级：</span>
        <div class="grade">
          <span
            class="actve"
            :class="[gradeid === item.gradeid ? 'active' : '']"
            @click="gradesfind(item.gradeid)"
            v-for="(item, index) in grades"
            :key="index"
            >{{ item.title }}</span
          >
        </div>
      </div>
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
        <router-link to="/hospitalinfo/1231">
          <Card
            :bordered="true"
            :padding="10"
            v-for="(item, index) in hospitalnfolin"
            :key="index"
            :class="[index % 2 === 1 ? 'card-style-right' : 'card-style-left']"
          >
            <p slot="title">{{ item.htitle }}</p>
            <div class="cardnews clearfix">
              <div class="card-left">
                <div class="grade">
                  <Icon type="ios-ribbon" size="16" />
                  <p>{{ item.hgrade }}</p>
                </div>
                <div class="time">
                  <Icon type="md-alarm" size="16" />
                  <p>{{ item.htime }}</p>
                </div>
              </div>
              <div class="card-right">
                <img :src="item.himg" alt="" />
              </div>
            </div>
          </Card>
        </router-link>
      </Scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "HospitalSelection",
  data() {
    return {
      gradeid: "全部",
      regionid: "全部",
      grades: [
        {
          title: "全部",
          gradeid: "全部",
        },
        {
          title: "三级医院",
          gradeid: "三",
        },
        {
          title: "二级医院",
          gradeid: "二",
        },
        {
          title: "一级医院",
          gradeid: "一",
        },
      ],
      regions: [
        {
          title: "全部",
          regionid: "全部",
        },
        {
          title: "东城区",
          regionid: "东城区",
        },
        {
          title: "西城区",
          regionid: "西城区",
        },
        {
          title: "朝阳区",
          regionid: "朝阳区",
        },
        {
          title: "丰台区",
          regionid: "丰台区",
        },
        {
          title: "石景山区",
          regionid: "石景山区",
        },
        {
          title: "海淀区",
          regionid: "海淀区",
        },
        {
          title: "门头沟区",
          regionid: "门头沟区",
        },
        {
          title: "房山区",
          regionid: "房山区",
        },
        {
          title: "通州区",
          regionid: "通州区",
        },
        {
          title: "顺义区",
          regionid: "顺义区",
        },
        {
          title: "大兴区",
          regionid: "大兴区",
        },
        {
          title: "昌平区",
          regionid: "昌平区",
        },
        {
          title: "怀柔区",
          regionid: "怀柔区",
        },
        {
          title: "平谷区",
          regionid: "平谷区",
        },
        {
          title: "密云区",
          regionid: "密云区",
        },
        {
          title: "延庆区",
          regionid: "延庆区",
        },
      ],
      hospitalinfo: [],
      hospitalnfolin: [],
      text: "",
    };
  },
  components: {},
  created() {
    this.getCovidClinicList();
  },
  methods: {
    gradesfind(data) {
      this.gradeid = data;
      this.getCovidClinicList();
    },
    regionsfind(data) {
      this.regionid = data;
      this.getCovidClinicList();
    },
    async getCovidClinicList() {
      await this.$api
        .getHospitalDetailInfo({
          params: {
            gradeid: this.gradeid,
            regionid: this.regionid,
          },
        })
        .then((res) => {
          this.hospitalnfolin = [];
          this.hospitalinfo = res.data;
          let len;
          if (this.hospitalinfo.length < 10) {
            len = this.hospitalinfo.length;
          } else {
            len = 10;
          }
          for (let i = 0; i < len; i++) {
            this.hospitalnfolin.push(this.hospitalinfo[i]);
          }
        });
    },
    async getHospitalInfo() {
      await this.$api.getHospitalInfo().then((res) => {
        this.hospitalinfo = res.data;
      });
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
        }, 500);
      });
    },
  },
};
</script>
<style>
.hospital-selection {
  position: relative;
  margin: 20px;
}
.grade-info {
  margin-top: 20px;
  margin-bottom: 20px;
}
.grade-info .grade {
  position: absolute;
  left: 40px;
  top: 60px;
  overflow: hidden;
}
.grade span {
  margin: 0 10px;
  cursor: pointer;
}
.region-info .region {
  position: absolute;
  left: 40px;
  top: 80px;
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
.card-left {
  position: absolute;
  left: 0;
  top: 25px;
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
.card-right {
  float: right;
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
