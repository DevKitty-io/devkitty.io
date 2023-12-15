---
title: "Writing Your First Payload"
description: "Making DuckyScript Payloads on the DevKitty"
lead: "Making DuckyScript Payloads on the DevKitty"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 120
toc: true
---
<img src="/images/payload.gif" title="Payload Image"/>
<br /><br />

The DevKitty supports DuckyScript™, making it easy to create your first payload!

If you need inspiration, you can find a list of DuckyScrit payloads on the [Hak5 GitHub repository](https://github.com/hak5/usbrubberducky-payloads). 

To get started, let's review the full list of DuckyScript™ commands the DevKitty supports.

### DuckyScript™ Payload Structure

When composing a DuckyScript™ payload, commands are executed line by line. It's also possible to press multiple keys at the same time by putting commands on the same line!

To write out a piece of text, type STRING in all caps.  See the example below for how this works:
| Example        | Result                                             |
|----------------|----------------------------------------------------|
| SHIFT C        | Type the Shift key and then the c key              |
| SHIFT C        | Press the Shift key and the c key at the same time |
| STRING SHIFT C | Types out "SHIFT c"                                |

### Built-in Commands
Now that we have the basics down, let's take a look at supported commands:
| Command                             | Example               | Description                                                                                                                  |
|-------------------------------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------|
| `REM`                               | `REM Hello World!`    | This is used to leave comments, and is not executed in the script                                                            |
| `DEFAULTDELAY`  or  `DEFAULT_DELAY` | `DEFAULTDELAY 200`    | This sets the default time in ms between each command                                                                        |
| `DELAY`                             | `DELAY 1000`          | Sets a one-time delay in ms                                                                                                  |
| `STRING`                            | `STRING Hello World!` | Types whatever string follows the command                                                                                    |
| `LED`                               | `LED R`               | Changes the color of the LED.  Current Options:  R = red, G = green, B = blue, C = cyan, Y = yellow, M = magenta,  W = white |

### Supported Keys
Most standard keys are supported by ScriptKitty.
| Key        |
|------------|
| `a`-`z`    |
| `A`-`Z`    |
| `1`-`9`    |
| `F1`-`F12` |

### Modifier Keys
Keys like SHIFT, ALT, and the WINDOWS or GUI key can be useful for accessing hotkey combinations, are are frequently used in combination key presses.
| Key                   |
|-----------------------|
| `CTRL`  or  `CONTROL` |
| `SHIFT`               |
| `ALT`                 |
| `WINDOWS`  or  `GUI`  |

### Other Useful Keys
Virtually anything you can do behind a keyboard can be recreated with the right keypresses. 
The following keys are essential to trigger keyboard shortcuts and navigate without a mouse.
| Key               |
|-------------------|
| `ENTER`           |
| `MENU`  or  `APP` |
| `DELETE`          |
| `HOME`            |
| `INSERT`          |
| `PAGEUP`          |
| `PAGEDOWN`        |
| `UP` or `UPARROW` |
| `DOWN` or `DOWNARROW`
| `LEFT` or `LEFTARROW`
| `RIGHT` or `RIGHTARROW`
| `TAB`
| `END`
| `ESC` or `ESCAPE`
| `SPACE`
| `PAUSE` or `BREAK`
| `CAPSLOCK`
| `NUMLOCK`
| `PRINTSCREEN`
| `SCROLLLOCK`

Now that we've gone over the supported DuckyScript commands, let's load and deploy a payload to the DevKitty.