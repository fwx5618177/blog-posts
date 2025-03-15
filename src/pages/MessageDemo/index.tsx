import React from 'react';
import MessageExample from '../../components/Message/MessageExample';
import ApiExample from './ApiExample';
import './styles.scss';

const MessageDemoPage: React.FC = () => {
  return (
    <div className="message-demo-page">
      <div className="container">
        <div className="page-header">
          <h1>Message 消息组件</h1>
          <p className="lead">
            一个轻量级的消息提示组件，用于向用户展示操作反馈、系统通知等信息。
            支持多种消息类型、自定义位置、自动关闭和进度条等功能。
          </p>
        </div>

        <div className="demo-section">
          <MessageExample />
        </div>

        <div className="demo-section">
          <ApiExample />
        </div>

        <div className="features-section">
          <h2>组件特性</h2>
          <ul>
            <li>
              <strong>多种消息类型</strong> -
              支持成功、错误、警告和信息四种类型的消息，每种类型有不同的视觉样式。
            </li>
            <li>
              <strong>自定义位置</strong> -
              支持在屏幕的六个不同位置显示消息：顶部、顶部左侧、顶部右侧、底部、底部左侧和底部右侧。
            </li>
            <li>
              <strong>自动关闭</strong> - 消息会在指定时间后自动关闭，默认为 3
              秒，可自定义持续时间。
            </li>
            <li>
              <strong>进度条指示</strong> - 显示消息剩余显示时间的进度条，直观反映消息的关闭倒计时。
            </li>
            <li>
              <strong>手动关闭</strong> - 每条消息都有关闭按钮，允许用户手动关闭消息。
            </li>
            <li>
              <strong>动画效果</strong> - 消息出现和消失时有平滑的动画效果，提升用户体验。
            </li>
            <li>
              <strong>多消息堆叠</strong> - 支持同时显示多条消息，并按顺序堆叠排列。
            </li>
            <li>
              <strong>类型安全</strong> - 使用 TypeScript
              编写，提供完整的类型定义，确保开发时的类型安全。
            </li>
          </ul>
        </div>

        <div className="usage-section">
          <h2>使用方法</h2>
          <p>Message 组件提供了一个简单的 API，可以通过以下方式使用：</p>
          <pre>{`// 导入 Message 组件
import { message } from '@/components/Message';

// 显示不同类型的消息
message.success('操作成功！');
message.error('操作失败！');
message.warning('警告信息！');
message.info('提示信息！');

// 自定义消息持续时间（毫秒）
message.success('操作成功！', 5000);  // 显示 5 秒

// 自定义消息位置
message.success('操作成功！', 3000, 'top-right');
message.error('操作失败！', 3000, 'bottom-left');

// 在 API 请求中使用
const handleSubmit = async () => {
  try {
    const response = await api.post('/data');
    message.success(response.data.message);
  } catch (error) {
    message.error('请求失败，请稍后重试');
  }
};`}</pre>
        </div>
      </div>
    </div>
  );
};

export default MessageDemoPage;
