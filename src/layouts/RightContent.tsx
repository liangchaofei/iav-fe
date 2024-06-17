import { GlobalOutlined, SkinOutlined, UserOutlined } from '@ant-design/icons';
import { setLocale, useIntl } from '@umijs/max';
import { Avatar, Button, Popover, message } from 'antd';
import { useState } from 'react';

const RightContent = () => {
  const [messageApi, contextHolder] = message.useMessage();
  // NOTE: 多语言
  const intl = useIntl();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [localeType, setLocaleType] = useState(
    localStorage.getItem('umi_locale') || 'zh-CN',
  );
  if (!localStorage.getItem('umi_locale')) {
    setLocale('zh-CN');
  }
  const localeTypeData = [
    {
      label: '中文',
      value: 'zh-CN',
    },
    {
      label: 'English',
      value: 'en-US',
    },
  ];

  const themeType = [
    {
      label: intl.formatMessage({ id: 'undertone' }),
      icons: 'GlobalOutlined',
      value: 'defaultAlgorithm',
    },
    {
      label: intl.formatMessage({ id: 'DarkColor' }),
      icons: 'GlobalOutlined',
      value: 'darkAlgorithm',
    },
  ];

  return (
    <>
      {contextHolder}
      {/* NOTE: user */}
      <Popover
        title=""
        trigger="hover"
        placement="bottom"
        className="flex items-center justify-center mr-5 "
        content={
          <div
            className="w-24 px-2 py-1 text-center rounded-md cursor-pointer hover:bg-zinc-200"
            onClick={() => {
              console.log('logout');
            }}
          >
            {intl.formatMessage({ id: 'Logout' })}
          </div>
        }
      >
        <Avatar
          className="flex items-center justify-center bg-gray-300 w-7 h-7"
          icon={<UserOutlined className="text-xl" />}
        />
        <div className="ml-2">Admin</div>
      </Popover>

      <span className="mr-5 border-2 rounded-lg h-7" />

      {/* NOTE: 换肤 */}
      <Popover
        trigger="hover"
        placement="bottom"
        className="mr-5 text-2xl"
        content={
          <div>
            {themeType.map((item, index) => (
              <div
                className="w-24 px-2 py-1 text-center rounded-md cursor-pointer hover:bg-zinc-200"
                key={index}
                onClick={() => {
                  messageApi.info(intl.formatMessage({ id: 'solution' }));
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        }
      >
        <Button
          className="flex items-center justify-center"
          icon={<SkinOutlined />}
        />
      </Popover>

      {/* NOTE: 多语言 */}
      <Popover
        className="mr-5 text-2xl"
        trigger="hover"
        placement="bottom"
        content={
          <div>
            {localeTypeData.map((item, index) => (
              <div
                className="w-24 px-2 py-1 text-center rounded-md cursor-pointer hover:bg-zinc-200"
                onClick={() => {
                  setLocale(item.value);
                  setLocaleType(item.value);
                }}
                key={index}
              >
                {item.label}
              </div>
            ))}
          </div>
        }
      >
        <Button
          className="flex items-center justify-center"
          icon={<GlobalOutlined />}
        />
      </Popover>
    </>
  );
};

export default RightContent;
