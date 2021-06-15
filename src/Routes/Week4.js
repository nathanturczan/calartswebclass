import React from 'react'
import { Slideshow, Slide } from '../components/Slideshow'
import styled from 'styled-components'
import {
  Title,
  Subtitle,
  Text,
  List,
  Item,
  VertCenter,
  TextCenter,
  ReadabilityBlock,
  CenterReadabilityBlock,
  Half,
  TwoHalvesLayout,
  key,
  colon,
  value,
  semicolon
} from './UI'
import * as img from '../assets/week-3'


const Week3 = () => (
  <Slideshow>
    <Slide>
      <VertCenter>
        <Title>Week 3</Title>
        <Subtitle>Media and Web Development</Subtitle>
        <Text>
          <em>Introduction to CSS</em>
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Lecture Outline</Title>
        <List>
          <Item>
            <Text>CSS - what is it?</Text>
          </Item>
          <Item>
            <Text>CSS Rules</Text>
          </Item>
          <Item>
            <Text>CSS Selectors</Text>
          </Item>
          <Item>
            <Text>Color</Text>
          </Item>
          <Item>
            <Text>Typography</Text>
          </Item>
          <Item>
            <Text>Layout</Text>
          </Item>
        </List>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <ReadabilityBlock>
          <Subtitle>
            CSS is a style sheet language used for describing the presentation of a document written in a markup language
            like HTML.
          </Subtitle>
          <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">Wikipedia</a>
        </ReadabilityBlock>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>CSS makes the web look the way it does!</Subtitle>
      </VertCenter>
    </Slide>
    <Slide>
      <TwoHalvesLayout>
        <Half>
          <img width="99%" src={img.applewstyle} alt="" />
        </Half>
        <Half>
          <img width="99%" src={img.applewostyle} alt="" />
        </Half>
      </TwoHalvesLayout>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>CSS</Title>
        <Text>Cascading Style Sheets</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Cascading because styles flow over many elements.</Subtitle>
        <img width="20%" src={img.cascade} alt="" />
        <Text>When many styles are applied to the same element, they use a <em>cascading priority scheme.</em></Text>
      </VertCenter>
    </Slide>
    
    <Slide>
      <VertCenter>
        <Title>CSS Rules</Title>
        <Subtitle>The 2000 key / value pairs that make websites look nice.</Subtitle>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <ReadabilityBlock>
          <TextCenter>
            <Text>CSS rules are key / value pairs (like HTML attributes).</Text>

            <Text style={{ fontSize: '3em' }}>
              <code>{'color: red;'}</code><br/>
              <code>{'font-size: 24px;'}</code><br/>
              <code>{'padding-left: 8px;'}</code><br/>
              <code>{'text-align: center;'}</code>
            </Text>

          </TextCenter>
        </ReadabilityBlock>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>A rule starts with the <key>key</key>, followed be a <colon>colon</colon>, then the <value>value</value>, ended with a <semicolon>semi-colon</semicolon>.</Text>
        <Text style={{ fontSize: '3em' }}>
          <code>{'color: red;'}</code><br/>
          </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>there are 1000s of CSS rules</Subtitle>
        <Text>We'll learn some together as we go, you'll learn some on your own as you research specific functionality, and the rest you can find on <a href="https://www.w3schools.com/Css/" target='_blank'>w3schools css reference</a></Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>CSS Selectors</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Selectors allow us to choose which elements our CSS rules get applied to.</Subtitle>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>We can select by tag name.</Text>
        <img width="50%" src={img.sel1} alt="" />
        <Text>Apply the <code>color: blue</code> rule to all p tags</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="50%" src={img.sel1demo} alt="" />
        <Text><a href='https://glitch.com/edit/#!/css-selectors-demo'>glitch demo</a></Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
      </VertCenter>
    </Slide>
  </Slideshow>
)

export default Week3
