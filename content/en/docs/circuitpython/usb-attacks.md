---
title: "USB Attacks"
description: "Running USB Attacks on Your DevKitty."
lead: "Running USB Attacks on Your DevKitty."
date: 2023-11-25T18:23:55-08:00
lastmod: 2023-11-25T18:23:55-08:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "usb-attacks-7be66a33d7f1922d969a9ac95c7e74e7"
weight: 20
toc: true
---

## Why USB Attacks?
**USB Attacks** take advantage of physical access to an unlocked computer - if you have seconds of access to someone's unattended machine, this is one of the most effective ways to compromise them!

**It takes just seconds to execute an attack.**

<!-- --->

## Keystroke Injection
**Keystroke Injection** is the most prominent type of USB attack, pioneered by [Hak5](https://hak5.org).
Specifically, its classified as an **`HID Attack`** - or [Human Interface Device]() attack.

HID devices like keyboards are inherently trusted by computers - imagine how dumb it would be if you had to install drivers to set up a keyboard or mouse on your computer!  

We can take advantage of this trust by having devices like the DevKitty **emulate** USB Keyboards, and have them inject keystrokes at extreme speeds.

<!--- --->

By pre-programming the DevKitty with keystrokes, we can accomplish anything a human would be able to do behind a computer with a couple minutes of access, in mere seconds.

## Emulating Special Devices



#### Step 3: Programming in CircuitPython
