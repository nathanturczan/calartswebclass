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
import * as img from '../assets/week-7'

const Week7 = () => (
  <Slideshow>
    <Slide>
      <VertCenter>
        <Title>Week 7</Title>
        <Subtitle>Media & Web Development</Subtitle>
        <Text>
          <em>Deployment</em>
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Lecture Outline</Title>
        <List>
          <Item>
            <Text>Review</Text>
          </Item>
          <Item>
            <Text>Hosting & Github Pages</Text>
          </Item>
        </List>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Title>Working with Github</Title>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          The deployment part of this process is often a bit of a headache.<br/><br/>
          <em>Github Pages</em> and <em>Google Domains</em> is my preferred method of doing this, 
          but if it's not your cup of tea feel free to research other hosting and domain options. 
          There are many out there.
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          What is github?
        </Subtitle>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Git is a versioning system for keeping track of source code ( and many other things ).<br/><br/>
          We create git <em>repositiories</em> on our computer and track changes to our code locally.<br/><br/>
          Github is a commerical platform that hosts git repositiories in the cloud.<br/><br/>
          Github is primarily used as a collaboration tool, allowing many developers to share access to a single codebase.
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Although Git and Github are hugely useful tools in software development, 
          we won't be going into great depth with them. 
          Our focus is using the <em>pages</em> service of github to host our websites.
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Go to <a href="https://www.github.com" target="_blank">github.com</a> and create your account.
        </Subtitle>
        <Text>
          If you already have one you can skip this, just go sign in.<br/><br/>
          Then go to <a href="https://desktop.github.com/" target="_blank">desktop.github.com</a> 
          and download the desktop client for your OS.<br/><br/>
          Git can be used via the command line (terminal) or from the desktop gui.
          If you prefer command line that's fine, 
          but if you're new to this stuff the desktop client is probably the best bet.
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          From the github UI, make a new repositiory on your computer.
        </Subtitle>
        <img width="60%" src={img.gh1} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Name your repo whatever you want, and save it to the same directory you've been using for this course.
        </Subtitle>
        <img width="60%" src={img.gh2} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Copy <strong>all</strong> the code and assets from last weeks assignment into your new repo.
          The two folders should now be identical.
        </Subtitle>
        <img width="60%" src={img.gh3} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Once your code is copied over, you should see it reflected in the Github Desktop app.
          If you don't, you're copying code to the wrong place.
        </Subtitle>
        <img width="60%" src={img.gh4} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Add a message to the <strong>summary</strong> field and hit <strong>commit</strong>.
        </Subtitle>
        <img width="60%" src={img.gh5} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          All your code will disapear from the app. <strong>This is a good thing</strong>. <br/><br/>
          The code you see in the app represents the <em>changes</em> to your code since your last <em>commit</em>. 
          We've just commited, so none of your code has changed since last commit.
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Now that youre code is committed, hit the "Publish Repository" button to send your code to Github.
        </Subtitle>
        <img width="60%" src={img.gh6} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Navigate to <a href="https://www.github.com" target="_blank">github</a> in your browser,
          and open the repository you just created.
        </Subtitle>
        <img width="60%" src={img.gh7} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
      <Text>
          Go to Settings (top), and then click the Pages tab (left).
        </Text>
      <img width="60%" src={img.public1} alt="" />
        
        <Text>
          
          The repo must be <strong>public</strong> in order to host it on Github Pages. 
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <img width="40%" src={img.public2} alt="" />
          <img width="40%" src={img.public3} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Select Branch: main and the root directory and hit <strong>save</strong>.
        </Subtitle>
        <img width="60%" src={img.gh8} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Wait a minute or so and refresh the settings page.
          You should see a green link above the Github Pages section.
        </Subtitle>
        <img width="60%" src={img.gh9} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Subtitle>
          Congratulations! You have deployed a website.
        </Subtitle>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Title>
          Custom Domains
        </Title>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          I'm going to be using Google Domains for this class. 
          You can use something else if you wish, but you might need to do some documentation digging 
          to work out how to define the records we need.
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Head over to <a href="https://domains.google.com" target="_blank">domains.google.com</a>
        </Text>
        <img width="60%" src={img.domains1} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Click the <em>Find a Domain</em> button, and have a look for the domain you want.
        </Text>
        <img width="60%" src={img.domains2} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Once you've found your domain, add it to your cart and go through the billing flow.
        </Text>
        <img width="60%" src={img.domains3} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          ...
        </Text>
        <img width="60%" src={img.domains4} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Now that you've purchased your domain, go back to your code and create a new file named <em>CNAME</em><br/>
          All caps, no extension.
        </Text>
        <img width="60%" src={img.domains5} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Your <em>CNAME</em> file should look like this, but with your chosen domain.
        </Text>
        <img width="60%" src={img.domains6} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Once you have added your CNAME file, go back to the Github Desktop app, and commit your changes.
        </Text>
        <img width="50%" src={img.domains7} alt="" />
        <Text>
          After commiting, click the <em>Push to Origin</em> button.
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          If you look at your repo settings, we can see that github has read our CNAME file 
          and is asking us to set some stuff up on the Google Domains side.
        </Text>
        <img width="60%" src={img.domains9} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Back on google domains, navigate to the DNS tab of your domain name.
        </Text>
        <img width="40%" src={img.domains10} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          At the bottom of the page, add 2 custom resource records to your domain.<br/><br/>
          The first should be <em>A</em> type record with the name <em>@</em>.<br/><br/>
          The data field needs to be given these 4 IP addresses.<br/><br/>
          <ul>
            <li>185.199.108.153</li>
            <li>185.199.109.153</li>
            <li>185.199.110.153</li>
            <li>185.199.111.153</li>
          </ul>
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          The second resource is a CNAME type resource with name  
          <em>www</em> and data <em>your-github-username.github.io.</em>
        </Text>
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          If you are having trouble, use mine as a reference.
        </Text>
        <img width="60%" src={img.domains11} alt="" />
      </VertCenter>
    </Slide>

    <Slide>
      <VertCenter>
        <Text>
          Once that is all saved you should be good to go. 
          Unfortunately, DNS changes can take up to 48 hours to propagate so be patient.
        </Text>

      </VertCenter>
    </Slide>


  </Slideshow>
)

export default Week7
