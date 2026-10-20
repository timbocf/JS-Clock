# JavaScript Clock

A minimal digital clock that displays the current device time as **HH:MM:SS**. This project demonstrates JavaScript date handling, DOM updates and a repeating timer.

## What it does

- Reads the current local hour, minute and second from the browser.
- Adds leading zeroes to single-digit values.
- Updates the displayed time approximately once per second.
- Uses a large, white clock display against a black background.
- Requires no build tools, package installation or external JavaScript libraries.

## Run

Download or clone the repository and open **index.html** in a browser. The HTML, JavaScript and CSS must stay together in the same directory.

An optional local server can be started from the repository:

~~~bash
python3 -m http.server 8000
~~~

Then open http://localhost:8000. Python serves the files only; it is not part of the clock's implementation.

## Project files

| File | Responsibility |
| --- | --- |
| [index.html](index.html) | Defines the clock container and loads the stylesheet and script |
| [script.js](script.js) | Reads local time, formats it and updates the clock |
| [style.css](style.css) | Controls the black background, centered layout and display size |

## Implementation

**showCurrentTime()** creates a new Date, obtains the local time components and writes the formatted value into the clock element. **updateClock()** runs once immediately and is then called by a 1,000-millisecond interval.

The display is a 24-hour clock. It uses the computer or phone's configured time and timezone; it does not contact a time server.

## Customize

Change the clock font size, colors or page spacing in **style.css**. Change formatting in **showCurrentTime()** to add a date or implement a 12-hour display.

The stylesheet names Bungee as its preferred font, but the HTML does not download that font. A fallback font is used unless Bungee is available locally. The fixed 136-pixel display may need smaller typography for narrow screens.

## Check your changes

Open the page, confirm that seconds advance and compare the display to the device clock. Browser background-tab throttling can delay visual updates; each update reads the current time again.

## Attribution

The source identifies this clock as adapted from [Codified Concepts' CodePen clock](https://codepen.io/codifiedconcepts/pen/bwgxRq). Preserve that attribution when modifying the example.
