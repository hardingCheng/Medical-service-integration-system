<template>
  <div class="hp-main-bottom">
    <div class="hp-main-bottom-title">
      <h3>医院科室列表</h3>
    </div>
    <div class="hp-main-bottom-context">
      <div class="context-left">
        <ul>
          <li v-for="(item, index) in datalist" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="context-right">
        <div class="context-right-main">
          <div class="context-right-main-top">
            <span>|</span>
            <span>血液内科(19人)</span>
          </div>
          <div class="context-right-main-bottom">
            <div class="context-right-main-context">
              <span>红斑狼疮:</span>
              <div class="doctor-selection">
                <ul>
                  <li>李蓉生(主任医师)</li>
                </ul>
              </div>
            </div>
            <div class="context-right-main-context">
              <span>白血病:</span>
              <div class="doctor-selection">
                <ul>
                  <li>单渊东(主任医师)</li>
                  <li>刘尔坤(主任医师)</li>
                  <li>赵永强(主任医师)</li>
                  <li>许莹(主任医师)</li>
                </ul>
              </div>
            </div>
            <div class="context-right-main-context">
              <span>淋巴瘤:</span>
              <div class="doctor-selection">
                <ul>
                  <li>赵永强(主任医师)</li>
                  <li>许莹(主任医师)</li>
                  <li>沈悌(主任医师)</li>
                  <li>周道斌(副主任医师)</li>
                </ul>
              </div>
            </div>
            <div class="context-right-main-context">
              <span>感冒:</span>
              <div class="doctor-selection">
                <ul>
                  <li>王书杰(副主任医师)</li>
                </ul>
              </div>
            </div>
            <div class="context-right-main-context">
              <span>过敏性紫:</span>
              <div class="doctor-selection">
                <ul>
                  <li>赵永强(主任医师)</li>
                  <li>段明辉(副主任医师)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="context-right-main">
          <div class="context-right-main-top">
            <span>|</span>
            <span>血液内科(19人)</span>
          </div>
          <div class="context-right-main-bottom">
              <div class="context-right-main-context">
                  <Table :columns="columns1" :data="data1">

                  </Table>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationList",
  components: {},
  data() {
    return {
      datalist: [
        "心脏外科(0人)",
        "男性学(1人)",
        "血液内科(19人)",
        "超声诊断(23人)",
        "肿瘤科(0人)",
        "输血科(0人)",
        "血液科(21人)",
        "放疗科(14人)",
        "口腔颌面外科(6人)",
        "体检中心(0人)",
        "普通妇科(0人)",
        "肿瘤内科(0人)",
        "中医骨科(4人)",
        "免疫内科(33人)",
        "男科学(0人)",
        "老年医学(0人)",
        "国际医疗部(0人)",
        "临床药理研究中心(0人)",
        "病案科(2人)",
        "物理医学康复科(2人)",
        "检验科(11人)",
        "药剂科(5人)",
        "神经科(68人)",
        "核医学科(6人)",
        "内分泌科(57人)",
        "基本外科(60人)",
        "妇科(67人)",
        "心外科(2人)",
        "心理医学科(2人)",
        "MICU(0人)",
        "重症医疗科（ICU）(0人)",
        "老年医学科(4人)",
        "肠外肠内营养科(1人)",
        "皮肤性病科(48人)",
        "妇泌尿(1人)",
        "口腔粘膜(3人)",
        "儿童泌尿外科(1人)",
        "男科(1人)",
        "病理科(21人)",
        "胰腺外科中心(2人)",
        "康复医学科(8人)",
        "理疗科(2人)",
        "临床药理中心(2人)",
        "加强医疗科(3人)",
        "计划生育科(10人)",
        "口腔牙体(3人)",
        "精神科(2人)",
        "超声诊断科(4人)",
        "口腔牙周(8人)",
        "口腔正畸(7人)",
        "针灸科(7人)",
        "妇绒癌(14人)",
        "口腔修复(10人)",
        "肿瘤化疗科(14人)",
        "急诊科(7人)",
        "乳腺外科(9人)",
        "介入医学科(5人)",
        "疼痛门诊(5人)",
        "肝脏外科(11人)",
        "麻醉科(41人)",
        "颌面外科(13人)",
        "血管外科(15人)",
        "营养科(11人)",
        "呼吸内科(38人)",
        "整形外科(18人)",
        "放射科(17人)",
        "产科(22人)",
        "心胸外科(24人)",
        "感染内科(18人)",
        "妇分泌(20人)",
        "变态反应科(19人)",
        "口腔科(29人)",
        "神经外科(18人)",
        "肾病内科(28人)",
        "泌尿外科(34人)",
        "普通内科(24人)",
        "儿科(21人)",
        "风湿免疫科(21人)",
        "骨科(57人)",
        "血液肿瘤科(23人)",
        "协和医院儿科(9人)",
        "消化内科(41人)",
        "中医科(38人)",
        "心内科(37人)",
        "耳鼻咽喉科(48人)",
        "眼科(59人)",
      ],
      columns1: [
        {
          title: "医生姓名",
          key: "name",
          width: 150,
          align: "center",
        },
        {
          title: "临床职称",
          key: "title",
          width: 150,
          align: "center",
        },
        {
          title: "擅长疾病",
          key: "disease",
          align: "center",
        },
      ],
      data1: [
        {
          name: "段明辉",
          title: "副主任医师",
          disease: "白血病,慢性淋巴细胞白血病，淋巴瘤",
        },
        {
          name: "庄俊玲",
          title: "主治医师",
          disease: "多发性骨髓瘤、白血病、淋巴瘤、出凝血",
        },
        {
          name: "沈悌",
          title: "主任医师",
          disease: "白血病,淋巴瘤,自体造血干细胞移植",
        },
        {
          name: "李蓉生",
          title: "主任医师",
          disease: "血液系统疾病,营养性贫血",
        },
        {
          name: "许莹",
          title: "主任医师",
          disease: "再生障碍性贫血、贫血、白血病、嗜酸性",
        },
        {
          name: "王书杰",		
          title: "副主任医师",
          disease: "再生障碍性贫血、贫血、白血病、嗜酸性",
        },
        {
          name: "韩冰",		
          title: "副主任医师",
          disease: "白血病、血液病、再生障碍性贫血、淋巴",
        },
        {
          name: "华宝来",		
          title: "主治医师",
          disease: "血友病",
        },
        {
          name: "赵永强",		
          title: "主任医师",
          disease: "出血及血栓性疾病、危重病的出凝血异常",
        },
        {
          name: "周道斌",		
          title: "副主任医师",
          disease: "白血病",
        },
        {
          name: "刘尔坤",		
          title: "主任主任医师医师",
          disease: "慢性粒细胞白血病、红细胞增多症、阵发",
        },
        {
          name: "焦力",		
          title: "主治医师",
          disease: "白血病",
        },
        {
          name: "蔡华聪",				
          title: "主治医师",
          disease: "再生障碍性贫血、血友病",
        },
        {
          name: "朱铁楠",				
          title: "主治医师",
          disease: "贫血、凝血功能障碍性疾病",
        },
        {
          name: "单渊东",						
          title: "主任医师",
          disease: "疑难血液病、白血病、恶性淋巴瘤、骨髓",
        },
        {
          name: "武永吉",						
          title: "主任医师",
          disease: "疑难血液病、多发性骨髓瘤、巨球蛋白血",
        },
        {
          name: "邹农",						
          title: "主任医师",
          disease: "贫血",
        },
        {
          name: "潘家绮",								
          title: "主任医师",
          disease: "出血及血栓性疾病、血友病的替代性治疗",
        },
        {
          name: "陈苗",								
          title: "主治医师",
          disease: "常见血液系统疾病",
        }
      ],
      valueDisabled: 3,
    };
  },
};
</script>
<style scoped>
.hp-main-bottom {
  margin-top: 30px;
}
.hp-main-bottom-title {
  margin-bottom: 30px;
}
.context-left {
  float: left;
  height: 500px;
  width: 160px;
  background-color: #f7fbff;
  overflow: auto;
}
.context-left ul {
  padding-top: 10px;
}
.context-left li {
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
  padding-left: 20px;
}
.context-left li:hover {
  background-color: #fff;
}
.context-right {
  float: right;
  width: 800px;
  height: 630px;
  overflow: auto;
}
.context-right-main {
  padding: 15px;
}
.context-right-main-bottom {
  margin-top: 20px;
}
.doctor-selection {
  float: right;
  width: 670px;
}
.context-right-main-context {
  overflow: hidden;
}
.context-right-main-context ul {
  display: inline-block;
}
.context-right-main-context span {
  display: inline-block;
  margin-right: 20px;
  text-align: right;
}
.context-right-main-context li {
  float: left;
  margin-right: 60px;
}
</style>ß