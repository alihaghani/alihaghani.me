import React from 'react';

import { OutboundLink } from "gatsby-plugin-google-analytics"

import headshot from '../images/headshot.png';

const About = () => (
    <div style={{
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ textAlign: 'center' }}>
        <img src={headshot} alt="Ali Haghani" />
      </div>
      <div
        className="about-text"
        style={{
          maxWidth: '600px',
          padding: '20px',
          alignSelf: 'center',
        }}>
        <p>
          I'm a Business and Computer Science grad from the University of British Columbia.
          Currently a software engineer at Twitter in San Francisco. Prior to that, I interned at
          RBC, GE Digital, and Twitter during undergrad.
        </p>
        <p>
          On the side, I developed <OutboundLink target="_blank" rel="noopener noreferrer" href="http://playlistify.app">Playlistify</OutboundLink> which allows you
          to create playlists from live sets, DJ mixes, and concerts (featured on <OutboundLink target="_blank" href="https://djmag.com/news/new-app-turns-dj-mixes-spotify-and-apple-music-playlists">DJMag</OutboundLink>, <OutboundLink target="_blank" href="https://www.youredm.com/2019/12/01/create-playlists-from-dj-sets/">YourEDM</OutboundLink>, <OutboundLink target="_blank" href="- https://www.edmtunes.com/2019/12/new-web-app-allows-you-to-make-spotify-and-apple-music-playlists-from-dj-sets/">EDMTunes</OutboundLink>, and more.)
          Since building Playlistify, I've also been involved with engineering at 1001Tracklists, helping
          build <OutboundLink target="_blank" rel="noopener noreferrer" href="https://www.1001trackstats.com">1001Trackstats</OutboundLink> which is a music analytics platform for artists and labels.
        </p>
        <p>
          When I'm not writing code, I try to get some tennis matches in, go on hikes, snowboard, <OutboundLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=59IGGEt1NJ4">fly
          my drone</OutboundLink>, or do some spirited driving/go on road trips. Get in touch below or on <OutboundLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/iAligator">Twitter</OutboundLink>.
        </p>
      </div>
    </div>
);

export default About;
