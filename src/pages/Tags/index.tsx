import React from 'react';
import { Link } from 'react-router-dom';
import './Tags.scss';

// 定义标签类型
interface Tag {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

// 模拟标签数据
const MOCK_TAGS: Tag[] = [
  { id: '1', name: 'TypeScript', slug: 'typescript', postCount: 8 },
  { id: '2', name: 'Web Design', slug: 'web-design', postCount: 10 },
  { id: '3', name: 'API', slug: 'api', postCount: 6 },
  { id: '4', name: 'Redux', slug: 'redux', postCount: 5 },
  { id: '5', name: 'Optimization', slug: 'optimization', postCount: 7 },
  { id: '6', name: 'Inclusive Design', slug: 'inclusive-design', postCount: 3 },
  { id: '7', name: 'JavaScript', slug: 'javascript', postCount: 15 },
  { id: '8', name: 'HTML', slug: 'html', postCount: 9 },
  { id: '9', name: 'CSS', slug: 'css', postCount: 12 },
  { id: '10', name: 'React', slug: 'react', postCount: 14 },
  { id: '11', name: 'Node.js', slug: 'nodejs', postCount: 8 },
  { id: '12', name: 'Express', slug: 'express', postCount: 5 },
  { id: '13', name: 'MongoDB', slug: 'mongodb', postCount: 4 },
  { id: '14', name: 'GraphQL', slug: 'graphql', postCount: 6 },
  { id: '15', name: 'Testing', slug: 'testing', postCount: 7 },
  { id: '16', name: 'CI/CD', slug: 'ci-cd', postCount: 3 },
  { id: '17', name: 'Docker', slug: 'docker', postCount: 5 },
  { id: '18', name: 'Kubernetes', slug: 'kubernetes', postCount: 2 },
  { id: '19', name: 'AWS', slug: 'aws', postCount: 4 },
  { id: '20', name: 'Serverless', slug: 'serverless', postCount: 3 },
];

/**
 * Tags page component
 *
 * Displays a list of all blog tags
 */
const TagsPage: React.FC = () => {
  // Sort tags by post count (descending)
  const sortedTags = [...MOCK_TAGS].sort((a, b) => b.postCount - a.postCount);

  return (
    <div className="tags-page">
      <div className="container">
        <div className="tags-header">
          <h1 className="tags-title">Tags</h1>
          <p className="tags-description">
            Browse all our articles by tag. Find content that matches your interests.
          </p>
        </div>

        <div className="tags-cloud">
          {sortedTags.map(tag => (
            <Link
              key={tag.id}
              to={`/tags/${tag.slug}`}
              className="tag-item"
              style={{
                fontSize: `calc(var(--font-size-base) + ${Math.min(tag.postCount / 3, 5) * 0.1}rem)`,
              }}
            >
              <span className="tag-name">{tag.name}</span>
              <span className="tag-count">{tag.postCount}</span>
            </Link>
          ))}
        </div>

        <div className="tags-list">
          <h2 className="section-title">All Tags (Alphabetical)</h2>
          <div className="tags-grid">
            {[...MOCK_TAGS]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(tag => (
                <Link key={tag.id} to={`/tags/${tag.slug}`} className="tag-card">
                  <h3 className="tag-title">{tag.name}</h3>
                  <span className="tag-count">{tag.postCount} articles</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
