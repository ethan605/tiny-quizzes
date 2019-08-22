import express from 'express';
import * as bodyParser from 'body-parser';
import next from 'next';

// Locals
import { prisma } from './prisma/generated/prisma-client';

function buildServer(port: number): void {
  const server = express();

  server.use(bodyParser.json());

  server.post('/questions', async (req, res) => {
    const result = await prisma.createQuestion(req.body);
    res.json(result);
  });

  server.post('/quizzes', async (req, res) => {
    const result = await prisma.createQuiz(req.body);
    res.json(result);
  });

  server.get('/quizzes', async (__, res) => {
    const result = await prisma.quizzes();
    res.json(result);
  });

  server.get('/questions', async (__, res) => {
    const result = await prisma.questions();
    res.json(result);
  });

  server.listen(port);
}

async function buildApp(): Promise<void> {
  const port = parseInt(process.env.PORT, 10) || 3000;
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });

  await app.prepare();
  buildServer(port);
}

buildApp();
