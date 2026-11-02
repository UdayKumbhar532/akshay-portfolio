import { createServer } from 'vite';

async function run() {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    await server.ssrLoadModule('./test-sections.jsx');
  } catch (err) {
    console.error('SSR Runner Error:', err);
    process.exit(1);
  } finally {
    await server.close();
  }
}

run();
