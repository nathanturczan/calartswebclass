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
import * as img from '../assets/week-4'

const Week4 = () => (
  <Slideshow>
    <Slide>
      <VertCenter>
        <Title>Week 4</Title>
        <Subtitle>Media and Web Development</Subtitle>
        <Text>
          <em>Advanced CSS</em>
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Lecture Outline</Title>
        <List>
          <Item>
            <Text>review / housekeeping</Text>
          </Item>
          <Item>
            <Text>positioning and layout continued</Text>
          </Item>
          <Item>
            <Text>background images / effects</Text>
          </Item>
          <Item>
            <Text>embedded content</Text>
          </Item>
          <Item>
            <Text>pseudo-selectors</Text>
          </Item>
        </List>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Closing Tags and Quoted Attributes</Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Tag Structure</Subtitle>
        <img width="60%" src={img.structure} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Inline Styles</Subtitle>
        <img width="60%" src={img.inlinestyle} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Image Sources</Subtitle>
        <img width="60%" src={img.imagesrc} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>More positioning and layout</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Flex Box</Subtitle>
        <Text>
          Flex box lets us position elements within a container with greater control than we had with just the box model
          + floats.
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>
          For flex to work, we need a container element with <code>display: flex</code> css rule applied.
        </Text>
        <Text>Any child elements of the flex container will be positioned with the flex rules of the container.</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Justify Content</Subtitle>
        <Text><a href="https://codepen.io/DexterShepherd/pen/OBMpVE?editors=0100" target="_blank"></Text>
        <img width="60%" src={img.justifycontent} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Direction and Align Items</Subtitle>
        <Text><a href="https://codepen.io/DexterShepherd/pen/gBPmWj?editors=0100" target="_blank"></Text>

        <img width="60%" src={img.flexdirection} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle></Subtitle>
        <img width="60%" src={img.tags} alt="" />
      </VertCenter>
    </Slide>
  </Slideshow>
)

export default Week4
