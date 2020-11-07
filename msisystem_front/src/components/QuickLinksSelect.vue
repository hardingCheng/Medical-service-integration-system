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
            <p slot="title">{{ item.htitle }}</p>
            <div class="cardnews clearfix">
              <div class="card-style-left">
                  <div class="outpatient" >
                    <Alert style="padding:8px 0px 8px 0px" v-for="(iteminfo,index) in item.hclinicstr_covid" :key="index">{{iteminfo}}</Alert>
                  </div>
              </div>
              <div class="card-style-right">
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
      regionid: '全部',
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
      hospitalinfo:[],
      hospitalnfolin: [],
      text: "",
    };
  },
  components: {},
  mounted() {
    this.getCovidCinicList();
  },
  methods: {
    regionsfind(data) {
      this.regionid = data;
      console.log(this.gradeid, this.regionid);
      this.getCovidCinicList()
    },
    async getCovidCinicList(){
      await this.$api
        .getCovidClinicList({
          params: {
            regionid: this.regionid,
          },
        })
        .then((res) => {
          this.hospitalnfolin = []
          this.hospitalinfo = res.data;
          this.getHospitalInfo();
        });
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
        }, 1000);
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
  width: 800px;
}
.card-style-right {
  float: right;
  margin-bottom: 10px;
  width: 100px;
}
.card-style-left p {
  display: inline-block;
  margin: 0 10px;
}
.card-style-right img {
  width: 80px;
  height: 80px;
}
.card-style-left .outpatient {
  margin-top: 30px;
  margin-left: 5px;
}
.card-style-left .outpatient .ivu-alert-info{
    float: left;
    margin-right: 20px;
}
</style>
