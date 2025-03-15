import React, { useState } from 'react';
import message, { MessagePosition } from './index';

const MessageExample: React.FC = () => {
  const [position, setPosition] = useState<MessagePosition>('top');

  const showSuccessMessage = () => {
    message.success('操作成功！', 3, position);
  };

  const showErrorMessage = () => {
    message.error('操作失败，请重试！', 3, position);
  };

  const showWarningMessage = () => {
    message.warning('请注意，这是一个警告！', 3, position);
  };

  const showInfoMessage = () => {
    message.info('这是一条提示信息。', 3, position);
  };

  const showCustomDurationMessage = () => {
    message.success('这条消息会显示 10 秒钟', 10, position);
  };

  const showPositionedMessages = () => {
    message.info('顶部居中消息', 3, 'top');
    setTimeout(() => {
      message.success('顶部左侧消息', 3, 'top-left');
    }, 300);
    setTimeout(() => {
      message.warning('顶部右侧消息', 3, 'top-right');
    }, 600);
    setTimeout(() => {
      message.error('底部居中消息', 3, 'bottom');
    }, 900);
    setTimeout(() => {
      message.info('底部左侧消息', 3, 'bottom-left');
    }, 1200);
    setTimeout(() => {
      message.success('底部右侧消息', 3, 'bottom-right');
    }, 1500);
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as MessagePosition);
  };

  return (
    <div className="message-example">
      <h2>消息提示示例</h2>

      <div className="position-selector">
        <label htmlFor="position-select">消息位置：</label>
        <select
          id="position-select"
          value={position}
          onChange={handlePositionChange}
          className="position-select"
        >
          <option value="top">顶部居中</option>
          <option value="top-left">顶部左侧</option>
          <option value="top-right">顶部右侧</option>
          <option value="bottom">底部居中</option>
          <option value="bottom-left">底部左侧</option>
          <option value="bottom-right">底部右侧</option>
        </select>
      </div>

      <div className="button-group">
        <button onClick={showSuccessMessage} className="btn btn-success">
          成功消息
        </button>
        <button onClick={showErrorMessage} className="btn btn-error">
          错误消息
        </button>
        <button onClick={showWarningMessage} className="btn btn-warning">
          警告消息
        </button>
        <button onClick={showInfoMessage} className="btn btn-info">
          提示消息
        </button>
        <button onClick={showCustomDurationMessage} className="btn btn-primary">
          自定义时长消息 (10s)
        </button>
        <button onClick={showPositionedMessages} className="btn btn-secondary">
          显示所有位置
        </button>
      </div>

      <div className="code-example">
        <h3>使用方法</h3>
        <pre>
          {`
// 引入消息组件
import message from 'components/Message';

// 显示成功消息
message.success('操作成功！');

// 显示错误消息
message.error('操作失败，请重试！');

// 显示警告消息
message.warning('请注意，这是一个警告！');

// 显示提示消息
message.info('这是一条提示信息。');

// 自定义显示时长（单位：秒）
message.success('这条消息会显示 10 秒钟', 10);

// 自定义显示位置
message.success('顶部右侧消息', 3, 'top-right');
message.error('底部居中消息', 3, 'bottom');

// 全局配置
const customMessage = message.config({
  duration: 5,
  position: 'bottom-right'
});

// 使用全局配置
customMessage.success('使用全局配置的消息');

// 手动关闭消息
const msg = message.info('点击按钮关闭此消息');
// 稍后关闭
setTimeout(() => {
  msg.close();
}, 2000);
          `}
        </pre>
      </div>
    </div>
  );
};

export default MessageExample;
