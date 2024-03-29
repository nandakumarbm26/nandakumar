import { colors } from "@/theme";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Link from "next/link";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HLink } from "./Types";
function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{
          background: colors.dark,
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Dec-2023 - Present"
        iconStyle={{ background: colors.fanta, color: "#fff" }}
        icon={
          <Box
            bg="url(./icons/workplace.svg)"
            bgSize="contain"
            transform="scale(0.7)"
            width="100%"
            height="100%"
          />
        }
      >
        <Stack gap="10px" padding={{ b: "10px", md: "50px" }}>
          <Heading as="h3" fontSize="xl">
            Co-Founder (Technology)
          </Heading>
          <Heading as="h4" fontSize="l" color="fanta">
            <Link href="https://www.cosmictech.io" target="_blank">
              CosmicTech.io
            </Link>
          </Heading>
          <p>
            CosmicTech redefines networking with cutting-edge NFC digital
            business cards. Elevate your connections with a simple tap, merging
            innovation and sustainability. Transform your professional presence,
            one cosmic connection at a time.
          </p>
          <Button
            fontFamily="roboto"
            background="fanta"
            color="black"
            as="a"
            href="https://www.cosmictech.io/nandakumar"
            _hover={{ background: "blush" }}
            rightIcon={<ExternalLinkIcon />}
          >
            my cosmic profile (digital business card).
          </Button>
        </Stack>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          background: colors.dark,
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Aug-2023 - Present"
        iconStyle={{ background: colors.fanta, color: "#fff" }}
        icon={
          <Box
            bg="url(./icons/workplace.svg)"
            bgSize="contain"
            transform="scale(0.7)"
            width="100%"
            height="100%"
          />
        }
      >
        <Stack gap="10px" padding={{ b: "10px", md: "50px" }}>
          <Heading as="h3" fontSize="xl">
            Graduate Engineer Trainee ( Data Engineering )
          </Heading>
          <Heading as="h4" fontSize="l" color="fanta">
            Mercedes-Benz R&D India
          </Heading>
          <ul>
            <li>NLP for relevant document suggestion</li>
            <li>Power BI dashboards creation for Business data</li>
            <li>Data Engineering tools training (pyspark, databricks, SQL)</li>
            <li>
              Skills: python, NLP, ML, AI. Big data, data analytics, powerBI,
              pyspark, sparkSQL databricks
            </li>
          </ul>
        </Stack>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          background: colors.dark,
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Apr-2023 - June-2023"
        iconStyle={{ background: colors.fanta, color: "#fff" }}
        icon={
          <Box
            bg="url(./icons/workplace.svg)"
            bgSize="contain"
            transform="scale(0.7)"
            width="100%"
            height="100%"
          />
        }
      >
        <Stack gap="10px" padding={{ b: "10px", md: "50px" }}>
          <Heading as="h3" fontSize="xl">
            Software Development Intern
          </Heading>
          <Heading as="h4" fontSize="l" color="fanta">
            SkilZen EdTech
          </Heading>
          <ul>
            <li>Responsible for the development of user interface.</li>
            <li> Convert figma design into responsive websites.</li>
            <li>API integration to the web application</li>
            <li>
              Performed SEO for the data intensive blogs website. Utilized SEO
              features of nextjs to the best.
            </li>

            <li>Worked on Automation of workflows in Directus CMS.</li>
            <li>Nextjs 13 migration from older version of nextjs</li>
            <li style={{ fontStyle: "italic", fontSize: "14px" }}>
              Skills: nextjs, nodejs, javascript, html, tailwind css, Typescript
            </li>
          </ul>
        </Stack>
      </VerticalTimelineElement>{" "}
      <VerticalTimelineElement
        contentStyle={{
          background: colors.dark,
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Aug-2022 - Nov-2022"
        iconStyle={{ background: colors.fanta, color: "#fff" }}
        icon={
          <Box
            bg="url(./icons/workplace.svg)"
            bgSize="contain"
            transform="scale(0.7)"
            width="100%"
            height="100%"
          />
        }
      >
        <Stack gap="10px" padding={{ b: "10px", md: "50px" }}>
          <Heading as="h3" fontSize="xl">
            Software Development Intern
          </Heading>
          <Heading as="h4" fontSize="l" color="fanta">
            Saigeware Technologies, Bengaluru, Karnataka
          </Heading>
          <ul>
            <li>
              Built a website with in-house blog application using modern tech
              MERN stack along with nextjs framework.
            </li>
            <li> Responsible End-to-End development of the project.</li>
            <li>
              Deployed on Firebase hosting along with firestore as data storage
              capabilities.
            </li>
            <li>
              Performed Search Engine optimization of web page which increased
              the organic traffic to the website.
            </li>

            <li>
              <Link href="https://saigeware.com/">https://saigeware.com/</Link>
            </li>
            <li>
              Integrated encryption and decryption process for existing C#
              application to meet US data privacy rules.
            </li>
            <li style={{ fontStyle: "italic", fontSize: "14px" }}>
              Skills: NextJS · Node.js · HTML · JavaScript · MERN Stack ·
              React.js · Firebase · SEO
            </li>
          </ul>
        </Stack>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          background: colors.dark,
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Jan 2022 - June 2022"
        iconStyle={{ background: colors.sagegreen, color: "#fff" }}
        icon={
          <Box
            bg="url(./icons/workplace.svg)"
            bgSize="contain"
            transform="scale(0.7)"
            width="100%"
            height="100%"
          />
        }
      >
        <Stack gap="10px" padding={{ b: "10px", md: "50px" }}>
          <Heading as="h3" fontSize="xl">
            Web Developer Intern
          </Heading>
          <Heading as="h4" fontSize="l" color="sagegreen">
            AEQUM india, Bengaluru, Karnataka
          </Heading>
          <ul>
            <li>
              Major contribution to the Virtual try on application development
              for apparels and fashion.
            </li>
            <li>
              Built a web application to process the photographs taken on webcam
              or mobiles into US-UK passport photo document. This application
              can give accurate dimension and meets all the specifications for
              the photographs.
            </li>
            <li>
              Used opencv-python and mediapipe libraries to process the images
              and open source libraries to increase photograph quality.
            </li>
            <li>
              Responsible for maintaining codebase on server and continuous
              integration of new features.
            </li>
            <li style={{ fontStyle: "italic", fontSize: "14px" }}>
              Skills: Redux.js · Node.js · HTML · JavaScript · MERN Stack ·
              React.js · Flask · Shopify · Python (Programming Language)
            </li>
          </ul>
        </Stack>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          background: colors.dark,
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        className="vertical-timeline-element--education"
        date="Aug 2019 - present"
        iconStyle={{ background: colors.fanta, color: "#fff" }}
        icon={
          <Box
            bg="url(./icons/graduation.svg)"
            bgSize="contain"
            transform="scale(0.7)"
            width="100%"
            height="100%"
          />
        }
      >
        <Stack gap="10px" padding={{ b: "10px", md: "50px" }}>
          <Heading as="h3" fontSize="xl">
            Bachelor of Engineering, Computer Science Engineering
          </Heading>
          <Heading as="h4" fontSize="l" color="fanta">
            JSS Academy of Technical Education, Bengaluru, Karnataka
          </Heading>
          <ul>
            <li>
              {" "}
              Participated in several intercollegiate technical events. Secured
              position in top 10 in Hackwell 4.0.{" "}
            </li>
            <li>
              {" "}
              Technical Courses: Data Structures and Algorithms, Operating
              Systems, Database Management Systems, Object Oriented Programming,
              Computer Networks, Analysis and Design of Algorithms
            </li>
            <li>
              Courses and Certification:
              <ul style={{ marginLeft: "20px", color: colors.blush }}>
                <li>
                  <Link href="https://www.udemy.com/certificate/UC-1437d416-88a0-42fd-92e3-132c6c124b9e/">
                    Data Structures from Udemy
                  </Link>
                </li>
                <li>
                  <Link href="https://www.coursera.org/account/accomplishments/verify/XLEV2E7QG7RX">
                    AI/ML from Coursera
                  </Link>
                </li>
                <li>
                  <Link href="https://courses.edx.org/certificates/193bae79596144c2a2a0e46ac631515d">
                    Full Stack Web development from EDX
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </Stack>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
