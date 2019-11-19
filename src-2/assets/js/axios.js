import {Component} from "react";

import axios from "axios";

const baseurl = 'http://localhost:100';//后端接口的地址

Component.prototype.$axios=axios
Component.prototype.$baseurl=baseurl

export {
    axios,
    baseurl
}