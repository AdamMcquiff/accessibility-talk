export default [
  `<p>
    Hello. Today we're going to talk about baseline accessibility (A11Y).
    More specifically, how you can write the minimum amount of markup and styles to make an application accessible.
  </p>
  <p>
    The motivation behind this talk comes from hearing several people in this office complain about accessibility...
    Namely, these two gents.
  </p>`,
  `<p>
    Yes, it may be boring, but it's important.
    I don't know about you, but those don't look like the faces of people I would want to take advice from.
   </p>
  `,
  `<p>
    Officially, accessibility is defined as a measure of a computer system's accessibility to all people, including those with disabilities or impairments.
   </p>
   <p>
    In other words, accessibility refers to how usable an application is to all audiences. A truly accessible application will be fully usable by anyone, regardless of physical, visual or hearing impairments.
   </p>
   <p>
    We’re going to be looking at accessibility specifically in code, so we won’t be discussing any design stuff, such as colours, UX design patterns, etc.
   </p>
   <p>
    Hopefully, you're going to discover how a little effort can have a massive impact, ultimately making a product more viable.
   </p>
  `,
  `<p>
    1 in 5, 19% percent, of the UK population identify themselves as disabled.
   </p>
   <p>
    No/poor accessibility means that a large portion of potential users will be unable to use the application.
    This isn’t just a problem from a business point of view, it is also a problem from an ethical point of view.
   </p>
   <p>
    You could argue that if you don’t cater to those with disabilities, then you flat out refusing them use of your application.
   </p>
  `,
  `<p>
    So, is it difficult? I think it is. But why?
   </p>
   <p>
    I believe there are there two main factors accessibility 'hurdles'
   </p>
   <p>
    The first is a lacking an understanding or awareness of the issues that make applications inaccessible and the steps to resolve those issues.
   </p>
   <p>
    The second is because it’s difficult to empathize.
   </p>
  `,
  `<p>
    You might know all the best approaches, tools and techniques to make an application accessible, but if you cannot
    empathise with the segment of your audience with disabilities, chances are your application will not be fully accessible.
   </p>
   <p>
    The best way to gain empathy is first hand user research with a real collection of users. This, however, is rarely
    a realistic option.
   </p>
   <p>
    There's a pretty useful novel website to help with gain empathy called EmpathyPrompts.net.
   </p>
   <p>
    Visually impaired users navigate websites using screen readers, which are operated using a keyboard.
   </p>
  `,
  `<p>
    And, as a developer, one of the main disabilities we need to accommodate is visual impairment.
    You need to ensure that people who can barely see, or cannot see at all, can easily navigate your application,
    find all the information they need, and interact with it in the exact same fashion as any other user.
   </p>
   <p>
    The key to making screen readers useful is rich, descriptive markup and views.
    In HTML, this is achieved by using the correct semantic elements (i.e. <nav>, <header>, <main>, etc.),
    correct headings, descriptive imagery, hidden elements, WAI-ARIA suite, etc.
    On mobile, Android and Swift also have their own means for making elements accessibile, which we’ll also look at.
   </p>
   <p>
    Although I can't cover everything, I want to look at some basic aspects of accessibility you should consider.
   </p>
  `,
  `<p>
    Let's start by talking about Labels. You can, and should, label interactive elements, including links and buttons
    if the element’s text does not provide adequate description. You should also provide labels for icon links
    and tabs containing icons that have no visible text.
   </p>
   <p>
    For example, a screen reader will read the the content within an element’s opening and closing tags.
    Typically, though, this content is very non-descriptive.
   </p>
  `,
  `<p>
    With this example, a screen reader will literally read ‘Read More’ to the user. It’s not very descriptive,
    and if a user was skimming through the page links, the user would simply hear ‘Read More, Read More, Read More…’.
   </p>
   <p>
    Thankfully, you can use WAI-ARIA to provide links with more descriptive labels.
   </p>
   <p>
    WAI-ARIA is an acronym for Web Accessibility Initiative - Accessible Rich Internet Applications,
    and it’s an excellent tool for giving markup a more rich, semantic meaning.
    ARIA offers a host of attributes that you can use within HTML.
   </p>
  `,
];