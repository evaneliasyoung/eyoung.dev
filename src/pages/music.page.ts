/**
 * @file      music.page.ts
 * @brief     The Music Page.
 *
 * @author    Evan Elias Young
 * @date      2021-09-12
 * @date      2021-09-16
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {mdiMusic, mdiMusicClefBass, mdiMusicClefTreble} from '@mdi/js';
import {
  css,
  CSSResultGroup,
  customElement,
  html,
  LitElement,
} from 'lit-element';
import {Route} from 'lit-element-router';
import {landingStyles} from '../styles/page.styles';

import 'weightless/title';
import 'weightless/text';
import '../elements/container.element';
import '../elements/icon.element';
import '../elements/timeline.element';
import '../elements/timeline-event.element';

@customElement('app-music-page')
export default class MusicPageElement extends LitElement {
  //#region Static Members
  static route: Route & {display: string} = {
    name: 'music',
    pattern: 'music',
    display: 'Music',
  };

  static styles: CSSResultGroup = [
    ...landingStyles,
    css`
      app-timeline-event div video {
        max-width: 100%;
      }
    `,
  ];
  //#endregion

  //#region Render
  protected render = () => html`
    <app-container id="landing-container" centered landing>
      <div>
        <app-icon
          class="flyin over"
          style="--flyin: 0;"
          icon="${mdiMusicClefTreble}"
          color="primary"
        ></app-icon>
        <app-icon
          class="flyin over"
          style="--flyin: 1;"
          icon="${mdiMusic}"
          color="primary"
        ></app-icon>
        <app-icon
          class="flyin over"
          style="--flyin: 2;"
          icon="${mdiMusicClefBass}"
          color="primary"
        ></app-icon>
      </div>
      <wl-text size="large" class="flyin" style="--flyin-time: 1s; --flyin: 4;">
        I play piano, drums, bass, guitar, and like strange music
      </wl-text>
    </app-container>

    <app-container id="timeline-container">
      <app-timeline>
        <app-timeline-event>
          <wl-title slot="headline" level="2">Piano</wl-title>
          <wl-text slot="text">
            A family of professionally trained musicians required that I learn
            piano before I learn guitar, and on my 10th birthday I received a
            keyboard.
          </wl-text>
          <wl-text slot="date">July 27, 2010</wl-text>
        </app-timeline-event>

        <app-timeline-event reversed>
          <wl-title slot="headline" level="2">Green Day</wl-title>
          <wl-text slot="text">
            Early on into middle school, I found myself socializing with people
            who were fans of more mechanical music. This punk band laid the
            framework for a future of harder rock music.
          </wl-text>
          <wl-text slot="date">September 17, 2010</wl-text>
        </app-timeline-event>

        <app-timeline-event>
          <wl-title slot="headline" level="2">Percussion</wl-title>
          <wl-text slot="date">August 13, 2012</wl-text>
        </app-timeline-event>

        <app-timeline-event reversed>
          <wl-title slot="headline" level="2">The Beatles</wl-title>
          <wl-text slot="text">
            Following my discovery of The Beatles, I began to play some of their
            later work on my piano and eventually decided I would need a guitar.
          </wl-text>
          <wl-text slot="date">September 11, 2014</wl-text>
        </app-timeline-event>

        <app-timeline-event>
          <wl-title slot="headline" level="2">Bass</wl-title>
          <wl-text slot="text">
            The move from piano to guitar was more difficult than I had original
            anticipated, so I decided to buy a shortscale bass to facilitate
            practice.
          </wl-text>
          <wl-text slot="date">May 10, 2016</wl-text>
        </app-timeline-event>

        <app-timeline-event reversed>
          <wl-title slot="headline" level="2">Guitar</wl-title>
          <wl-text slot="text">
            After several months of practicing bass guitar, I decided that it
            was time to purchase a guitar, take my calluses to chords, and
            complete my original goal.
          </wl-text>
          <wl-text slot="date">December 25, 2016</wl-text>
        </app-timeline-event>

        <app-timeline-event>
          <wl-title slot="headline" level="2"
            >Bass Records - I Want You</wl-title
          >
          <div slot="content">
            <video
              src="/assets/videos/music/bass0.mp4"
              poster="/assets/images/music/bass0.jpg"
              controls
            ></video>
          </div>
          <wl-text slot="date">January 20, 2018</wl-text>
        </app-timeline-event>

        <app-timeline-event reversed>
          <wl-title slot="headline" level="2">Greta Van Fleet</wl-title>
          <wl-text slot="text">
            Despite mixed reviews from their SNL performance, I found Greta Van
            Fleet to be particularly novel. This furthered my appreciation of
            rock music.
          </wl-text>
          <wl-text slot="date">January 19, 2019</wl-text>
        </app-timeline-event>

        <app-timeline-event>
          <wl-title slot="headline" level="2">Hot Mulligan</wl-title>
          <wl-text slot="text">
            A relatively unheard of midwest emo band, Hot Mulligan captures a
            unique mixture of vocals and instrumentation that peaked my
            interest.
          </wl-text>
          <wl-text slot="date">April 14, 2019</wl-text>
        </app-timeline-event>

        <app-timeline-event reversed>
          <wl-title slot="headline" level="2">JOJI</wl-title>
          <wl-text slot="text">
            My discovery of JOJI was entirely too late, this also included his
            previous works with which I was unfamiliar. Quite the character who
            produces a variety of content.
          </wl-text>
          <wl-text slot="date">October 22, 2019</wl-text>
        </app-timeline-event>

        <app-timeline-event>
          <wl-title slot="headline" level="2"
            >Piano Records - Another Day</wl-title
          >
          <wl-text slot="text">
            A fun piano melody inspired by The Beatles' Martha My Dear; Another
            Day was written for as a parody for the movie The Rutles.
          </wl-text>
          <video
            slot="image"
            src="/assets/videos/music/piano0.mp4"
            poster="/assets/images/music/piano0.jpg"
            controls
          ></video>
          <wl-text slot="date">March 25, 2020</wl-text>
        </app-timeline-event>

        <app-timeline-event reversed>
          <wl-title slot="headline" level="2">COVID Records - Rain</wl-title>
          <wl-text slot="text">
            I started off with my absolute favorite bassline from the Beatles,
            Rain. Suggestions from several friends started the weekly quarantine
            bass lines.
          </wl-text>
          <video
            slot="image"
            src="/assets/videos/music/covid0.mp4"
            poster="/assets/images/music/covid0.jpg"
            controls
          ></video>
          <wl-text slot="date">April 1, 2020</wl-text>
        </app-timeline-event>

        <app-timeline-event>
          <wl-title slot="headline" level="2"
            >COVID Records - Being for the Benefit of Mr. Kite!</wl-title
          >
          <wl-text slot="text">
            Of course! Sgt. Pepper's wins the first week! Go ahead and drop me
            some more songs! The verse was active and syncopated, featuring a
            triplet driven lead break.
          </wl-text>
          <video
            slot="image"
            src="/assets/videos/music/covid1.mp4"
            poster="/assets/images/music/covid1.jpg"
            controls
          ></video>
          <wl-text slot="date">April 9, 2020</wl-text>
        </app-timeline-event>

        <app-timeline-event reversed>
          <wl-title slot="headline" level="2"
            >COVID Records - Californication</wl-title
          >
          <wl-text slot="text">
            This was a pretty solid suggestion from a good friend of mine. Keep
            suggesting things! The verse was simple, but effective, and the
            chorus was quite fun.
          </wl-text>
          <video
            slot="image"
            src="/assets/videos/music/covid2.mp4"
            poster="/assets/images/music/covid2.jpg"
            controls
          ></video>
          <wl-text slot="date">April 16, 2020</wl-text>
        </app-timeline-event>

        <app-timeline-event>
          <wl-title slot="headline" level="2"
            >COVID Records - Feel Good Inc.</wl-title
          >
          <wl-text slot="text">
            An aboslute bass classic! Put this on up to vote by myself, figured
            it would receive high praise. This features a simplistic groove
            throughout and anyone that puts zher mind to should be able to play.
          </wl-text>
          <video
            slot="image"
            src="/assets/videos/music/covid3.mp4"
            poster="/assets/images/music/covid3.jpg"
            controls
          ></video>
          <wl-text slot="date">April 23, 2020</wl-text>
        </app-timeline-event>

        <app-timeline-event reversed>
          <wl-title slot="headline" level="2"
            >COVID Records - Longview</wl-title
          >
          <wl-text slot="text">
            I have to reserve my appreciation of their new album for the sake of
            popularity, so I suggested a timeless Green Day album. The verse
            lick is pretty solid and the transition chords are my favorite
            sections to play.
          </wl-text>
          <video
            slot="image"
            src="/assets/videos/music/covid4.mp4"
            poster="/assets/images/music/covid4.jpg"
            controls
          ></video>
          <wl-text slot="date">April 30, 2020</wl-text>
        </app-timeline-event>
      </app-timeline>
    </app-container>
  `;
  //#endregion
}
