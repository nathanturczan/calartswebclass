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
        <p>new lecture videos / assignments posted Tuesday afternoons</p>
      </Header>
      <Section>
        <Subtitle>Syllabus</Subtitle>
        <Link to="/syllabus">Syllabus</Link>
      </Section>
      <Section>
        <Subtitle>Sessions</Subtitle>
        <Slides>
          <li>
            <SlideLink to="/week1">Week 1</SlideLink>
            <SlideDesc>
              <em>Welcome to the course 👋</em>
              <p>
                <a href="https://youtu.be/kSt9Gssf-Kk">Video Lecture</a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week2">Week 2</SlideLink>
            <SlideDesc>
              <em>Intro to HTML 🕸️</em>
              <p>
                <a href="https://youtu.be/RNVPJnML9F0">Video Lecture</a>
              </p>
              <p>
                <a href="https://glitch.com/edit/#!/icom101-week1-start">HTML homework starting point (on Glitch)</a>
              </p>
              <p>
                <a href="https://loom.com/share/folder/cfb57ebd5b774edab3d3eb557fab68e8">
                  HW feedback videos!
                </a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week3">Week 3</SlideLink>
            <SlideDesc>
              <em>Intro to CSS 💻</em>
              <p>
                <a href="https://youtu.be/tlzUA_ijW0w">
                  Video Lecture
                </a>
              </p>
              <p>
                <a href="https://youtu.be/fs0ttsrkb7g">
                  HW demo
                </a>
              </p>
              <p>
                <a href="https://loom.com/share/folder/9744038c51cf4f42b59d3ed6f3d0383b">
                  HW feedback videos!
                </a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week4">Week 4</SlideLink>
            <SlideDesc>
              <em>Advanced CSS 😎</em>
              <p>
                <a href="https://www.loom.com/share/b99422df88c74b09b98a0b9220e87a94">
                  Video Lecture
                </a>
              </p>
              <p>
                <a>
                  HW feedback videos!
                </a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week5">Week 5</SlideLink>
            <SlideDesc>
              <em>No More Glitch 🚫🐠</em>
              <p>
                <a href="https://www.loom.com/share/b99422df88c74b09b98a0b9220e87a94">
                  Video Lecture
                </a>
              </p>
              <p>
                <a>
                  HW feedback videos!
                </a>
              </p>
            </SlideDesc>
          </li>
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
