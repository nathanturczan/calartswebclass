import React from 'react'
import { Slideshow, Slide, SlidePink } from '../components/Slideshow'
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


const Week9 = () => (
  <Slideshow>
    <Slide>
      <VertCenter>
        <Title>Week 9</Title>
        <Subtitle>no slides this week</Subtitle>
        <Subtitle>let's review what we've learned so far</Subtitle>
        <Text>
          <em>watch this demo video:</em>
        </Text>
      </VertCenter>
    </Slide>
    

  </Slideshow>
)

export default Week9
