// 运行时配置
import RightContent from '@/layouts/RightContent';
import type { RunTimeLayoutConfig, RuntimeAntdConfig } from '@umijs/max';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    title: 'React Admin',
    logo: '/logo.svg',
    // 默认布局调整
    rightContentRender: () => <RightContent />,
    menuHeaderRender: undefined, // 自定义菜单头
    layout: 'mix', // 侧边栏导航布局，mix 为混合导航，top 为顶部导航
    splitMenus: true, // 开启左侧菜单拆分模式
    fixSiderbar: true, // 固定侧边栏
    fixHeader: true, // 固定页头
    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};

// NOTE: Antd 运行时配置
export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme ??= {};
  // 1, dark 算法
  // 默认算法 theme.defaultAlgorithm
  // 暗色算法 theme.darkAlgorithm
  // 紧凑算法 theme.compactAlgorithm

  // memo.theme.algorithm = theme.darkAlgorithm; // 配置 antd5 的预设 dark 算法

  // 2. 组合使用暗色算法与紧凑算法
  // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],

  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 3,
    },
  };

  return memo;
};
