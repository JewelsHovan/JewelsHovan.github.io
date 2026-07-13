import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';

test('renders Julien’s personal project garden and public newsletter', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /i build useful systems and make odd little things/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /things i've made, am making/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /subscribe/i })).toHaveAttribute(
    'href',
    'https://jewelshovan.github.io/AI-News-Reports/'
  );
  expect(screen.getByRole('button', { name: /ai systems/i })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByRole('button', { name: /luccas studio agent/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /before ai, there were web scrapers/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /compass data is where i make things/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /build for someone real/i })).toBeInTheDocument();
  expect(screen.getByText(/perfect code is not the goal/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /i like the difficult bit/i }));
  expect(screen.getByRole('heading', { name: /i like the difficult bit/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /the model is one part/i })).toBeInTheDocument();
  expect(screen.getByText(/an ai cannot clarify a boundary/i)).toBeInTheDocument();
  const atlasTrigger = screen.getByRole('button', { name: /open the diagram atlas/i });
  atlasTrigger.focus();
  fireEvent.click(atlasTrigger);
  const atlasDialog = screen.getByRole('dialog', { name: /the harness atlas/i });
  expect(atlasDialog).toBeInTheDocument();
  expect(within(atlasDialog).getAllByRole('img')).toHaveLength(4);
  expect(atlasDialog.querySelectorAll('img')).toHaveLength(0);
  expect(screen.getByRole('button', { name: /close the diagram atlas/i })).toHaveFocus();
  expect(screen.getByText(/make a useful idea easy to pass on/i)).toBeInTheDocument();
  const atlasExit = screen.getByRole('button', { name: /back to the garden/i });
  atlasExit.focus();
  fireEvent.keyDown(document, { key: 'Tab' });
  expect(screen.getByRole('button', { name: /close the diagram atlas/i })).toHaveFocus();
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog', { name: /the harness atlas/i })).not.toBeInTheDocument();
  expect(atlasTrigger).toHaveFocus();
  expect(screen.getByRole('link', { name: /ai agent systems: architectures/i })).toHaveAttribute('href', 'https://arxiv.org/abs/2601.01743');
  expect(document.getElementById('about')).toBeInTheDocument();
});

test('moves project detail next to its card when the viewport crosses the narrow breakpoint', () => {
  const originalMatchMedia = window.matchMedia;
  let changeListener;
  const projectLayoutQuery = {
    matches: false,
    media: '(max-width: 930px)',
    addEventListener: jest.fn((_event, listener) => { changeListener = listener; }),
    removeEventListener: jest.fn(),
  };
  window.matchMedia = jest.fn().mockImplementation((query) => (
    query === projectLayoutQuery.media
      ? projectLayoutQuery
      : { matches: false, media: query, addEventListener: jest.fn(), removeEventListener: jest.fn() }
  ));

  render(<App />);
  expect(document.getElementById('project-detail-panel')).toBeInTheDocument();

  act(() => {
    projectLayoutQuery.matches = true;
    changeListener();
  });

  const projectButton = screen.getByRole('button', { name: /luccas studio agent/i });
  fireEvent.click(projectButton);
  const detail = document.getElementById('project-detail-luccas-agent');
  expect(detail).toBeInTheDocument();
  expect(projectButton.nextElementSibling).toBe(detail);
  expect(within(detail).getByRole('heading', { name: /luccas studio agent/i })).toBeInTheDocument();
  expect(projectButton).toHaveAttribute('aria-expanded', 'true');
  expect(projectButton).toHaveAttribute('aria-controls', 'project-detail-luccas-agent');

  window.matchMedia = originalMatchMedia;
});

test('keeps field-map focus inside the modal and restores it when closed', () => {
  render(<App />);
  const trigger = screen.getByRole('button', { name: /^open field map$/i });
  trigger.focus();
  fireEvent.click(trigger);

  const dialog = screen.getByRole('dialog', { name: /field map/i });
  const close = within(dialog).getByRole('button', { name: /close field map/i });
  expect(close).toHaveFocus();
  expect(document.querySelector('main')).toHaveAttribute('inert', '');
  expect(document.querySelector('main')).toHaveAttribute('aria-hidden', 'true');

  const lastWaypoint = within(dialog).getByRole('link', { name: /a bit more/i });
  lastWaypoint.focus();
  fireEvent.keyDown(document, { key: 'Tab' });
  expect(close).toHaveFocus();

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog', { name: /field map/i })).not.toBeInTheDocument();
  expect(document.querySelector('main')).not.toHaveAttribute('inert');
  expect(trigger).toHaveFocus();
});

test('uses progressive tactile feedback for direct sketch controls', () => {
  const originalMatchMedia = window.matchMedia;
  const originalVibrate = navigator.vibrate;
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  navigator.vibrate = jest.fn();

  render(<App />);
  fireEvent.click(screen.getByRole('tab', { name: 'Make' }));
  expect(navigator.vibrate).toHaveBeenLastCalledWith(8);
  fireEvent.click(screen.getByRole('button', { name: /interactive particle sketch showing make/i }));
  expect(navigator.vibrate).toHaveBeenLastCalledWith(12);

  window.matchMedia = originalMatchMedia;
  navigator.vibrate = originalVibrate;
});

test('supports keyboard control of the live sketch and reduced-motion waypoint navigation', async () => {
  const originalMatchMedia = window.matchMedia;
  const originalScrollTo = window.scrollTo;
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  window.scrollTo = jest.fn();

  render(<App />);
  const monogramTab = screen.getByRole('tab', { name: 'JH' });
  const makeTab = screen.getByRole('tab', { name: 'Make' });
  act(() => monogramTab.focus());
  fireEvent.keyDown(monogramTab, { key: 'ArrowRight' });
  expect(makeTab).toHaveAttribute('aria-selected', 'true');
  await waitFor(() => expect(makeTab).toHaveFocus());
  expect(document.getElementById('hero-sketch-panel')).toHaveAttribute('aria-labelledby', 'hero-sketch-tab-make');
  const sketch = screen.getByRole('button', { name: /interactive particle sketch showing make/i });
  fireEvent.click(sketch);
  expect(screen.getByRole('tab', { name: 'Play' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('button', { name: /interactive particle sketch showing play/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /^open field map$/i }));
  fireEvent.click(screen.getByRole('link', { name: /a bit more/i }));
  await waitFor(() => expect(window.scrollTo).toHaveBeenCalled());
  expect(window.scrollTo).toHaveBeenLastCalledWith(expect.objectContaining({ behavior: 'auto' }));
  expect(document.getElementById('about')).toHaveFocus();

  window.matchMedia = originalMatchMedia;
  window.scrollTo = originalScrollTo;
});


test('adds useful routes to each decorative particle mode', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /a bit about me/i })).toHaveAttribute('href', '#about');
  fireEvent.click(screen.getByRole('tab', { name: 'Make' }));
  expect(screen.getAllByRole('link', { name: /see what i make/i }).some((link) => link.classList.contains('playground-route') && link.getAttribute('href') === '#projects')).toBe(true);
  fireEvent.click(screen.getByRole('tab', { name: 'Play' }));
  expect(screen.getByRole('link', { name: /read my field notes/i })).toHaveAttribute('href', '#notes');
});
