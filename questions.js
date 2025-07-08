const quizData = {
  HTML: [
    {
      question: "What does HTML stand for?",
      options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Tool Multi Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<line>"],
      answer: "<br>"
    },
    {
      question: "Which tag is used to define an image in HTML?",
      options: ["<img>", "<image>", "<pic>", "<src>"],
      answer: "<img>"
    },
    {
      question: "Which attribute is used to provide alternative text for an image?",
      options: ["alt", "src", "title", "href"],
      answer: "alt"
    },
    {
      question: "What is the correct HTML for creating a checkbox?",
      options: ["<check>", "<input type='checkbox'>", "<checkbox>", "<input checkbox>"],
      answer: "<input type='checkbox'>"
    },
    {
      question: "How do you create an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>"
    },
    {
      question: "Which tag is used for creating a table row?",
      options: ["<th>", "<tr>", "<td>", "<table>"],
      answer: "<tr>"
    },
    {
      question: "Which doctype is correct for HTML5?",
      options: ["<!DOCTYPE html>", "<!HTML5>", "<doctype html5>", "<!doctype HTML PUBLIC>"],
      answer: "<!DOCTYPE html>"
    },
    {
      question: "Which tag is used to define a form in HTML?",
      options: ["<form>", "<input>", "<fieldset>", "<submit>"],
      answer: "<form>"
    }
  ],

  CSS: [
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-style", "text-size", "font-style"],
      answer: "font-size"
    },
    {
      question: "How do you change the background color in CSS?",
      options: ["color", "background-color", "bgcolor", "style"],
      answer: "background-color"
    },
    {
      question: "How do you center text in CSS?",
      options: ["text-center", "align: center", "text-align: center", "center-text"],
      answer: "text-align: center"
    },
    {
      question: "Which CSS property makes text bold?",
      options: ["font-weight", "text-bold", "font-bold", "bold"],
      answer: "font-weight"
    },
    {
      question: "Which property is used to change the font in CSS?",
      options: ["font-family", "font-style", "text-style", "font-type"],
      answer: "font-family"
    },
    {
      question: "Which of the following is a pseudo-class in CSS?",
      options: [":hover", "::before", ":after", "::marker"],
      answer: ":hover"
    },
    {
      question: "How do you select an element with ID 'main'?",
      options: [".main", "#main", "main", "*main"],
      answer: "#main"
    },
    {
      question: "Which property is used for spacing between elements?",
      options: ["margin", "padding", "border", "spacing"],
      answer: "margin"
    },
    {
      question: "What does the z-index property control?",
      options: ["Layer order", "Font thickness", "Zoom level", "Text shadow"],
      answer: "Layer order"
    }
  ],

  JavaScript: [
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Google", "Oracle"],
      answer: "Netscape"
    },
    {
      question: "Inside which HTML element do we put JavaScript?",
      options: ["<js>", "<javascript>", "<script>", "<code>"],
      answer: "<script>"
    },
    {
      question: "What does 'typeof null' return?",
      options: ["null", "object", "undefined", "string"],
      answer: "object"
    },
    {
      question: "Which keyword is used to declare a constant?",
      options: ["var", "let", "const", "define"],
      answer: "const"
    },
    {
      question: "How do you write a comment in JavaScript?",
      options: ["<!-- comment -->", "// comment", "/* comment */", "** comment **"],
      answer: "// comment"
    },
    {
      question: "What does NaN stand for?",
      options: ["Not a Name", "Not a Number", "No assigned Name", "Not a Node"],
      answer: "Not a Number"
    },
    {
      question: "How do you declare an array?",
      options: ["let arr = []", "let arr = {}", "let arr = ()", "let arr = <>"],
      answer: "let arr = []"
    },
    {
      question: "What will `Boolean(0)` return?",
      options: ["true", "false", "undefined", "null"],
      answer: "false"
    },
    {
      question: "What is the output of 2 + '2'?",
      options: ["4", "22", "NaN", "undefined"],
      answer: "22"
    },
    {
      question: "Which method is used to parse JSON?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.convert()"],
      answer: "JSON.parse()"
    }
  ],

  Accessibility: [
    {
      question: "What does a screen reader do?",
      options: ["Displays graphics", "Reads content aloud", "Types for users", "Enhances color contrast"],
      answer: "Reads content aloud"
    },
    {
      question: "Which attribute improves accessibility for images?",
      options: ["src", "href", "alt", "title"],
      answer: "alt"
    },
    {
      question: "Which element is best for navigation links?",
      options: ["<section>", "<nav>", "<aside>", "<footer>"],
      answer: "<nav>"
    },
    {
      question: "Which HTML element helps screen readers skip repetitive links?",
      options: ["<skip>", "<a>", "<main>", "<skip-link>"],
      answer: "<main>"
    },
    {
      question: "ARIA stands for:",
      options: ["Accessible Rich Internet Applications", "Advanced Readable Interface Accessibility", "Accessibility Render Interface Area", "Assistive Reader Internet Access"],
      answer: "Accessible Rich Internet Applications"
    },
    {
      question: "Which ARIA role indicates a button?",
      options: ["aria-role='btn'", "role='button'", "aria-type='button'", "role='btn'"],
      answer: "role='button'"
    },
    {
      question: "Keyboard accessibility means:",
      options: ["Using mouse only", "Using only touch", "Navigating with keyboard", "Using voice commands"],
      answer: "Navigating with keyboard"
    },
    {
      question: "Which HTML tag groups related form fields?",
      options: ["<fieldset>", "<legend>", "<formgroup>", "<section>"],
      answer: "<fieldset>"
    },
    {
      question: "What is WCAG?",
      options: ["Web Content Accessibility Guidelines", "Web Compliance for Accessible Graphics", "Web Custom Accessibility Guide", "Wide Content Assist Group"],
      answer: "Web Content Accessibility Guidelines"
    },
    {
      question: "What does the 'tabindex' attribute do?",
      options: ["Controls tabbing order", "Creates a tab", "Adds a tab menu", "Hides tab content"],
      answer: "Controls tabbing order"
    }
  ]
};
