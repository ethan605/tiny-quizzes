import React, { SFC } from 'react';
import Head from 'next/head';

// Locals
import './styles.scss';

const Home: SFC = () => (
  <div className="container my-2">
    <Head>
      <title>Home</title>
    </Head>

    <h1 className="title">{'Tiny Quizzes'}</h1>
  </div>
);

export default Home;
