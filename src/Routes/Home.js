import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Header>
        <Title>Media and Web Development</Title>
        <Subtitle>
          <em>ICOM-101 / MTEC-617</em>
        </Subtitle>
        <p>remote | asynchronous</p>
        <p>new lecture videos / assignments posted Wednesdays at 6pm</p>
      </Header>
      <Section>
        <Subtitle>Syllabus</Subtitle>
        <Link to="/syllabus">Syllabus</Link>
      </Section>
      <Section>
        <Subtitle>Sessions</Subtitle>
        <Slides>
          <li>
            <SlideLink to="/week1">Week 1 slides</SlideLink>
            <SlideDesc>
              <em>Welcome to the course</em> 👋
              <p>
                <a href="https://youtu.be/kSt9Gssf-Kk">Video Lecture</a>
              </p>
            </SlideDesc>
          </li>
           <li>
            <SlideLink to="/week2">Week 2 slides</SlideLink>
            <SlideDesc>
              <em>Intro to HTML</em> 🕸️
              <p>
                <a href="https://youtu.be/-O92u45Bi7E">Video Lecture!</a>
              </p>
              <p>
                <a href="https://glitch.com/edit/#!/icom-101-week-2-html-hw-startingpoint">HTML homework starting point (on Glitch)</a>
              </p>

              <p>
                <a href="https://glitch.com/edit/#!/icom101-week1-start">Homework demo / example</a>
              </p>
              <p>
                <a href="https://loom.com/share/folder/1ec066ec22584162bce7782aa9750068
">
                  HW feedback videos.
                </a> 
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week3">Week 3 slides</SlideLink>
            <SlideDesc>
              <em>Intro to CSS</em> 💻
              <p>
                <a href="https://www.loom.com/share/080c1de148304c12af933e361f340098">
                  Video Lecture
                </a>
              </p>
              <p>
                <a href="https://youtu.be/fs0ttsrkb7g">
                  HW demo
                </a>
              </p>
              <p>
                <p>
                  HW feedback videos coming soon
                </p>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="">Week 4 - no slides</SlideLink>
            <SlideDesc>
              <em>Present Intro to CSS HW</em> 🗣️
            </SlideDesc>
          </li>
{/*          <li>
            <SlideLink to="/week5">Week 5 slides</SlideLink>
            <SlideDesc>
              <em>Advanced CSS</em> 😎
              <p>
                <a href="https://www.loom.com/share/b99422df88c74b09b98a0b9220e87a94">
                  Video Lecture
                </a>
              </p>
              <p>
                <a href="https://loom.com/share/folder/cef74f30f9ba4a308d756b520f2ed1a0">
                  HW feedback videos!
                </a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week6">Week 6 slides</SlideLink>
            <SlideDesc>
              <em>No More Glitch</em> 🚫🐠
              <p>
                <a href="https://www.loom.com/share/a7feb88082f74ad4add0fc8b751d8d8b">
                  Video Lecture
                </a>
              </p>
              <p>
                <a >
                  HW feedback videos!
                </a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week7">Week 7</SlideLink>
            <SlideDesc>
              <em>Review</em> ⭐⭐⭐⭐⭐
              <p>
                <a href="https://www.loom.com/share/55d3e5d6da8f4ccd8b94cb38108f49d9">
                  Video: Demonstrating Building a Website from the Ground Up
                </a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week8">Week 8</SlideLink>
            <SlideDesc>
              <em>Deployment</em> 🚀
              <p>
                <a href="https://www.loom.com/share/abdebabf773c416d8635718bb3bf6180">
                  Lecture Video
                </a>
              </p>
            </SlideDesc>
          </li>*/}
        </Slides>
      </Section>
    </Container>
  );
};

const Header = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`;
const Container = styled.div`
  padding: 16px;
`;

const Section = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid black;
`;

const SlideLink = styled(Link)`
  display: inline-block;
  margin-bottom: 4px;
`;

const ExternalSlideLink = styled.a`
  display: inline-block;
  margin-bottom: 4px;
`;

const SlideDesc = styled.p`
  margin: 0;
  padding: 0;
`;

const Slides = styled.ul`
  li {
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #a1a1a1;
  }
`;

const Subtitle = styled.h3`
  margin-top: 0;
`;

const Title = styled.h1``;

export default Home;
