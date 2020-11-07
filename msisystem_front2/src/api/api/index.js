import base from '../api/base'
import axios from '../../utils/http'

const getData = {
    //获取推荐歌曲
    getTodayRcommend(){
        return axios.get(base.baseURL+base.type)
    }
}

export default getData
