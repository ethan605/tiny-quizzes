import React, { PureComponent, ReactElement } from 'react';
import Head from 'next/head';

// Utils
import loadFont from '@app/utils/loadFont';

export default class Home extends PureComponent {
  componentDidMount(): void {
    loadFont('NotoSans');
  }

  render(): ReactElement {
    return (
      <div className="container my-2">
        <Head>
          <title>Home</title>
        </Head>

        <h1 className="m-0 text-primary">{'Tiny Quizzes'}</h1>
      </div>
    );
  }
}
