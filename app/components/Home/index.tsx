import React, { SFC } from 'react';
import Head from 'next/head';

const Home: SFC = () => (
  <div className="container my-2">
    <Head>
      <title>Home</title>
    </Head>

    <h1 className="m-0 text-primary">{'Tiny Quizzes'}</h1>
  </div>
);

export default Home;
