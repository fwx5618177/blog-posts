import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './index';
import { describe, it, expect } from 'vitest';

// Wrap component with router since it uses Link
const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('NotFound Component', () => {
  it('renders with default props', () => {
    renderWithRouter(<NotFound />);

    expect(screen.getByText('No Results Found')).toBeInTheDocument();
    expect(screen.getByText("We couldn't find what you're looking for.")).toBeInTheDocument();
    expect(screen.getByText('Go Back')).toBeInTheDocument();
    expect(screen.getByText('Go to Homepage')).toBeInTheDocument();
  });

  it('renders with custom title and message', () => {
    renderWithRouter(<NotFound title="Custom Title" message="Custom message here" />);

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom message here')).toBeInTheDocument();
  });

  it('does not render back button when showBackButton is false', () => {
    renderWithRouter(<NotFound showBackButton={false} />);

    expect(screen.queryByText('Go Back')).not.toBeInTheDocument();
  });

  it('does not render home link when showHomeLink is false', () => {
    renderWithRouter(<NotFound showHomeLink={false} />);

    expect(screen.queryByText('Go to Homepage')).not.toBeInTheDocument();
  });

  it('renders custom action when provided', () => {
    renderWithRouter(<NotFound customAction={<button>Custom Action</button>} />);

    expect(screen.getByText('Custom Action')).toBeInTheDocument();
  });
});
