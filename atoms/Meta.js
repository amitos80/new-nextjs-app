import Head from 'next/head'
import colors from '~/colors';
import { defaultTo } from 'ramda';

const Meta = ({ card, title }) => (
    <Head>
      <title>{defaultTo('new app', title)}</title>
      <meta name="description" content={(card && card.seo.description) || 'new-app description '} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i&display=swap&subset=latin-ext,vietnamese" rel="stylesheet" />

      <link rel="manifest" href="/static/manifest.json" />
      <link rel="shortcut icon" href="/static/favicon.ico" />>
      <meta name="theme-color" content={colors.accent1} />
      <link rel="shortcut icon" href="/static/icon.png" />
      <link rel="apple-touch-icon" href="/static/icon.png" />
      <link rel="apple-touch-icon" href="/static/content-card-company.png" />
      <meta name="apple-mobile-web-app-title" content="Hacker News" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />

    </Head>
)

export default Meta
