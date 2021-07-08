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


const Week6 = () => (
  <Slideshow>
    <Slide>
      <VertCenter>
        <Title>Week 6</Title>
        <Subtitle>Review</Subtitle>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>No Slides This Week</Title>
        <Subtitle>Video Demo Instead</Subtitle>
        <Text>
          <em>build a site from the ground up</em>
        </Text>
      </VertCenter>
    </Slide>

    

  </Slideshow>
)

export default Week6
