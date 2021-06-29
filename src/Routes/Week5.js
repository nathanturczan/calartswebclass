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
import * as img from '../assets/week-5'

const Week5 = () => (
  <Slideshow>
    <Slide>
      <VertCenter>
        <Title>Week 5</Title>
        <Subtitle>Media and Web Development</Subtitle>
        <Text>
          <em>No More Glitch</em>
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Lecture Outline</Title>
        <List>
          <Item>
            <Text>Offline vs Online development</Text>
          </Item>
          <Item>
            <Text>Installing a text editor</Text>
          </Item>
          <Item>
            <Text>
              <em>doctype</em>, <em>html</em>, <em>head</em>, and <em>body</em> tags
            </Text>
          </Item>
          <Item>
            <Text>File Structure, links, and assets</Text>
          </Item>
        </List>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Title>Text editors</Title>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Once we are out of Glitch, we need a text editing program that we can use to write our code.
        </Subtitle>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          This program doesn't <em>have</em> to be anything fancy, anything that can write a <code>html</code> file will
          do, but things are much easier with a programming-specific editor.
        </Subtitle>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>Visual Studio Code</Subtitle>
        <Text>or, VSCode</Text>
        <img width="60%" src={img.codeui} alt="" />
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
          link
        </a>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>Sublime Text</Subtitle>
        <img width="60%" src={img.sublimeui} alt="" />
        <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">
          link
        </a>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>Please download and install <strong>VS CODE</strong> or <strong>SUBLIME TEXT</strong>.<br/><br/>
          If you are more comfortable with another text editor feel free to use that.</Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>Stuff glitch gave us for free...</Subtitle>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>Doctype</Subtitle>
        <img width="60%" src={img.doctype} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>Doctype is not a HTML tag. <br/><br/>

        The doctype <em>declaration</em> is a special instruction to the browser specifying the version of HTML to use when rendering the page.<br/><br/>
          The doctype tag should never change and should <strong>always</strong> be the first line of your html document</Text>

      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>html</Subtitle>
        <img width="60%" src={img.html} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>The <code>html</code> element represents the root of element of your page.<br/><br/> 
        Every other element in your code is a child of the <code>html</code> element.<br/><br/>
        The <code>lang</code> specifies the langauge this documentis written in 
        ( <code>en</code>  meaning english ) and the <code>dir</code> 
        attribute specifies the text direction ( <code>ltr</code> stands 
          for <em>left to right</em>)</Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>head</Subtitle>
        <img width="60%" src={img.head} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>The <code>head</code> tag all the non-visible content on your webpage. 
        This is where we can load stylesheets, set the tab title and icon, 
        and supply any metadata about our site ( more on that later ).
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>body</Subtitle>
        <img width="60%" src={img.body} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>The <code>body</code> tag is where all of our visible content goes. 
        Everything we have written in the HTML pane on codepen has been inserted into the body tag.</Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Title>Everything in context</Title>
        <img width="60%" src={img.context} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Title>File structure, links, and assets.</Title>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>link</Subtitle>
        <img width="60%" src={img.link} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>We can link a stylesheet ( css file ) with a html document with the 
        <code>link</code> tag. The link tag goes in the <strong>head</strong> 
        of the html document<br/><br/>
        The <code>link</code> tag has 2 required attributes.
        <code>href</code> which specifies the path of the file to load, 
        and <code>rel</code> which specifies the relationship between the 
        loading document and the loaded document. In our case <code>rel</code> 
        will always equal "stylesheet"</Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Title>Loading local images</Title>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>

        <img width="60%" src={img.img} alt="" />
        <Text>We can load local images exactly like we loaded images in glitch. 
        Only now, the <code>src</code> attribute of our <code>img</code> 
        tag can point to files stored relative to the html file.</Text>
      </VertCenter>
    </Slide>

  </Slideshow>
)

export default Week5
