import React, { useState } from 'react';
import message, { MessagePosition } from '../../components/Message';

// 定义成功响应的接口
interface SuccessResponse {
  success: boolean;
  message: string;
  data?: any;
}

// 定义错误响应的接口
interface ErrorResponse {
  success: boolean;
  message: string;
  code?: string;
}

// 模拟 API 调用
const mockApiCall = (shouldSucceed = true): Promise<SuccessResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({
          success: true,
          message: '数据获取成功',
          data: { id: 1, name: '示例数据' },
        });
      } else {
        reject(new Error('服务器错误，请稍后再试'));
      }
    }, 1000);
  });
};

const ApiExample: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState<MessagePosition>('top');

  // 处理成功请求
  const handleSuccessRequest = async () => {
    setLoading(true);
    try {
      const response = await mockApiCall(true);
      message.success(response.message, 3000, position);
    } catch (error) {
      console.error('请求失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 处理失败请求
  const handleFailedRequest = async () => {
    setLoading(true);
    try {
      await mockApiCall(false);
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message || '请求失败，请稍后再试', 5000, position);
      } else {
        message.error('请求失败，请稍后再试', 5000, position);
      }
    } finally {
      setLoading(false);
    }
  };

  // 显示多条消息
  const handleMultipleMessages = () => {
    message.info('正在处理您的请求...', 2000, position);

    setTimeout(() => {
      message.success('第一步操作成功', 3000, position);

      setTimeout(() => {
        message.warning('部分数据可能不完整', 4000, position);

        setTimeout(() => {
          message.error('无法完成最后一步操作', 5000, position);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  return (
    <div className="api-example">
      <h3>API 调用示例</h3>
      <p>
        这个示例展示了如何在 API 请求中使用 Message 组件，包括处理成功和失败的情况，
        以及如何显示多条消息。
      </p>

      <div className="position-selector">
        <label htmlFor="position-select">消息位置：</label>
        <select
          id="position-select"
          className="position-select"
          value={position}
          onChange={e => setPosition(e.target.value as MessagePosition)}
        >
          <option value="top">顶部居中</option>
          <option value="top-left">左上角</option>
          <option value="top-right">右上角</option>
          <option value="bottom">底部居中</option>
          <option value="bottom-left">左下角</option>
          <option value="bottom-right">右下角</option>
        </select>
      </div>

      <div className="button-group">
        <button className="btn-success" onClick={handleSuccessRequest} disabled={loading}>
          模拟成功请求
        </button>
        <button className="btn-error" onClick={handleFailedRequest} disabled={loading}>
          模拟失败请求
        </button>
        <button className="btn-info" onClick={handleMultipleMessages} disabled={loading}>
          显示多条消息
        </button>
      </div>

      <div className="code-example">
        <pre>{`// API 请求示例
const handleSubmit = async () => {
  try {
    setLoading(true);
    const response = await api.post('/data', formData);

    // 显示成功消息
    message.success(response.data.message, 3000, '${position}');

    // 处理成功响应
    return response.data;
  } catch (error) {
    // 显示错误消息
    let errorMsg = '请求失败，请稍后再试';
    if (error instanceof Error) {
      errorMsg = error.message;
    } else if (error.response?.data?.message) {
      errorMsg = error.response.data.message;
    }
    message.error(errorMsg, 5000, '${position}');

    // 处理错误
    console.error('API 错误:', error);
    return null;
  } finally {
    setLoading(false);
  }
};`}</pre>
      </div>
    </div>
  );
};

export default ApiExample;
