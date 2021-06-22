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
        <img width="30%" src={img.imagesrc} alt="" />
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
        <Text>
          <a href="https://codepen.io/DexterShepherd/pen/OBMpVE?editors=0100" target="_blank">
            glitch demo
          </a>
        </Text>
        <img width="60%" src={img.justifycontent} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Direction and Align Items</Subtitle>
        <Text>
          <a href="https://codepen.io/DexterShepherd/pen/gBPmWj?editors=0100" target="_blank">
            glitch demo
          </a>
        </Text>

        <img width="60%" src={img.flexdirection} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Wrap</Subtitle>
        <Text>
          <a href="https://codepen.io/DexterShepherd/pen/oabZyp?editors=1100" target="_blank">
            glitch demo
          </a>
        </Text>
        <img width="60%" src={img.wrap} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Grow</Subtitle>
        <Text>
          <a href="https://codepen.io/DexterShepherd/pen/aRdJjw?editors=0100" target="_blank">
            glitch demo
          </a>
        </Text>

        <img width="60%" src={img.grow} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>These examples are largely drawn from this fantastic write up on css-tricks</Subtitle>
        <Text>
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">
            A Complete Guide to Flexbox
          </a>
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Background Images and Effects</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Image</Subtitle>
        <Text>
          <a href="https://codepen.io/DexterShepherd/pen/mzVmRZ?editors=1100" target="_blank">
            glitch demo
          </a>
        </Text>
        <img width="60%" src={img.backgroundimage} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Gif</Subtitle>
        <Text>
          <a href="https://codepen.io/DexterShepherd/pen/EdPmwL?editors=1100" target="_blank">
            glitch demo
          </a>
        </Text>
        <img width="60%" src={img.backgroundgif} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Quick note on giphy for background gifs</Subtitle>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="60%" src={img.giphy1} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="60%" src={img.giphy2} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="60%" src={img.giphy3} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Gradients</Subtitle>
        <Text>
          <a
            href="
        https://codepen.io/DexterShepherd/pen/zmrwLL?editors=1100"
            target="_blank"
          >
            glitch demo
          </a>
        </Text>
        <img width="60%" src={img.gradient} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Embedded content</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>
          We're entering the wild west a bit here. Different sites embed content in different ways, so you might need to
          mess around a bit to get something you like.
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>YouTube</Subtitle>
        <Text>find a video you like, and look for the share option in the bottom left corner</Text>
        <img width="60%" src={img.youtube1} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        
        <img width="60%" src={img.youtube2} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>Click the embed option from the share menu and copy the embed code.</Text>
        <img width="60%" src={img.youtube3} alt="" />
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
