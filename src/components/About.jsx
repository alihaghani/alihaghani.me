import React from 'react';

import {Link} from 'gatsby';
import {OutboundLink} from 'gatsby-plugin-google-analytics'

import headshot from '../images/headshot.png';

const About = () => (
    <>
      <div style={{ textAlign: 'center' }}>
        <img src={headshot} alt="Ali Haghani" />
      </div>
      <div className="about-text">
        <p>
          Hello! As you have likely discerned, my name is Ali. I'm currently a software engineer at Stripe. Before that,
          I worked on ads, analytics, and experimentation at Twitter. I spent my undergrad studying Business and Computer Science
          at the University of British Columbia, during which I did internships at RBC, GE Digital, and Twitter.
        </p>
        <p>
          On the side, I developed <OutboundLink target="_blank" rel="noopener noreferrer" href="http://playlistify.app">Playlistify</OutboundLink> which allows you
          to create playlists from live sets, DJ mixes, and concerts (featured on <OutboundLink target="_blank" href="https://djmag.com/news/new-app-turns-dj-mixes-spotify-and-apple-music-playlists">DJMag</OutboundLink>, <OutboundLink target="_blank" href="https://www.youredm.com/2019/12/01/create-playlists-from-dj-sets/">YourEDM</OutboundLink>, <OutboundLink target="_blank" href="https://www.edmtunes.com/2019/12/new-web-app-allows-you-to-make-spotify-and-apple-music-playlists-from-dj-sets/">EDMTunes</OutboundLink>, and more.)
          After building Playlistify, I got involved with engineering at 1001Tracklists, contributing to
          {' '}<OutboundLink target="_blank" rel="noopener noreferrer" href="https://www.songstats.com">Songstats</OutboundLink> which is a music analytics platform for artists and labels.
        </p>
        <p>
          When not writing code, I try to get some tennis matches in, go on hikes, snowboard, skate around town, experience live music, <OutboundLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=59IGGEt1NJ4">fly
          my drone</OutboundLink>, or do some spirited driving/go on road trips. In 2021, I
          {' '}<OutboundLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLH9VwmjX_n5uxCDKnVkDwiPaUqVnxqepu">built a campervan</OutboundLink>
          {' '}after importing it from Japan.
        </p>
        <p>
          Get in touch <Link to="/contact">here</Link> or on <OutboundLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/iAligator">Twitter</OutboundLink>.
        </p>
      </div>
    </>
);

export default About;
