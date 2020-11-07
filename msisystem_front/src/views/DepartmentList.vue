<template>
  <div class="departmentlist">
    <TopNav />
    <div class="w">
      <div class="departmentlist-main">
        <div class="departmentlist-main-title">
          <h2>科室目录</h2>
        </div>
        <div class="departmentlist-main-left">
          <ul
            class="departmentlist-main-list"
            v-for="(item, index) in deplist"
            :key="index"
          >
          <a :href="'#dep_data_'+item.dep_type" @click="mod_li_bdcolor(item.dep_type)">
            <li :class="[dep_type == item.dep_type ?'li_active':'']">{{ item.dep_name }}</li>
          </a>
          </ul>
        </div>
        <div class="departmentlist-main-right">
          <div class="departmentlist-main-right-tab" :class="[dep_type == items.dep_type ? 'departmentlist-main-right-tab_active' : '']" :id="'dep_data_'+items.dep_type" v-for="(items,index) in depdetaillist" :key="index">
            <div class="departmentlist-main-right-top">
              <span>|</span>
              {{items.dep_name}}
            </div>
            <div class="departmentlist-main-right-bottom">
              <Row type="flex">
                <Col class="dep_detail_style" span="6" v-for="(item, index) in items.dep_detail">
                <router-link to="nucleicacid"> {{item.dep_detail_title}}</router-link>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
export default {
  name: "DepartmentList",
  components: {
    TopNav,
  },
  data() {
    return {
      deplist: [],
      depdetaillist: [],
      dep_type:1
    };
  },
  methods: {
    async getDepList() {
      await this.$api.getDepList().then((res) => {
        this.deplist = res.data;
      });
    },
    async getDepDetailList() {
      await this.$api.getDepDetailList().then((res) => {
        this.depdetaillist = res.data;
        console.log(this.depdetaillist.length)
      });
    },
    mod_li_bdcolor(data){
      this.dep_type = data
    }
  },
  mounted() {
    this.getDepList(), this.getDepDetailList();
  },
};
</script>
<style scoped>
.departmentlist-main {
  position: relative;
  margin-top: 30px;
}
.departmentlist-main-title {
  margin-bottom: 30px;
}
.departmentlist-main-left {
  float: left;
  width: 180px;
  height: 750px;
  background-color: #f7fbff;
  overflow: auto;
  padding-top: 10px;
}
.li_active {
  background-color: #fff;
}
.departmentlist-main-list li {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
}
.departmentlist-main-list li:hover {
  background-color: #fff;
}

.departmentlist-main-right {
  float: right;
  width: 750px;
  height: 850px;
  overflow: auto;
}
.departmentlist-main-right-tab {
  margin-bottom: 20px;
}
.departmentlist-main-right-tab_active {
  background-color: rgb(246, 246, 246);
}
.dep_detail_style {
  margin-bottom: 20px;
}
.departmentlist-main-right-top {
  padding: 20px;
  font-weight:bold;
  color: black;
}
.departmentlist-main-right-bottom {
  padding-left: 20px;
  padding-right: 20px;
}
.departmentlist-main-list a {
  color: black;
}
</style>