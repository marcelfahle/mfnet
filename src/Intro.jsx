import React from 'react';

import './assets/styles/modules/Intro.scss';

const Intro = () => {
  return (
    <div className="Intro">
      <h1 className="site-title">
        <a href="/">Marcel Fahle</a>
      </h1>

      <h2 className="site-description">
        Full-Stack-Developer from Germany who loves travel,
        <br />code, running and books. Currently living in <del>
          Bochum
        </del>&nbsp;
        <del>NYC</del> <del>Vilnius</del>{' '}
        <strong>
          <a href="http://bit.ly/2hhExTI" target="_blank">
            Denia
          </a>
        </strong>.
      </h2>

      <p className="site-contact">
        You can reach me best by
        <a href="mailto:m.fahle@gmail.com">e-mail</a>. Follow me on my
        adventures in
        <a href="https://instagram.com/marcelfahle" target="_blank">
          {' '}
          Life
        </a>,
        <a href="https://github.com/marcelfahle/" target="_blank">
          {' '}
          Code
        </a>,
        <a href="https://www.strava.com/athletes/18230818" target="_blank">
          {' '}
          Sport
        </a>,
        <a
          href="https://www.goodreads.com/user/show/1983702-marcel-fahle"
          target="_blank">
          {' '}
          Books
        </a>{' '}
        and
        <a href="https://twitter.com/marcelfahle" target="_blank">
          {' '}
          everything else
        </a>. <br />
        I'm currently working on{' '}
        <a href="https://www.roove.de/" target="_blank">
          roove
        </a>{' '}
        by day, and{' '}
        <a href="https://pidro.online" target="_blank">
          Pidro
        </a>{' '}
        by night. A slighty outdated and very incomplete list of other projects
        I've worked on, is available at{' '}
        <a href="https://gedankenwerk.com" target="_blank">
          Gedankenwerk
        </a>.
      </p>
    </div>
  );
};

export default Intro;
