import base from "../api/base";
import axios from "../../utils/http";

const getData = {
  //获取推荐歌曲
  getHospitalInfo() {
    return axios.get(base.baseURL + base.getHInfo);
  },
  getHospitalDetailInfo(params) {
    return axios.get(base.baseURL + base.getDInfo, params);
  },
  getDepList() {
    return axios.get(base.baseURL + base.getDepList);
  },
  getDepDetailList() {
    return axios.get(base.baseURL + base.getDepDetailList);
  },
  getCovidClinicList(params) {
    return axios.get(base.baseURL + base.getCovidClinicList, params);
  }
};

export default getData;
