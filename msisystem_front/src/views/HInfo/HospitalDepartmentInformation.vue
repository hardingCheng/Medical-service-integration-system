<template>
  <div class="login">
    <div class="w">
      <div class="hp-main">
        <div class="hp-main-top">
          <HDetailInfo>
            <div class="hp-main-hdinfo">
              <div class="hp-main-slot-top">
                <h4>挂号规则</h4>
                <div class="registration-rules">
                  <span>预约周期：7天</span>
                  <span>放号时间：8：30</span>
                  <span>停挂时间：14：00</span>
                  <span>退号时间：就诊前一工作日14：00前取消</span>
                </div>
              </div>
              <div class="hp-main-slot-bottom">
                <h4>医院预约规则</h4>
                <div class="hospital-appointment-rules">
                  <p>
                    1.西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号。
                  </p>
                  <p>
                    2.东院区预约号取号地点：东院区老门诊楼一层大厅挂号窗口或新门诊楼各楼层挂号/收费窗口取号。
                  </p>
                </div>
              </div>
            </div>
          </HDetailInfo>
        </div>
        <div>
          <InformationList></InformationList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HDetailInfo from "../../components/HInfo/HDetailInfo.vue";
import InformationList from "../../components/InformationList";
export default {
  name: "HospitalDepartmentInformation",
  components: {
    HDetailInfo,
    InformationList,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>