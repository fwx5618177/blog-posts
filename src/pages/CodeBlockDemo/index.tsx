import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import './styles.scss';

const CodeBlockDemoPage: React.FC = () => {
  // JavaScript 示例代码
  const jsCode = `// 一个简单的 JavaScript 函数
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 使用箭头函数
const multiply = (a, b) => a * b;

// 使用 async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('获取数据失败:', error);
    return null;
  }
}`;

  // TypeScript 示例代码
  const tsCode = `// TypeScript 接口定义
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  roles: string[];
}

// 泛型函数
function getFirstItem<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

// 类型别名与联合类型
type Status = 'pending' | 'fulfilled' | 'rejected';

// 类实现接口
class UserService implements DataService<User> {
  async getById(id: number): Promise<User> {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
  }
}`;

  // React 组件示例代码
  const reactCode = `import React, { useState, useEffect } from 'react';

interface Props {
  initialCount: number;
  step?: number;
}

const Counter: React.FC<Props> = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = \`当前计数: \${count}\`;

    return () => {
      document.title = '计数器已卸载';
    };
  }, [count]);

  const increment = () => setCount(prevCount => prevCount + step);
  const decrement = () => setCount(prevCount => prevCount - step);

  return (
    <div className="counter">
      <h2>计数器: {count}</h2>
      <div className="buttons">
        <button onClick={decrement}>减少</button>
        <button onClick={increment}>增加</button>
      </div>
    </div>
  );
};

export default Counter;`;

  // CSS/SCSS 示例代码
  const cssCode = `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
}

.button {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &--primary {
    background-color: #1890ff;
    color: white;

    &:hover {
      background-color: darken(#1890ff, 10%);
    }
  }

  &--secondary {
    background-color: #f0f0f0;
    color: #333;

    &:hover {
      background-color: darken(#f0f0f0, 10%);
    }
  }
}`;

  // HTML 示例代码
  const htmlCode = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML 示例</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">首页</a></li>
        <li><a href="#about">关于</a></li>
        <li><a href="#contact">联系我们</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home">
      <h1>欢迎访问我们的网站</h1>
      <p>这是一个简单的 HTML 示例。</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 示例公司</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

  return (
    <div className="code-block-demo-page">
      <div className="container">
        <div className="page-header">
          <h1>代码块组件示例</h1>
          <p className="lead">
            这个页面展示了代码块组件的各种用法和功能，包括语法高亮、行号显示、行高亮等。
          </p>
        </div>

        <section className="demo-section">
          <h2>基本用法</h2>
          <p>代码块组件支持多种编程语言的语法高亮，下面是一个 JavaScript 代码示例：</p>
          <CodeBlock code={jsCode} language="javascript" caption="JavaScript 函数示例" />
        </section>

        <section className="demo-section">
          <h2>TypeScript 示例</h2>
          <p>TypeScript 代码的语法高亮，包括接口、泛型和类型定义：</p>
          <CodeBlock code={tsCode} language="typescript" caption="TypeScript 类型定义示例" />
        </section>

        <section className="demo-section">
          <h2>React 组件示例</h2>
          <p>React 组件代码，包括 Hooks 和 TypeScript 类型：</p>
          <CodeBlock code={reactCode} language="tsx" caption="React 函数组件示例" />
        </section>

        <section className="demo-section">
          <h2>CSS/SCSS 示例</h2>
          <p>CSS 和 SCSS 代码的语法高亮：</p>
          <CodeBlock code={cssCode} language="scss" caption="SCSS 样式示例" />
        </section>

        <section className="demo-section">
          <h2>HTML 示例</h2>
          <p>HTML 代码的语法高亮：</p>
          <CodeBlock code={htmlCode} language="html" caption="HTML 结构示例" />
        </section>

        <section className="demo-section">
          <h2>高亮特定行</h2>
          <p>可以通过 highlight 属性高亮显示特定行：</p>
          <CodeBlock
            code={jsCode}
            language="javascript"
            highlight={[2, 3, 7, 11, 12]}
            caption="带有行高亮的 JavaScript 示例"
          />
        </section>

        <section className="demo-section">
          <h2>不显示行号</h2>
          <p>可以通过 showLineNumbers 属性控制是否显示行号：</p>
          <CodeBlock
            code={tsCode}
            language="typescript"
            showLineNumbers={false}
            caption="不显示行号的 TypeScript 示例"
          />
        </section>

        <section className="demo-section">
          <h2>使用方法</h2>
          <p>代码块组件的使用方法非常简单，只需要提供代码内容和语言类型：</p>
          <CodeBlock
            code={`import CodeBlock from 'components/CodeBlock';

// 基本用法
<CodeBlock
  code="const greeting = 'Hello, World!';"
  language="javascript"
/>

// 完整用法
<CodeBlock
  code={codeString}
  language="typescript"
  showLineNumbers={true}
  highlight={[1, 3, 5]}
  caption="代码示例标题"
/>`}
            language="tsx"
            caption="代码块组件使用示例"
          />
        </section>

        <section className="demo-section">
          <h2>支持的语言</h2>
          <p>代码块组件基于 highlight.js 实现，支持以下常用编程语言：</p>
          <ul className="language-list">
            <li>JavaScript (js)</li>
            <li>TypeScript (ts, tsx)</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS/SASS</li>
            <li>JSON</li>
            <li>XML</li>
            <li>Markdown (md)</li>
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>C#</li>
            <li>Go</li>
            <li>Rust</li>
            <li>PHP</li>
            <li>Ruby</li>
            <li>Swift</li>
            <li>Kotlin</li>
            <li>SQL</li>
            <li>Bash/Shell</li>
            <li>YAML</li>
            <li>等等...</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CodeBlockDemoPage;
