import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../context/ThemeContext';

const ProgressChart = () => {
  const { isDark } = useTheme();

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Temps d\'étude', 'Objectifs'],
      textStyle: {
        color: isDark ? '#d1d5db' : '#374151',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      axisLine: {
        lineStyle: {
          color: isDark ? '#4b5563' : '#d1d5db',
        },
      },
      axisLabel: {
        color: isDark ? '#9ca3af' : '#6b7280',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: isDark ? '#4b5563' : '#d1d5db',
        },
      },
      axisLabel: {
        color: isDark ? '#9ca3af' : '#6b7280',
      },
      splitLine: {
        lineStyle: {
          color: isDark ? '#374151' : '#f3f4f6',
        },
      },
    },
    series: [
      {
        name: 'Temps d\'étude',
        type: 'bar',
        data: [2.5, 3, 2, 3.5, 2.8, 1.5, 3.2],
        itemStyle: {
          color: '#0ea5e9',
          borderRadius: [8, 8, 0, 0],
        },
      },
      {
        name: 'Objectifs',
        type: 'line',
        data: [3, 3, 2.5, 4, 3, 2, 3.5],
        smooth: true,
        itemStyle: {
          color: '#10b981',
        },
        lineStyle: {
          width: 3,
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Progression hebdomadaire
      </h3>
      <ReactECharts option={option} style={{ height: '300px' }} />
    </div>
  );
};

export default ProgressChart;
