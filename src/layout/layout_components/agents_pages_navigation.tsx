// ‼️

import React from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../configs/app_config';  // 导入类别配置

const AgentsPagesNavigation: React.FC = () => {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      {/* 
        导航容器：毛玻璃效果 (bg-white/70 + backdrop-blur-md)
        固定顶部，z-50确保在其他元素之上
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 品牌/Logo区域（可选扩展） */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Agents Cluster</h1>
          </div>
          
          {/* 导航链接区域：水平滚动（类别多时） */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {/* 
              动态生成导航链接：从categories配置
              使用NavLink，支持选中状态
            */}
            {categories.map((category) => (
              <NavLink
                key={category.id}
                to={category.path}  // 路由路径，如 '/hedge-trade'
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-orange-100 text-orange-800'  // 选中：淡橙色背景
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'  // 未选中：灰色，hover效果
                  }`
                }
              >
                {category.label}  // 显示标签，如 '对冲交易 Agents'
              </NavLink>
            ))}
          </div>
          
          {/* 右侧操作区（预留，如搜索、用户菜单） */}
          <div className="flex-shrink-0">
            {/* 未来添加： <button>搜索</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AgentsPagesNavigation;