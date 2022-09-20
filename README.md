# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Workflow](#workflow)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.jpg)

### Links

- Solution: [frontendmentor.io](https://your-solution-url.com)

- Live Site: [netlify.app](https://your-live-site-url.com)

## My process

### Workflow

- Preparing workflow (Installing React, Adding assets, Preparing README.md)

- Identifying and creating components (Thinking in reusability)
  - Introductory, SignupForm, TextInput

- Working on mobile design based on `design` folder and `style-guide.md` file

- working on desktop design based on `design` folder

- Working on validation functionality

### Built with

- [React](https://reactjs.org/)
- [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned how to create a reusable component and used `forwardRef` for this purpose

Also in this challenge, after I tried with `useState` and it failed to accomplish form validity I used useReducer. 
I understood for multiple related states I must use useReducer

### Continued development

More practice in React, That's it

### Useful resources

- [HSL to HEX](https://htmlcolors.com/hsl-to-hex) - I use this site in my solutions to convert HSL to HEX colors

- [CSS Tailwind Preflight](https://tailwindcss.com/docs/preflight) - A great CSS reset

- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## Author

- github - [@siavhnz](https://www.your-site.com)

- Frontend Mentor - [@siavhnz](https://www.frontendmentor.io/profile/siavhnz)

## Acknowledgments

Thanks To

[Fuji](https://stackoverflow.com/users/418400/fuji) for this answer to creating [range](https://stackoverflow.com/a/10050831/3925013) in javascript 

[Frontendmentor.io](https://www.frontendmentor.io/challenges) - for their Excitement challenges  

[Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en) - for such a great extension



