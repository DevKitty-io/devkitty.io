---
title: "Payload Guide"
description: "Write DuckyScript Payloads with the ScriptKitty Firmware"
lead: "Write your first DuckyScript payload!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 20
toc: true
---
![](/images/update.JPG)

Our ScriptKitty Firmware supports DuckyScript™, making it easy to create your first payload! If you need inspiration, you can find a list of DuckyScrit payloads on the [Hak5 GitHub repository](https://github.com/hak5/usbrubberducky-payloads). 

## Payload Methodology
When creating a keystroke injection payload, work backwards!  Start by thinking about what you want the payload to accomplish (a [RickRoll]() perhaps), and figure out what programs (web browser, terminal, etc.) have to be launched to achieve that end goal.

Then, try it out manually on your keyboard!  Make sure to write down the steps.  Next, let's break it down into actual DuckyScript!

##### Quick Tips
- Launching a terminal / run dialog is typically the easiest way to accomplish most things using only a keyboard.  Try it yourself!
  - Linux: `CTRL`+`ALT`+`T`
  - Mac: `CMD`+`SPACE`
  - Windows: `WIN`+`R`
- Keyboard Shortcuts & Modifier Keys can be used to navigate a GUI, switch browser tabs, and so much more!  Check it out:
  - [Windows](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec)
  - [Mac](https://support.apple.com/en-us/102650)
  - [Linux](https://www.javatpoint.com/linux-shortcuts)  
- ScriptKitty types 10 times faster than a person - make sure to add *delays* in your scripts to let things launch!

## Creating the Payload
On the ScriptKitty flash drive, create a `txt` file under one of the folders.  You can use your favorite text editor to modify the script!  Check out some of the other example scripts to get an idea. 

When composing a DuckyScript™ payload, commands are executed line by line - as if you're the one executing commands on a keyboard, behind the computer. It's also possible to press multiple keys at the same time by putting commands on the same line!

There's **3 basic types of actions** you can execute with DuckyScript: Typing, Key Combos, and Waiting.  Keep this in mind and lets see how this translates into DuckyScript!

| Example        | Result                                             |
|----------------|----------------------------------------------------|
| `SHIFT c`        | Types a capital C          |
| `STRING SHIFT C` | Types out "SHIFT c"        |


## Basic DuckyScript™


#### Basic Commands
| Command                             | Example               | Description                                                                                                                  |
|-------------------------------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------|
| `STRING`                            | `STRING Hello World!` | Types whatever string follows the command                                                                                    |
| `DELAY`                             | `DELAY 1000`          | Sets a one-time delay in ms                                                                                                  |
| `REM`                               | `REM Hello World!`    | This is used to leave comments, and is not executed in the script                                                            |
| `DEFAULTDELAY`  or  `DEFAULT_DELAY` | `DEFAULTDELAY 200`    | This sets the default time in ms between each command                                                                        |
| `LED`                               | `LED R`               | Changes the color of the LED: `R` `G` `B` `C` `Y` `M` `W`|

#### Supported Keys
Most standard keys are supported by ScriptKitty.
| Keys       |
|------------|
| `a`-`z`    |
| `A`-`Z`    |
| `1`-`9`    |
| `F1`-`F12` |

#### Modifier Keys
Keys like SHIFT, ALT, and the WINDOWS or GUI key can be useful for accessing hotkey combinations, are are frequently used in combination key presses.
| Key                   |
|-----------------------|
| `CTRL`  or  `CONTROL` |
| `SHIFT`               |
| `ALT`                 |
| `WINDOWS`  or  `GUI`  |

#### Other Useful Keys
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
| `DOWN` or `DOWNARROW` |
| `LEFT` or `LEFTARROW` |
| `RIGHT` or `RIGHTARROW` |
| `TAB` |
| `END` |
| `ESC` or `ESCAPE` |
| `SPACE` |
| `PAUSE` or `BREAK` |
| `CAPSLOCK` |
| `NUMLOCK` |
| `PRINTSCREEN` |
| `SCROLLLOCK` |

## Example Payload
RickRoll Payload on Linux
```duckyscript
REM Keyboard shortcut to open terminal on Ubuntu
CTRL ALT T
DELAY 1000

REM Launch Firefox & press enter
STRING firefox "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
ENTER
DELAY 2000

REM Youtube Video fullscreen & play
SPACE
STRING F
```
