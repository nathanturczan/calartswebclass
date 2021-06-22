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
          <a href="https://glitch.com/edit/#!/jusitfy-content-demo" target="_blank" rel="noopener noreferrer">
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
          <a href="https://glitch.com/edit/#!/flex-direc-align-demo" target="_blank" rel="noopener noreferrer">
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
          <a href="https://glitch.com/edit/#!/wrap-demo" target="_blank" rel="noopener noreferrer">
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
          <a href="https://glitch.com/edit/#!/flex-grow-demo" target="_blank" rel="noopener noreferrer">
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
          <a href="https://glitch.com/edit/#!/backgroundimg-demo" target="_blank" rel="noopener noreferrer">
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
          <a href="https://glitch.com/edit/#!/gif-bckgrnd-demo" target="_blank" rel="noopener noreferrer">
            glitch demo
          </a>
        </Text>
        <img width="60%" src={img.backgroundgif} alt="" />
      </VertCenter>
    </Slide>
    
    <Slide>
      <VertCenter>
        <Subtitle>Gradients</Subtitle>
        <Text>
          <a href="https://glitch.com/edit/#!/gradient-bckgr-demo"
            target="_blank" rel="noopener noreferrer">glitch demo
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
        <img width="40%" src={img.youtube1} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="40%" src={img.youtube2} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>Click the embed option from the share menu and copy the embed code.</Text>
        <img width="80%" src={img.youtube3} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Vimeo</Subtitle>
        <img width="40%" src={img.vimeo1} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>
          The idea with most of these things is pretty similar. You look for the share button, then find the embed code
          to copy.
          <br />
          <br />
          embed codes usually start with an <code>iframe</code> element
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>
          <a href="https://glitch.com/edit/#!/vimeo-embed-demo" target="_blank" rel="noopener noreferrer">glitch demo</a>
        </Text>
        <img width="60%" src={img.vimeo} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>SoundCloud</Subtitle>
        <Text>
          <a href="https://glitch.com/edit/#!/soundcloud-embed-emo" target="_blank" rel="noopener noreferrer">glitch demo</a>
        </Text>
        <img width="60%" src={img.soundcloud} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>
          Embedding videos in in a way that works with different screen sizes is notoriously complicated.
          <br />
          A nice image that links to the video can be a better approach.
          <br />
          If you absolutely need to embed something responsively, check out:
          <br />
          <br />
          <a href="http://embedresponsively.com/" target="_blank" rel="noopener noreferrer">
            Embed Responsively
          </a>
          <br />
          <br />
          They provide an alternate embed code that sometimes looks nicer.
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Psuedo-selectors</Subtitle>
        <Text>
          In addition to the tag/class/descendant selectors we looked at last week, css gives{' '}
          <code>psuedo-selectors</code>.<br />
          <br />
          These allow us to select an element based on a few more complex rules.
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>
          There are many psuedo-selectors, most are specific to certain uses, but some of the more general ones are
        </Subtitle>
        <List>
          <Item>
            <code>:first-child / :last-child</code>
          </Item>
          <Item>
            <code>:first-of-type / :last-of-type</code>
          </Item>
          <Item>
            <code>:hover</code>
          </Item>
          <Item>
            <code>:active</code>
          </Item>
        </List>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>first/last-child and first/last-of-type</Subtitle>
        <Text>
          <a href="https://glitch.com/edit/#!/pseudoselector-demo" target="_blank" rel="noopener noreferrer">glitch demo</a>
        </Text>
        <img width="60%" src={img.firstchild} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>hover</Subtitle>
        <Text>
          <a href="https://glitch.com/edit/#!/hover-demo" target="_blank" rel="noopener noreferrer">glitch demo</a>
        </Text>
        <img width="40%" src={img.active} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Subtitle>Active</Subtitle>
        <Text>
          <a href="https://glitch.com/edit/#!/active-button-demo" target="_blank" rel="noopener noreferrer">glitch demo</a>
        </Text>
        <img width="60%" src={img.hover} alt="" />
      </VertCenter>
    </Slide>
  </Slideshow>
)

export default Week4
