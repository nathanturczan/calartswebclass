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
  CenterReadabilityBlock
} from './UI'


const Week3 = () => (
  <Slideshow>

    <Slide>
      <Title>Welcome</Title>
      <Subtitle>Media and Web Development</Subtitle>
      <Text>
        <em>Week 3 - Introduction to CSS</em>
      </Text>
    </Slide>
    <Slide>
      <Title>Agenda</Title>
      <List>
        <Item>
          <Text>What is CSS?</Text>
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
    </Slide>
    <Slide>
      <ReadabilityBlock>
        <Subtitle>
          CSS is a style sheet language used for describing the presentation of a document written in a markup language
          like HTML.
        </Subtitle>
        <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">Wikipedia</a>
      </ReadabilityBlock>
    </Slide>
    <Slide>
      <Subtitle>CSS makes the web look the way it does!</Subtitle>
    </Slide>
  </Slideshow>
)

export default Week3
