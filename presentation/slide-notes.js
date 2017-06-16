export default [
  `<p>
    Welcome to another installation of GospelChat.
   </p>
   <p>
    Today we're going to talk about baseline accessibility (A11Y).
    More specifically, how you can write the minimum amount of markup and styles to make an application accessible.
   </p>
   <p>
    The motivation behind this talk comes from hearing several people in this office complain about accessibility...
    Namely, these two gents.
   </p>`,
  `<p>
    Yes, it may be boring, it may be dull, it does require more work.
   </p>
   <p>
    But it's important.
   </p>
   <p>
    Do you really want to take advise from <em>those</em> faces?
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
    Almost 1 in 5 (19% percent) people in the United Kingdom identify as disabled.
   </p>
   <p>
    Poor accessibility means that a large portion of potential users will be unable to use the application.
    This isn’t just a problem from a business point of view, it is also a problem from an ethical point of view.
   </p>
   <p>
    You could argue that if you don’t cater to those with disabilities, then you flat out refusing them use of your application.
   </p>
   <p>
    So, is it difficult? I think it is. But why?
   </p>
  `,
  `<p>
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
    You could know all the best approaches, tools and techniques to make an application accessible, but if you cannot
    empathise with the segment of your audience with disabilities, chances are your application will not be fully accessible.
   </p>
   <p>
    The best way to gain empathy is first hand user research with a real collection of users. This, however, is rarely
    a realistic option.
   </p>
   <p>
    There's a pretty useful, novel website to help with gain empathy called EmpathyPrompts.net.
   </p>
   <p>
    Although you should consider all aspects of accessibility, as a developer, one of the main disabilities
    we need to accommodate is visual impairment.
   </p>
  `,
  `<p>
    Visually impaired users navigate websites using screen readers, which are operated using a keyboard.
   </p>
   <p>
    There are different Screen Readers on different platforms &lt;refer to slide list&gt;
   <p>
    You need to ensure that people who can barely see, or cannot see at all, can easily navigate your application,
    find all the information they need, and interact with it in the exact same fashion as any other user.
   </p>
   <p>
    The key to making screen readers useful is rich, descriptive markup and views.
   </p>
   <p>
    In HTML, this is achieved by using the correct semantic elements (i.e. &lt;nav&gt;, &lt;header&gt;, &lt;main&gt;, etc.),
    correct headings, descriptive imagery, hidden elements, WAI-ARIA suite, etc.
   </p>
   <p>
    On mobile, Android and Swift also have their own means for making elements accessibile, which we’ll also look at.
   </p>
   <p>
    Although I can't cover every aspect of accessibility, I want to look at some basic aspects you should think about.
   </p>
  `,
  `<p>
    Let's start by talking about Labels. You can, and should, label interactive elements, including links and buttons
    if the element’s text does not provide adequate description.
   </p>
   <p>
    You should also provide labels for icon links
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
   `,
  `<p>
    WAI-ARIA is an acronym for Web Accessibility Initiative - Accessible Rich Internet Applications,
    and it’s an excellent specification for giving markup a more rich, semantic meaning.
   <p>
   </p>
    ARIA offers a host of widely supported attributes that you can use within HTML.
   </p>
  `,
  `<p>
    With HTML, You can use the aria-label attribute to assign a specific value that will be read by a screen reader
    instead of the element's value.
   </p>
   <p>
    Alternatively, you can use aria-labelledby to give the element another element’s value.
   </p>
   <p>
    Note that these ARIA attributes, and any other ARIA attributes, will have no effect on the UI.
   </p>`,
  `<p>
    With Android, the approach is similar. You can use android:contentDescription in the same way as aria-label.
   </p>`,
  `<p>
    When writing Swift for iOS, you can use the accessibilityLabel from the UIAccessibility API.
   </p>`,
  `<p>
    Forms and other fields are one of the most common elements used across web and mobile.
   </p>
   <p>
    Unfortunately, inputs are often programmed in an unusable fashion.
   </p>`,
  `<p>
    People often rely on the placeholder attribute as a replacement for form element labels.
    This is against the HTML5 spec and it does work properly for screen readers.
   </p>`,
  `<p>
    Instead, you should provide an associated text label for every form input.
   </p>
   <p>
    You should also provide the label first, and set the label’s 'for' attribute
    to the name of the form element it belongs to.
   </p>`,
  `<p>
    Similar for Android, don’t rely on a hint (android:hint="someText").
   </p>`,
  `<p>
    Instead, add a TextView label for inputs and add the labelFor attribute with the id value of the input it belongs to.
   </p>`,
  `<p>
    In Swift, you should still not rely on the placeholder attribute for UITextFields.
   </p>`,
  `<p>
    However, Swift is slightly different.
   </p>
   <p>
    There isn’t a way to connect a label to an input, in the same way you can in HTML and Android.
    Instead, you should use the accessibilityLabel attribute directly on the text input.
   </p>`,
  `<p>
    The placeholder attribute itself is fine across all three devices, and should be used,
    but it should not be used as a replacement for label, and should not treated as a label.
   </p>`,
  `<p>
    Providing labels and descriptions is important
   </p>
   <p>
    But it’s also important to ensure that those labels and descriptions are well written.
    The Google Material UI guidelines define some, in my opinion, excellent ways to write good labels.
   </p>`,
  `<p>
    Keep your labels short and ‘to the point’, ensuring your label is brief, but descriptive.
   </p>`,
  `<p>
    ‘Logout Button. Logout of account adam@gospelware.co.uk and return to homepage’
   </p>
   <p>
    Don't add excessive details, in this example, there are a lot of details that can easily be stripped out.
   </p>`,
  `<p>
    A more simple, concise description could be ‘Logout of adam@gospelware.co.uk’
   </p>`,
  `<p>
    Your labels should not describe the control type, whether it’s a button, link, field, etc.
   </p>`,
  `<p>
    'Message Field.' 'Settings Button.'
   </p>
   <p>
    Screen readers will announce the control type, and specifying the type will result in the
    type being read aloud to the user twice, in our example, a user would hear “Message Field.
    Field” and “Settings Button. Button.”
   </p>`,
  `<p>
    'Message', 'Settings'
   </p>
   <p>
    The user will now hear “Settings Button” and “Message Field”.
   </p>`,
  `<p>
    Similarly, and for the same reasons, you should not describe an element’s state.
   </p>`,
  `<p>
    'Accept Terms and Conditions is selected'
   </p>`,
  `<p>
    Again, this will result in the screen reader reading 'Accept Terms and Conditions is selected. Is selected'
   </p>`,
  `<p>
    Describe what element does, do not describe the element itself.
   </p>`,
  `<p>
    Here, we're describing the aesthetic of the icon. This is of no value to a visually impared user.
   </p>`,
  `<p>
    Describing what the icons do will be infinitely more useful to a visually impared user.
   </p>`,
  `<p>
    Finally, do not discuss a gesture or interaction, you should describe the task.
   </p>`,
  `<p>
    Here, we're describing the gesture used to trigger the action, with no indiciation of the result of the action.
   </p>`,
  `<p>
    Instead, describe the result and let the screen reader describe the gesture.
   </p>`,
  `<p>
    This next example is not as applicable to mobile developers, as the native API provides dialog accessibility
    out of the box.
   </p>
   <p>
    But, on web, there is currently no widely supported out-of-the-box accessible option for dialogs and notifications
   </p>`,
  `<p>
    Typically, you would create a div that would be displayed to the user as a result of some action.
   </p>
   <p>
    A standard div, however, provides no semantic value, and when it is shown, it is not brought to the screen reader user's attention
   </p>`,
  `<p>
    ARIA provides a role attribute which can be used to give elements more semantic value. You can use role="alert" to
    notify screen readers when the element appears.
   </p>`,
  `<p>
    Another thing to consider for screen readers is imagery.
   </p>
   <p>
    Imagery used in an application typically falls under one of two categories;
   </p>`,
  `<p>
    decorative and informative.
   </p>`,
  `<p>
    Images that offer information to the end user will need to be delivered to the
    screen reader in text form, otherwise the image’s information will be lost.
   </p>
   <p>
    In this example, a screen reader would not be able to interpet the information displayed in this graphic,
    meaning that the information would be completely lost to screen reader users.
   </p>`,
  `<p>
    How do we solve this issue? This is where the alt attribute comes in.
   </p>
   <p>
    If the image provides relevant information, for example a graph or info-graphic,
    you should use the img tag with an alt attribute, which should provide a description of the images details.
   </p>`,
  `<p>
    Decorative images, such as icons, logos, etc., serve no purpose other than to aesthetically
    improve the UI of an application and serve no purpose to screen readers.
    These images should be ignored by screen readers.
   </p>
   <p>
    These images should be served using the background-image CSS property where possible.
    If the image cannot be served using the background-image CSS property, the image should be
    served using the img tag with an empty alt attribute.
   </p>`,
  `<p>
     Headers are used across websites to indicate page and section titles.
     There are delivered using the &lt;h1&gt; through &lt;h6&gt; tags.
   </p>`,
  `<p>
    Here’s an example of a website header hierarchy taken from a "random" website.
   </p>
   <p>
    You should only use header tags for titles, not for changing aesthetics.
    Header tags should only be used in descending hierarchy and should not be skipped.
   </p>
   <p>
    For example, if you use the &lt;h1&gt; tag, it should be followed by an &lt;h2&gt; tag, and nothing else.
    The document should always begin with an &lt;h1&gt; tag, and nothing else.
   </p>`,
  `<p>
    Often, a UI can provide a lot of context to information on a webpage and, sometimes,
    this context can be lost when the information is delivered as text via a screen reader.
   </p>`,
  `<p>
    Here, we have a few bits of information. It's clear with the UI that this information correlates to the course,
    but it might not be as obvious to the screen reader.
   </p>
   <p>
    To combat this, I've added some hidden spans with additional information to provide context for screen reader
    users
   </p>`,
  `<p>
    Descriptive text exclusive to a screen reader can be wrapped in a span and hidden
    with a small chunk of clever CSS.
   </p>`,
  `<p>
    An empty state refers to a small piece of text that indicates to a user that no data is present.
   </p>`,
  `<p>
    Here’s an example from Outlook
   </p>
   <p>
    Empty states should always be provided in situations where data may be present, but none is.
   </p>
   <p>
    This means that screen reader users instantly know that there is no data,
    rather than waiting under the pretence that the data may load,
    or presuming an issue has occurred that has prevented the data from displaying.
   </p>`,
  `<p>
    Finally, I feel like I should mention styles briefly.
   </p>`,
  `<p>
    Any elements that are clickable should have a hover state that visually indicates
    to the user that the element is current clickable. This can be achieved using the CSS pseudo hover class.
   </p>
   <p>
    The hover pseudo class, however, does not apply styles when the element has been selected via a keyboard,
    using the 'tab' key, which users who do not, or cannot, use a mouse often do.
   </p>
   <p>
    That means that users who do not, or cannot, use a mouse or touch device will not
    receive any visual indication that the current selected element is selected, if only hover is used.
   </p>`,
  `<p>
    To combat this, you should use the focus pseudo element alongside any instances of the hover element.
   </p>`,
  `<p>
    Finally, there is also a new CSS pseudo selector that has been proposed, but is not yet fully implemented,
    called :focus-within.
   </p>
   <p>
    It lets you set styles on a parent element when any of the parent element’s child elements have been selected.
   </p>
   <p>
    Although this is in an experimental phase, I am quite sure this will become widely supported soon enough,
    and serves as a great reminder that the web is constantly becoming more and more accessible.
   </p>`,
  `<p>
    It’s true, accessibility <em>is</em> boring,
    accessibility <em>is</em> dull
    and accessibility </em>does</em> require more work.
   </p>`,
  `<p>
    But it is important. I truly believe anyone, regardless of their disability or ailment,
    should be able to enjoy web and mobile applications just as much as a fully-abled person. I’m sure you do too.
   </p>
   <p>
    If you do agree with this sentiment, then perhaps it’s time you start to reassess how you feel about accessibility.
   </p>
   <p>
    Thank you for listening / reading.
   </p>
   <p>
    Are there any questions?
   </p>`
];