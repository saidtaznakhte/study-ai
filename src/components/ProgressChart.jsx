import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../context/ThemeContext';
import { faker } from '@faker-js/faker';

const ProgressChart = () => {
  const { isDark } = useTheme();
  const [chartData, setChartData] = useState({ studyTime: [], goals: [] });

  useEffect(() => {
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const studyTime = days.map(() => faker.number.float({ min: 1, max: 5, precision: 0.1 }));
    const goals = days.map(() => faker.number.int({ min: 2, max: 5 }));
    setChartData({ studyTime, goals });
  }, []);

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: isDark ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.95)',
      borderColor: isDark ? '#4b5563' : '#e5e7eb',
      borderWidth: 1,
      padding: [10, 15],
      textStyle: {
        color: isDark ? '#e5e7eb' : '#374151',
        fontFamily: 'sans-serif',
      },
      formatter: (params) => {
        let tooltip = `<div class="font-semibold text-base mb-2">${params[0].name}</div>`;
        params.forEach(param => {
          const colorSpan = `<span style="display:inline-block;margin-right:8px;border-radius:10px;width:10px;height:10px;background-color:${param.color};"></span>`;
          const unit = param.seriesName === "Temps d'étude" ? 'heures' : 'atteints';
          tooltip += `<div style="display: flex; align-items: center; justify-content: space-between; width: 180px;">
                        <div>${colorSpan} ${param.seriesName}</div>
                        <div class="font-bold ml-4">${param.value.toFixed(param.seriesName === "Temps d'étude" ? 1 : 0)} ${unit}</div>
                      </div>`;
        });
        return tooltip;
      },
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ["Temps d'étude", 'Objectifs'],
      bottom: 0,
      textStyle: {
        color: isDark ? '#d1d5db' : '#374151',
      },
      itemGap: 20,
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '10%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: isDark ? '#9ca3af' : '#6b7280',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: isDark ? '#9ca3af' : '#6b7280',
        formatter: (value) => {
          return value % 1 === 0 ? value : '';
        }
      },
      splitLine: {
        lineStyle: {
          color: isDark ? '#374151' : '#f3f4f6',
          type: 'dashed'
        },
      },
    },
    series: [
      {
        name: "Temps d'étude",
        type: 'bar',
        data: chartData.studyTime,
        barWidth: '40%',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: isDark ? '#38bdf8' : '#7dd3fc' }, 
              { offset: 1, color: isDark ? '#0ea5e9' : '#38bdf8' }
            ]
          },
          borderRadius: [8, 8, 0, 0],
        },
      },
      {
        name: 'Objectifs',
        type: 'line',
        data: chartData.goals,
        smooth: 0.5,
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: false,
        itemStyle: {
          color: '#10b981',
        },
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(16, 185, 129, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 5
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(16, 185, 129, 0.2)' },
              { offset: 1, color: 'rgba(16, 185, 129, 0)' }
            ]
          }
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Progression hebdomadaire
      </h3>
      <ReactECharts 
        option={option} 
        style={{ height: '300px' }} 
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

export default ProgressChart;
