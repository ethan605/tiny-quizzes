import * as bodyParser from 'body-parser';
import express from 'express';
import { IncomingMessage, ServerResponse } from 'http';
import next from 'next';
import { UrlWithParsedQuery } from 'url';

// Locals
import { prisma } from '../prisma/generated';

type GetRequestHandlerFunction = (
  req: IncomingMessage,
  res: ServerResponse,
  parsedUrl?: UrlWithParsedQuery
) => Promise<void>;

function buildServer(port: number, handler: GetRequestHandlerFunction): void {
  const server = express();

  server.use(bodyParser.json());

  server.post('/api/questions', async (req, res) => {
    const result = await prisma.createQuestion(req.body);
    res.json(result);
  });

  server.post('/api/quizzes', async (req, res) => {
    const result = await prisma.createQuiz(req.body);
    res.json(result);
  });

  server.get('/api/quizzes', async (__, res) => {
    const result = await prisma.quizzes();
    res.json(result);
  });

  server.get('/api/questions', async (__, res) => {
    const result = await prisma.questions();
    res.json(result);
  });

  server.get('*', (req, res) => handler(req, res));

  server.listen(port);
}

async function buildApp(): Promise<void> {
  const port = parseInt(process.env.PORT, 10) || 3000;
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });
  const handler = app.getRequestHandler();

  try {
    await app.prepare();
    buildServer(port, handler);
  } catch (error) {
    console.debug('[Tiny Quizzes] Catched error', error);
  }
}

buildApp();
