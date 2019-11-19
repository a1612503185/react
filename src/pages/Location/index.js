import React, {Component} from 'react';

import './index.css'

import $ from 'jquery'

class Index extends Component {

    componentDidMount(){
        this.getXYbyIP()

    }

     getXYbyIP() {
        var url="https://api.map.baidu.com/location/ip?ak=HQi0eHpVOLlRuIFlsTZNGlYvqLO56un3&coor=bd09ll";
        //百度 根据ip地址获取用户的经纬度（不是很准确）
        // 混合 app  hybrid APP(调取底层的硬件设备 gps)
        $.ajax({
            url:url,
            type: 'POST',
            dataType: 'JSONP',
            async: false,
            cache: true,  //是否缓存 可以为false
            success: function (data) {
                console.log( data );
                var jingdu = data.content.point.y;
                var weidu = data.content.point.x;

                var qq = window.qq;
                var map = new qq.maps.Map(document.getElementById("container"), {
                    center: new qq.maps.LatLng(jingdu, weidu),      // 地图的中心地理坐标
                    zoom: 18,     // 地图缩放级别
                    mapStyleId: 'style1',  // 该key绑定的style1对应于经典地图样式，若未绑定将弹出无权限提示窗
                });
                console.log(map.center)
                var marker = new qq.maps.Marker({
                    //设置Marker的位置坐标
                    position: new qq.maps.LatLng(37.80789920419703, 112.56275080159814),
                    //设置显示Marker的地图
                    map: map
                });

                marker.setDraggable(true);
            },
            error: function (data) {
            }
        });
    }

render() {
    return (
        <div id='container'>
            map
        </div>
    );
}

}

export default Index;