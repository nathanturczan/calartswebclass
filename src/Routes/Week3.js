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

const VSlide = ({ children }) => (
  <Slide>
    <VertCenter>{children}</VertCenter>
  </Slide>
)
const Week3 = () => (
  <Slideshow>
  // <Slide>
  //       <VertCenter>
  //         <Title>Layout!</Title>
  //       </VertCenter>
  //     </Slide>
  //     <Slide>
  //       <VertCenter>
  //         <Text>Broadly speaking, html elements default to one of 2 layout schemes.</Text>
  //         <List>
  //           <Item>
  //             <Text>Block elements start a new line on the page.</Text>
  //           </Item>
  //           <Item>
  //             <Text>Inline elements can exist on the same line as other inline elements.</Text>
  //           </Item>
  //         </List>
  //       </VertCenter>
  //     </Slide>
  //     <Slide>
  //       <VertCenter>
  //         <Text>Most elements are Block level by default.</Text>
  //         <Text>Some notable exceptions are</Text>
  //         <List>
  //           <Item>
  //             <Text>Image</Text>
  //           </Item>
  //           <Item>
  //             <Text>Anchor</Text>
  //           </Item>
  //           <Item>
  //             <Text>Span</Text>
  //           </Item>
  //         </List>
  //       </VertCenter>
  //     </Slide>
    <VSlide>
      <Title>Welcome</Title>
      <Subtitle>Media and Web Development</Subtitle>
      <Text>
        <em>Week 3 - Introduction to CSS</em>
      </Text>
    </VSlide>
    <VSlide>
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
    </VSlide>
    <VSlide>
      <ReadabilityBlock>
        <Subtitle>
          CSS is a style sheet language used for describing the presentation of a document written in a markup language
          like HTML.
        </Subtitle>
        <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">Wikipedia</a>
      </ReadabilityBlock>
    </VSlide>
    <VSlide>
      <Subtitle>CSS makes the web look the way it does!</Subtitle>
    </VSlide>
  </Slideshow>
)

export default Week3
