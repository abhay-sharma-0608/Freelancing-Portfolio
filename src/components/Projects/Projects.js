import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import onepager from "../../Assets/Projects/onepager.svg";
import amazonclone from "../../Assets/Projects/amazonclone.svg";
import fashionsite from "../../Assets/Projects/fashionsite.svg";
import restaurantsite from "../../Assets/Projects/restaurantsite.svg";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurantsite}
              isBlog={false}
              title="LUMINA - Restaurant Website"
              description="Modern restaurant website built with Vite and React.js, featuring an elegant dark theme, interactive menu, and smooth user experience. Optimized for performance with responsive design and reusable components. Showcases a premium dining experience with refined UI and engaging visuals."
              ghLink="https://github.com/abhay-sharma-0608/Restaurant-SIte"
              demoLink="https://restaurant-site-liart.vercel.app/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onepager}
              isBlog={false}
              title="One Pager Website"
              description="A high-performance one-page fitness website designed with React.js, highlighting gym services, training programs, and transformation-driven storytelling. Includes dynamic animations, responsive design, and seamless navigation for an immersive user experience."
              ghLink="https://github.com/abhay-sharma-0608/One-Pager"
              demoLink="https://one-pager-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonclone}
              isBlog={false}
              title="Amazon Clone"
              description="A full-stack Amazon clone built with React.js and Node.js, featuring a responsive design, user authentication, product listing, shopping cart, and checkout functionality. Integrates secure backend APIs and dynamic state management for a smooth and realistic e-commerce experience."
              ghLink="https://github.com/abhay-sharma-0608/Amazon-Clone"
              demoLink="https://amazon-clone-two-eosin.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashionsite}
              isBlog={false}
              title="DRAPE - Fashion Site"
              description="Modern fashion e-commerce website built with Vite and React.js, featuring a sleek, responsive design with fast performance. Includes category browsing, product previews, and interactive UI for a seamless shopping experience across devices.
"
              ghLink="https://github.com/abhay-sharma-0608/Fashion-Site"
              demoLink="https://fashion-site-beryl.vercel.app/"              
            />
          </Col>

          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
