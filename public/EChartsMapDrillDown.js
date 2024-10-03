import React, { useEffect, useRef, useState } from 'react';  
import * as echarts from 'echarts';  
  
const EChartsMapDrillDown = () => {  
  const chartRef = useRef(null);  
  const [mapHistory, setMapHistory] = useState(['山西省.json']); // 初始状态包含初始地图的URL  
  const [currentMapUrl, setCurrentMapUrl] = useState('山西省.json'); // 当前显示的地图URL  
  
  useEffect(() => {  
    // 初始化ECharts实例  
    const chartInstance = echarts.init(chartRef.current);  
  
    // 加载当前地图  
    loadGeoJson(currentMapUrl, () => {  
      chartInstance.setOption(getMapConfig(currentMapUrl));  
    });  
  
    // 清理函数，组件卸载时销毁ECharts实例  
    return () => {  
      chartInstance.dispose();  
    };  
  }, [currentMapUrl]); // 依赖currentMapUrl，以便在URL变化时重新渲染地图  
  
  // 地图配置函数  
  const getMapConfig = (geoJsonUrl) => {  
    return {  
      series: [  
        {  
          type: 'map',  
          mapType: 'custom',  
          roam: true,  
          label: { show: true },  
          data: [],  
          geo: {  
            map: 'custom',  
            roam: true,  
            label: {  
              emphasis: { show: true },  
            },  
            itemStyle: {  
              normal: {  
                areaColor: '#323c48',  
                borderColor: '#111',  
              },  
              emphasis: {  
                areaColor: '#2a333d',  
              },  
            },  
          },  
          emphasis: { label: { show: true } },  
        },  
      ],  
    };  
  };  
  
  // 加载GeoJSON数据  
  const loadGeoJson = (url, callback) => {  
    fetch(url)  
      .then((response) => response.json())  
      .then((data) => {  
        echarts.registerMap('custom', data);  
        callback();  
      })  
      .catch((error) => console.error('Error loading GeoJSON:', error));  
  };  
  
  // 更新地图并管理历史栈  
  const updateMap = (url) => {  
    if (!mapHistory.includes(url)) {  
      setMapHistory([...mapHistory, url]);  
    }  
    setCurrentMapUrl(url);  
    loadGeoJson(url, () => {  
      const chartInstance = echarts.getInstanceByDom(chartRef.current);  
      if (chartInstance) {  
        chartInstance.clear();  
        chartInstance.setOption(getMapConfig(url));  
      }  
    });  
  };  
  
  // 添加点击事件以实现下钻  
  const handleMapClick = (params) => {  
    if (params.componentType === 'series' && params.seriesType === 'map') {  
      const nextMapUrl = `${params.name}.json`;  
      updateMap(nextMapUrl);  
    }  
  };  
  
  // 添加返回按钮点击事件  
  const handleBackButtonClick = () => {  
    if (mapHistory.length > 1) {  
      const previousMapUrl = mapHistory[mapHistory.length - 2];  
      updateMap(previousMapUrl);  
    } else {  
      alert('已经是初始地图，无法返回上一级！');  
    }  
  };  
  
  return (  
    <div>  
      <div id="main" ref={chartRef} style={{ width: '1000px', height: '1000px' }}></div>  
      <button id="backButton" onClick={handleBackButtonClick} disabled={mapHistory.length <= 1}>  
        返回大图  
      </button>  
    </div>  
  );  
};  
  
export default EChartsMapDrillDown;
