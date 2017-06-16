export default {
  labels: [
    `<a href="about-us.html">Read More</a>`,
    `<a href="about-us.html" aria-label="Read More About Cracking Open A Cold One">Read More</a>`,
    `<h1 id="title">Read More About Cracking Open A Cold One"</h1>
<a href="about-us.html" aria-labelledby="title">Read More</a>`,
    `<Button
    android:id="@+id/some_id"
    android:src="@drawable/search"
    android:contentDescription="@string/search"/>`,
    `navigationBar.backItem.setAccessibilityLabel("back")`
  ],
  forms: [
    `<input type="text" name="message" placeholder="Message…">`,
    `<label for="message">Message</label>
<input type="text" name="message">`,
    `<EditText
    android:id="@+id/edit_text"
    android:hint="@string/aac_edit_text_about_label" />`,
    `<TextView
    android:labelFor="@+id/edit_text"
    android:text="@string/aac_edit_text_about_label" />

<EditText android:id="@+id/edit_text" />`,
    `let messageField = UITextField = UITextField (...);
messageField.placeholder = "Message…"`,
    `let messageField = UITextField = UITextField (...);
messageField.accessibilityLabel = "Message…"`
  ],
  dialogs: [
    `<div>
    The form has an error: you forgot to provide a message ya daftie.
</div>
`,
    `<div role="alert">
    The form has an error: you forgot to provide a message ya daftie.
</div>
`
  ],
  images: [
    `<img src="political-graph">`,
    `<img src="political-graph"
     alt="Nationwide results at a glance: Conservative Councils: Total: 28…">`,
     `<img src="decorative-icon.jpg" alt="">`,
     `background-image: url('decorative-icon.png');`
  ],
  hiddenDescriptions: [
    `.hide {
   position: absolute !important;
   top: -9999px !important;
   left: -9999px !important;
}`,
  ],
  styles: [
    `.button:hover {
  Background-color: red;
}`,
    `.button:hover,
.button:focus {
    Background-color: red;
}`,
   `fieldset:focus-within {
  background: red;
}`
  ]
};
