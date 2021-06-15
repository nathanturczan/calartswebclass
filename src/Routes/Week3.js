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
    <SlidePink>
      <VertCenter>
        <img width="50%" src={img.sel1demo} alt="" />
        <Text><a href='https://glitch.com/edit/#!/css-selectors-demo'>glitch demo</a></Text>
      </VertCenter>
    </SlidePink>
    <Slide>
      <VertCenter>
        <Text>We can select child tags based on their parents.</Text>
        <img width="50%" src={img.sel2} alt="" />
        <Text>Apply an underline style to all p tags that are children of a div tag.</Text>
        <Text>This is a <em>general</em> descendent selector.</Text>
      </VertCenter>
    </Slide>
    <SlidePink>
      <VertCenter>
        <img width="50%" src={img.sel2demo} alt="" />
      </VertCenter>
    </SlidePink>
    <Slide>
      <VertCenter>
        <Text><p>In addition to general descendent selector, we can select direct descendents, or siblings.</p></Text>
        <img width="50%" src={img.sel3} alt="" />
      </VertCenter>
    </Slide>
    <SlidePink>
      <VertCenter>
        <img width="50%" src={img.sel3demo} alt="" />
        <Text><a href='https://glitch.com/edit/#!/selector-demo-2'>glitch demo</a></Text>
      </VertCenter>
    </SlidePink>
    <Slide>
      <VertCenter>
        <Text>We can select arbitrary elements with <strong>id</strong> and <strong>class</strong> attributes.</Text>
        <img width="70%" src={img.classid} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>Classes and IDs are html attributes, just like <code>href</code> and <code>src</code> from last week.</Text>
        <img width="70%" src={img.classid} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>Each element may only have one ID, and an ID can only be applied to one element.</Text>
        <img width="70%" src={img.ids} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>Classes can be applied to multiple elements, and an element may have many classes.</Text>
        <img width="70%" src={img.classes} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>Class and ID names can mostly be whatever you want, but must always start with an <code>a-z</code> character.</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>We can select by class in our css with a dot (.) followed by the class name.</Text>
        <img width="70%" src={img.classescss} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>And we can select by id with the hash symbol (#) followed by the id name.</Text>
        <img width="70%" src={img.idscss} alt="" />
      </VertCenter>
    </Slide>
    <SlidePink>
      <VertCenter>
        <img width="50%" src={img.classiddemo} alt="" />
        <Text><a href='https://glitch.com/edit/#!/class-id-demo'>class & ID glitch demo</a></Text>
      </VertCenter>
    </SlidePink>
    <Slide>
      <VertCenter>
        <Text>Classes and IDs are confusing at first. <a href="https://css-tricks.com/the-difference-between-id-and-class/">This</a> article on <strong>CSS tricks</strong> gives a good overview of the difference between the two.</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Web Colors!</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="50%" src={img.color1} alt="" />
        <Text>The easiest way to define colors is using one of the 140 <em><a href="https://htmlcolorcodes.com/color-names/" target="_blank">named colors</a></em> supported by modern browsers.</Text>
      </VertCenter>
    </Slide>
    <SlidePink>
      <VertCenter>
        <img width="50%" src={img.colors1demo} alt="" />
        <Text><a href='https://glitch.com/edit/#!/web-colors-demo'>web colors glitch demo</a></Text>
      </VertCenter>
    </SlidePink>
    <Slide>
      <VertCenter>
        <img width="50%" src={img.color2} alt="" />
        <Text>We can also define colors with the rgba function. Values between 0 and 255 for Red/Green/Blue, and 0.0 to 1.0 for alpha (opacity).</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="50%" src={img.color3} alt="" />
        <Text>Most commonly, colors are defined with hex codes. This is similar to the RGB notation, but instead of decimal 0 - 255, we use hexadecimal 0 - FF.</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>At then end of the day, the browser doesn't care which of these color formats you use. You should have familiarity with all them, but use whatever you feel most comfortable with.</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Web Fonts!</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>fonts on the web can be complicated </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>We'll look at some of the most common approches, typography nerds might want to look at <a href="https://css-tricks.com/understanding-web-fonts-getting/" target="_blank">this</a> article to get into the nitty gritty.</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>The font-family property and generic fonts.</Text>
        <img width="50%" src={img.font1} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>The <code>font-family</code> CSS property can be used to set the font used when rendering text. <br/> <br/> When you pass a font name to <code>font-family</code> that font will be looked up on the users computer.<br/><br/> 
          The browser provides 3 generic fonts <code>serif/sans-serif/monospace</code> to use as fallbacks when the desired font isn't available.</Text>
      </VertCenter>
    </Slide>
    <SlidePink>
      <VertCenter>
      <img width="70%" src={img.font1demo} alt="" />
      <Text><a href='https://glitch.com/edit/#!/web-fonts-demo'>web fonts glitch demo</a></Text>
      </VertCenter>
    </SlidePink>
    <Slide>
      <VertCenter>
        <Text>For lists of commonly installed fonts and font stacks see <a href="https://www.w3schools.com/cssref/css_websafe_fonts.asp" target='_blank'>w3schools websafe fonts</a> and <a href="https://www.cssfontstack.com/" target="_blank">cssfontstack.com</a></Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Google Fonts</Title>
        <Text><a href="https://fonts.google.com/" target="_blank">google fonts</a></Text>
        <img width="50%" src={img.googlefonts} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>google fonts - start here re: typography for your site</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <TwoHalvesLayout>
          <Half>
            <img width="90%" src={img.googlefonts1} alt="" />
          </Half>
          <Half>
            <img width="90%" src={img.googlefonts11} alt="" />
          </Half>
        </TwoHalvesLayout>
        <Text>+ Select this style</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>In Glitch, we need to use the <code>@import</code> syntax to import fonts directly in our css.</Text>
        <img width="33%" src={img.googlefonts2} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="50%" src={img.googlefonts3} alt="" />
      </VertCenter>
    </Slide>
    <SlidePink>
      <VertCenter>
        <img width="90%" src={img.googlefontsdemo} alt="" />
        <Text><a href="https://glitch.com/edit/#!/google-fonts-demo1">google fonts glitch demo</a></Text>
      </VertCenter>
    </SlidePink>
    <Slide>
      <VertCenter>
        <Title>Font Size & Units</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>The <code>font-size</code> property lets us set the size of our rendered text.<br/><br/>
          You can declare the size in <code>px</code>, <code>em</code>, or <code>vw</code>.</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Text>Pixels is a exact unit, setting a font-size in pixels guarentees it will be the same size for all users.<br/><br/>
          Em is similar to pixels, but accounts for the users global font-size setting. By default, 1em = 16px.<br/><br/>
          Vw stands for viewport width. You can use this unit to make text resize with the browser window. This is useful for large hero text.</Text>
      </VertCenter>
    </Slide>
    <SlidePink>
      <VertCenter>
        <img width="90%" src={img.fontsizedemo} alt="" />
        <Text><a href="https://glitch.com/edit/#!/font-size-demo">font size glitch demo</a></Text>
      </VertCenter>
    </SlidePink>
    <Slide>
      <VertCenter>
        <Text>You can read about more css font rules at w3schools <a href="https://www.w3schools.com/css/css_font.asp" target="_blank">CSS Fonts</a> page</Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Layout / CSS Box Model</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="90%" src={img.layout1} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="90%" src={img.layout2} alt="" />
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <img width="90%" src={img.layout3} alt="" />
      </VertCenter>
    </Slide>
    <SlidePink>
      <VertCenter>
        <img width="90%" src={img.boxmodel} alt="" />
        <Text><a href="https://glitch.com/edit/#!/box-model-demo1">box model Glitch demo</a></Text>
      </VertCenter>
    </SlidePink>


  </Slideshow>
)

export default Week3
