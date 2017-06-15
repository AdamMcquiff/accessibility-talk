// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Link,
  Layout,
  Fit,
  Fill,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import notes
import slideNotes from "./slide-notes.js";
import codeExamples from "./code-examples.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  khan: require("../assets/khan.jpg"),
  kdog: require("../assets/kdog.jpg"),
  generalElectionResults: require("../assets/nationwide-results-at-a-glance.png"),
  gospelwareHeaders: require("../assets/gospelware-headers.jpg"),
  outlookEmptyState: require("../assets/outlook-empty-state.png"),
  focusWithinExample: require("../assets/focus-within-example.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ffeb3b",
  secondary: "#263238",
  tertiary: "#000a12",
  quartenary: "#4f5b62",
  lightYellow: "#ffff72",
  darkYellow: "#c8b900"
}, {
  primary: { name: "Fira Sans", googleFont: true },
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[0]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Baseline Accessibility
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            A crash course to understanding and wielding A11Y.
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[1]}>
          <Layout fill>
            <Fit>
              <Image src={images.khan} width="450px"></Image>
            </Fit>
            <Fit>
              <Image src={images.kdog} width="450px"></Image>
            </Fit>
          </Layout>
          <Layout>
            <Fill>
              <Text textColor="primary" italic>
                "Is it just me that doesn't <strong>care</strong> about accessibility? It's <strong>boring</strong>."
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightYellow" notes={slideNotes[2]}>
          <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
            What <em>exactly</em> is Accessibility?
          </Heading>
          <Text margin="25px 0 0" textColor="secondary" textSize="1.25em" lineHeight={1.25}>
            Accessibility (a11y) is a measure of a computer system's accessibility is to all people, including those with disabilities or impairments.
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[3]}>
          <Heading size={3} textColor="lightYellow">Almost 1 in 5 people in the UK identify themselves as disabled.</Heading>
          <Text textColor="darkYellow" textSize=".925em">
            Source: Disability Rights Commission, July 2008
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightYellow" notes={slideNotes[4]}>
          <Heading size={3} textColor="tertiary">
            Why is it difficult?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[5]}>
          <Heading size={3} textColor="lightYellow">
            <Link href="http://www.empathyprompts.net">Empathy</Link>
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[6]}>
          <Heading size={3} textColor="primary">
            Screen Readers
          </Heading>
          <List textColor="primary">
            <ListItem>Windows - NVDA</ListItem>
            <ListItem>Mac - VoiceOver for Mac</ListItem>
            <ListItem>iOS - VoiceOver on iOS</ListItem>
            <ListItem>Android - TalkBack</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[7]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Labels
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Adding and writing useful labels
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[8]}>
          <CodePane textSize="1em">
            {codeExamples.labels[0]}
          </CodePane>
          <Appear>
            <Text margin="25px 0 0" textColor="lightYellow" size={3} fit>
              'Read More. Read More. Read More. Read More.'
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[9]}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            WAI-ARIA
          </Heading>
          <Text margin="10px 0 0" textColor="lightYellow" size={3} fit>
            Web Accessibility Initiative - Accessible Rich Internet Applications
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[10]}>
          <Text margin="0 0 15px 0" textColor="lightYellow" size={3}>
            aria-label
          </Text>
          <CodePane textSize=".5em">
            {codeExamples.labels[1]}
          </CodePane>
          <Text margin="50px 0 15px 0" textColor="lightYellow" size={3}>
            aria-labelledby
          </Text>
          <CodePane textSize=".5em">
            {codeExamples.labels[2]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[11]}>
          {/*<Heading size={2} caps lineHeight={1} textColor="primary">
            Android
          </Heading>*/}
          <Text margin="25px 0 15px 0" textColor="lightYellow" size={3}>
            contentDescription
          </Text>
          <CodePane textSize=".5em">
            {codeExamples.labels[3]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[12]}>
          {/*<Heading size={2} caps lineHeight={1} textColor="primary">
            Swift
          </Heading>*/}
          <Text margin="25px 0 15px 0" textColor="lightYellow" size={3}>
            accessibilityLabel
          </Text>
          <CodePane textSize=".5em">
            {codeExamples.labels[4]}
          </CodePane>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[13]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Form Inputs
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Creating accessible form inputs
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[14]}>
          <CodePane textSize=".8em">
            {codeExamples.forms[0]}
          </CodePane>
          {/* Add img? */}
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[15]}>
          <CodePane textSize=".8em">
            {codeExamples.forms[1]}
          </CodePane>
          {/* Add img? */}
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[16]}>
          <CodePane textSize=".8em">
            {codeExamples.forms[2]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[17]}>
          <CodePane textSize=".8em">
            {codeExamples.forms[3]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[18]}>
          <CodePane textSize=".8em">
            {codeExamples.forms[4]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[19]}>
          <CodePane textSize=".8em">
            {codeExamples.forms[5]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[20]}>
          <Text textColor="lightYellow" size={3}>
            Placeholders are good.
          </Text>
          <Text margin="25px 0 0 0" textColor="lightYellow" size={3}>
            Placeholder are <em>not</em> replacements for labels.
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[21]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Writing Good Labels
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Provide labels that <em>actually</em> help
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[22]}>
          <Text textColor="lightYellow" size={3}>
            Keep your labels short
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[23]}>
          <Text textColor="lightYellow" size={3}>
            ‘Logout Button. Logout of account adam@gospelware.co.uk and return to homepage’
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[24]}>
          <Text textColor="lightYellow" size={3}>
            ‘Logout of adam@gospelware.co.uk’
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[25]}>
          <Text textColor="lightYellow" size={3}>
            Your labels should not describe the control type
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[26]}>
          <Text textColor="lightYellow" size={3}>
            'Message Field.'
          </Text>
          <Text margin="25px 0 0 0" textColor="lightYellow" size={3}>
            'Settings Button.'
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[27]}>
          <Text textColor="lightYellow" size={3}>
            'Message.'
          </Text>
          <Text margin="25px 0 0 0" textColor="lightYellow" size={3}>
            'Settings.'
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[28]}>
          <Text textColor="lightYellow" size={3}>
            Your labels should not describe the control state
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[29]}>
          <Text textColor="lightYellow" size={3}>
            'Accept Terms and Conditions is selected'
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[30]}>
          <Text textColor="lightYellow" size={3}>
            'Accept Terms and Conditions'
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[31]}>
          <Text textColor="lightYellow" size={3}>
            Describe what the element does
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[32]}>
          <Text textColor="lightYellow" size={3}>
            'Burger menu icon.'
          </Text>
          <Text margin="25px 0 0 0" textColor="lightYellow" size={3}>
            'Pencil icon.'
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[33]}>
          <Text textColor="lightYellow" size={3}>
            'Show/hide navigation menu.'
          </Text>
          <Text margin="25px 0 0 0" textColor="lightYellow" size={3}>
            'Edit text.'
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[34]}>
          <Text textColor="lightYellow" size={3}>
            Do not discuss gesture or interaction, describe the task
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[35]}>
          <Text textColor="lightYellow" size={3}>
            'Tap to speak'
          </Text>
          <Text margin="25px 0 0 0" textColor="lightYellow" size={3}>
            'Click to start'
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[36]}>
          <Text textColor="lightYellow" size={3}>
            'Voice search'
          </Text>
          <Text margin="25px 0 0 0" textColor="lightYellow" size={3}>
            'Start game'
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[37]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Dialogs
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Creating accessible dialogs and notifications
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[38]}>
          <CodePane textSize=".7em">
            {codeExamples.dialogs[0]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[39]}>
          <CodePane textSize=".7em">
            {codeExamples.dialogs[1]}
          </CodePane>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[40]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Images
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Handling imagery
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[41]}>
          <Text textColor="lightYellow" size={5} fit>
            Descriptive or decorative
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[42]}>
          <Image src={images.generalElectionResults} width="650px" align="center"></Image>
          <CodePane margin="25px 0 0" textSize=".6em">
            {codeExamples.images[0]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[43]}>
          <Image src={images.generalElectionResults} width="650px" align="center"></Image>
          <CodePane margin="25px 0 0" textSize=".6em">
            {codeExamples.images[1]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[44]}>
          <CodePane textSize=".6em">
            {codeExamples.images[2]}
          </CodePane>
          <CodePane margin="25px 0 0" textSize=".6em">
            {codeExamples.images[3]}
          </CodePane>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[45]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Headers
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Handling Headers correctly
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[46]}>
          <Image src={images.gospelwareHeaders} align="center"></Image>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[47]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Hidden Descriptions
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Providing text context lost with the UI
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[48]}>
          {/* Provide NCFE Example */}
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[49]}>
          <CodePane textSize=".6em">
            {codeExamples.hiddenDescriptions[0]}
          </CodePane>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[50]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Empty States
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Providing information when no data is available
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="lightYellow" notes={slideNotes[51]}>
          <Image src={images.outlookEmptyState} width="300px"></Image>
          <BlockQuote textAlign="center" textColor="tertiary" textSize=".75em">
            <blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Nice use of an empty state. <a href="https://twitter.com/hashtag/ux?src=hash">#ux</a>  <a href="https://twitter.com/hashtag/inboxzero?src=hash">#inboxzero</a> <a href="https://t.co/pMKF0IMoE0">pic.twitter.com/pMKF0IMoE0</a></p>&mdash; Simon Latham (@Slath) <a href="https://twitter.com/Slath/status/672866265699106816">4 December 2015</a></blockquote>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[52]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            (and finally) Styles
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit>
            Improve accessibility with CSS
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[53]}>
          <CodePane textSize=".6em">
            {codeExamples.styles[0]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[54]}>
          <CodePane textSize=".6em">
            {codeExamples.styles[1]}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={slideNotes[55]}>
          <CodePane textSize=".6em">
            {codeExamples.styles[2]}
          </CodePane>
          <Image margin="25px 0 0" src={images.focusWithinExample} width="600px" align="center"></Image>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[56]}>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Conclusion
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={5}>
              Accessibility <em>is</em> boring
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={5}>
              Accessibility <em>is</em> dull
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={5}>
              Accessibility <em>does</em> require more work
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" notes={slideNotes[57]}>
          <Text margin="10px 0 0" textColor="tertiary" size={5}>
            Accessibility <em>is</em> important
          </Text>
        </Slide>
      </Deck>
    );
  }
}
