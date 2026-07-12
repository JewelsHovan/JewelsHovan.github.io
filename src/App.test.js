import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders Julien’s personal project garden and public newsletter', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /i build useful systems and make odd little things/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /things i've made, am making/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /subscribe/i })).toHaveAttribute(
    'href',
    'https://jewelshovan.github.io/AI-News-Reports/'
  );
  expect(screen.getByRole('button', { name: /working with agents/i })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByRole('button', { name: /luccas studio agent/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /i didn't arrive at ai/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /compass data is where difficult ideas/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /build for someone real/i })).toBeInTheDocument();
  expect(screen.getByText(/perfect code is not the goal/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /i like the difficult bit/i }));
  expect(screen.getByRole('heading', { name: /i like the difficult bit/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /the model is one instrument/i })).toBeInTheDocument();
  expect(screen.getByText(/ambiguity is the enemy of agentic workflows/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /open the diagram atlas/i }));
  expect(screen.getByRole('dialog', { name: /the harness atlas/i })).toBeInTheDocument();
  expect(screen.getByText(/make knowledge usable outside a single mind/i)).toBeInTheDocument();
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog', { name: /the harness atlas/i })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /ai agent systems: architectures/i })).toHaveAttribute('href', 'https://arxiv.org/abs/2601.01743');
});
