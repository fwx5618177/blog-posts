import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { SuccessIcon, ErrorIcon, WarningIcon, InfoIcon, CloseIcon } from './MessageIcons';
import './Message.scss';

export type MessageType = 'success' | 'error' | 'warning' | 'info';
export type MessagePosition =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right';

interface MessageProps {
  id: string;
  type: MessageType;
  content: React.ReactNode;
  duration?: number;
  position?: MessagePosition;
  onClose: (id: string) => void;
}

// 单个消息组件
const MessageItem: React.FC<MessageProps> = ({ id, type, content, duration = 3, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  // 处理关闭动画
  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300); // 动画持续时间
  }, [id, onClose]);

  // 自动关闭
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [duration, handleClose]);

  // 根据类型选择图标
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <SuccessIcon />;
      case 'error':
        return <ErrorIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'info':
        return <InfoIcon />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`message message-${type} ${isExiting ? 'message-exit' : ''}`}
      data-duration={duration}
    >
      <span className="message-icon">{getIcon()}</span>
      <span className="message-content">{content}</span>
      <span className="message-close" onClick={handleClose}>
        <CloseIcon />
      </span>
      <div className="message-progress"></div>
    </div>
  );
};

// 消息容器
interface MessageInstance {
  id: string;
  type: MessageType;
  content: React.ReactNode;
  duration?: number;
  position?: MessagePosition;
}

interface MessageContainerProps {
  messages: MessageInstance[];
  position: MessagePosition;
  removeMessage: (id: string) => void;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  messages,
  position,
  removeMessage,
}) => {
  return (
    <div className={`message-container position-${position}`}>
      {messages.map(msg => (
        <MessageItem
          key={msg.id}
          id={msg.id}
          type={msg.type}
          content={msg.content}
          duration={msg.duration}
          position={msg.position}
          onClose={removeMessage}
        />
      ))}
    </div>
  );
};

// 消息管理
const messageContainers: Record<MessagePosition, HTMLDivElement | null> = {
  top: null,
  'top-left': null,
  'top-right': null,
  bottom: null,
  'bottom-left': null,
  'bottom-right': null,
};

const messageRoots: Record<MessagePosition, ReactDOM.Root | null> = {
  top: null,
  'top-left': null,
  'top-right': null,
  bottom: null,
  'bottom-left': null,
  'bottom-right': null,
};

const messageInstances: Record<MessagePosition, MessageInstance[]> = {
  top: [],
  'top-left': [],
  'top-right': [],
  bottom: [],
  'bottom-left': [],
  'bottom-right': [],
};

const add: Record<MessagePosition, ((message: MessageInstance) => void) | null> = {
  top: null,
  'top-left': null,
  'top-right': null,
  bottom: null,
  'bottom-left': null,
  'bottom-right': null,
};

const remove: Record<MessagePosition, ((id: string) => void) | null> = {
  top: null,
  'top-left': null,
  'top-right': null,
  bottom: null,
  'bottom-left': null,
  'bottom-right': null,
};

// 渲染消息容器
const renderMessageContainer = (position: MessagePosition) => {
  // 如果已经存在容器，则不重复创建
  if (messageContainers[position]) {
    return;
  }

  // 创建容器
  messageContainers[position] = document.createElement('div');
  messageContainers[position].className = `message-root-${position}`;
  document.body.appendChild(messageContainers[position]);

  // 创建 React 根节点
  messageRoots[position] = ReactDOM.createRoot(messageContainers[position]);

  // 渲染 React 组件
  const MessageApp = () => {
    const [messages, setMessages] = useState<MessageInstance[]>([]);

    // 添加消息
    const addMessage = useCallback((message: MessageInstance) => {
      setMessages(prevMessages => [...prevMessages, message]);
    }, []);

    // 移除消息
    const removeMessage = useCallback((id: string) => {
      setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
    }, []);

    // 暴露方法
    useEffect(() => {
      add[position] = addMessage;
      remove[position] = removeMessage;
      return () => {
        add[position] = null;
        remove[position] = null;
      };
    }, [addMessage, removeMessage]);

    return (
      <MessageContainer messages={messages} position={position} removeMessage={removeMessage} />
    );
  };

  messageRoots[position].render(<MessageApp />);
};

// 生成唯一ID
const getUniqueId = () => {
  return `message-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

// 消息配置
interface MessageConfig {
  content: React.ReactNode;
  duration?: number;
  position?: MessagePosition;
}

// 消息 API
export const message = {
  success(content: React.ReactNode, duration = 3, position: MessagePosition = 'top') {
    this.open({ type: 'success', content, duration, position });
  },
  error(content: React.ReactNode, duration = 3, position: MessagePosition = 'top') {
    this.open({ type: 'error', content, duration, position });
  },
  warning(content: React.ReactNode, duration = 3, position: MessagePosition = 'top') {
    this.open({ type: 'warning', content, duration, position });
  },
  info(content: React.ReactNode, duration = 3, position: MessagePosition = 'top') {
    this.open({ type: 'info', content, duration, position });
  },
  open(config: {
    type: MessageType;
    content: React.ReactNode;
    duration?: number;
    position?: MessagePosition;
  }) {
    const position = config.position || 'top';
    renderMessageContainer(position);

    const id = getUniqueId();
    const messageInstance: MessageInstance = {
      id,
      type: config.type,
      content: config.content,
      duration: config.duration,
      position,
    };

    messageInstances[position].push(messageInstance);

    if (add[position]) {
      add[position](messageInstance);
    }

    return {
      close() {
        if (remove[position]) {
          remove[position](id);
        }
      },
    };
  },
  config(options: { duration?: number; position?: MessagePosition } = {}) {
    const defaultDuration = options.duration;
    const defaultPosition = options.position || 'top';

    return {
      success(content: React.ReactNode, duration?: number, position?: MessagePosition) {
        message.success(content, duration ?? defaultDuration, position ?? defaultPosition);
      },
      error(content: React.ReactNode, duration?: number, position?: MessagePosition) {
        message.error(content, duration ?? defaultDuration, position ?? defaultPosition);
      },
      warning(content: React.ReactNode, duration?: number, position?: MessagePosition) {
        message.warning(content, duration ?? defaultDuration, position ?? defaultPosition);
      },
      info(content: React.ReactNode, duration?: number, position?: MessagePosition) {
        message.info(content, duration ?? defaultDuration, position ?? defaultPosition);
      },
      open(config: {
        type: MessageType;
        content: React.ReactNode;
        duration?: number;
        position?: MessagePosition;
      }) {
        message.open({
          ...config,
          duration: config.duration ?? defaultDuration,
          position: config.position ?? defaultPosition,
        });
      },
    };
  },
  destroy(position?: MessagePosition) {
    if (position) {
      // 销毁指定位置的消息
      if (messageContainers[position] && messageRoots[position]) {
        messageRoots[position].unmount();
        document.body.removeChild(messageContainers[position]);
        messageContainers[position] = null;
        messageRoots[position] = null;
        messageInstances[position] = [];
        add[position] = null;
        remove[position] = null;
      }
    } else {
      // 销毁所有位置的消息
      Object.keys(messageContainers).forEach(pos => {
        const position = pos as MessagePosition;
        if (messageContainers[position] && messageRoots[position]) {
          messageRoots[position].unmount();
          document.body.removeChild(messageContainers[position]);
          messageContainers[position] = null;
          messageRoots[position] = null;
          messageInstances[position] = [];
          add[position] = null;
          remove[position] = null;
        }
      });
    }
  },
};

export default message;
