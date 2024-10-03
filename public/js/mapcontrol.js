// 初始化 ECharts 实例  
var chart = echarts.init(document.getElementById('main'));  
var mapHistory = [];
 // 初始化时包含初始地图的url的存储地图层级历史的栈  
  
// 地图配置函数  
function getMapConfig(geoJsonUrl) {  
    return {  
        series: [{  
            type: 'map',  
            mapType: 'custom',  
            roam: false,  
            label: {  
                show: true  
            },  
            data: [],  
            geo: {  
                map: 'custom',  
                roam: true,  
                label: {  
                    emphasis: {  
                        show: true 
                    }  
                },  
                itemStyle: {  
                    normal: {  
                        areaColor: '#323c48',  
                        borderColor: '#111'  
                    },  
                    emphasis: {  
                        areaColor: '#2a333d'  
                    }  
                }  
            },  
            emphasis: {  
                label: {  
                    show: true
                }  
            }  
        }]  
    };  
}  
  
// 加载 GeoJSON 数据  
function loadGeoJson(url, callback) {  
    fetch(url)  
        .then(response => response.json())  
        .then(data => {  
            echarts.registerMap('custom', data);  
            callback();  
        })  
        .catch(error => console.error('Error loading GeoJSON:', error));  
}  

// 一个对象，用于映射区域名称到目标页面的URL  
const regionToPageMap = {  
    '襄垣县': 'index.html', // 假设RegionA点击后跳转到pageA.html  
    // 'RegionB': 'pageB.html', 
    // 'RegionB': 'pageB.html',
    // 'RegionB': 'pageB.html',
    // 'RegionB': 'pageB.html',
    // 'RegionB': 'pageB.html',
    // 'RegionB': 'pageB.html',
    // 'RegionB': 'pageB.html',
    // 'RegionB': 'pageB.html',// 假设RegionB点击后跳转到pageB.html  
    // ... 添加更多区域和对应的页面URL  
    // 注意：这里的键（例如'RegionA'）应该与您的GeoJSON数据中的名称属性相匹配  
};  

 // 更新地图并管理历史栈  
function updateMap(url) {  
    
    if (mapHistory.length > 1) {  
        mapHistory.pop(); // 实际上我们不需要弹出，因为我们是通过URL来管理历史的  
    }  
      
    // 将新地图的URL压入历史栈  
    if (!mapHistory.includes(url)) {  
        // 如果新地图URL不在历史栈中，则添加它  
        mapHistory.push(url);       
       
    }  


    loadGeoJson(url, function () {  
        chart.clear();
        chart.setOption(getMapConfig(url));  
    });  
}  
  
// 初始地图加载  
var initialMapUrl = '山西省.json';  
updateMap(initialMapUrl);  
  
// 添加点击事件以实现下钻  
chart.on('click', function (params) {  
    if (params.componentType === 'series' && params.seriesType === 'map') {  
        // 检查当前下钻层级（如果需要的话）  
        // if (currentDrillDownLevel < MAX_DRILL_DOWN_LEVEL) {  
        //     // 允许下钻的代码（如果需要的话）  
        // } else {  
        //     // 如果达到最大下钻层级，可以选择不执行下钻操作（这部分代码现在被注释掉了）  
        // }  
  
        // 根据点击的区域名称获取目标页面的URL  
        const targetPageUrl = regionToPageMap[params.name];  
  
        // 检查是否定义了目标页面的URL  
        if (targetPageUrl) {  
            // 如果定义了，则跳转到该页面  
            window.location.href = targetPageUrl;  
        } else {  
            // 如果没有定义，可以选择执行下钻操作（如果需要的话）  
            // 注意：这里的下钻逻辑被注释掉了，因为您可能希望直接跳转到页面而不是下钻  
            var nextMapUrl = `${params.name}.json`;  
            updateMap(nextMapUrl);  
            // 或者，您可以选择显示一个错误消息或执行其他操作  
        }
}});  
  
// 添加返回按钮
document.getElementById('backButton').addEventListener('click', function () { 

    if (mapHistory.length > 1) { // 确保历史栈中至少有两个元素（初始地图和至少一个下钻层级）  
        // 弹出上一个地图的URL（实际上是获取倒数第二个元素，因为栈是后入先出的）  
        var previousMapUrl = mapHistory[mapHistory.length - 2];  
        // 更新地图到上一个层级  
        updateMap(previousMapUrl);  
 
    } else {  
        // 如果历史栈中只有一个元素（即初始地图），则不执行任何操作或给出提示  
        alert('已经是初始地图，无法返回上一级！');  
    }  
}); 
