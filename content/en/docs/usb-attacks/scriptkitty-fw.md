---
title: "ScriptKitty Firmware"
description: "Learn about DevKitty's Cat-Themed Keystroke Injection Firmware"
lead: "The Cat-Themed Keystroke Injection Tool!"
date: 2023-11-25T19:33:41-08:00
lastmod: 2023-11-25T19:33:41-08:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "keystroke-injection-53a33d84e9d61112a5da19246b409d95"
weight: 10
toc: true
---
{{< alert icon="ℹ️" context="info" text="Check out the flashing guide to load this firmware on your DevKitty!" />}}
![](/images/update.JPG)

**ScriptKitty is a cat-themed keystroke injection tool** that lets you select hundreds of usb attack payloads at the press of a button. You can even deploy attacks remotely via a WiFi interface!

[Get the source code and binaries here](https://github.com/DevKitty-io/ScriptKitty-Firmware).

## ScriptKitty Introduction
![](/images/update.JPG)

##### Flash Drive
The ScriptKitty Firmware creates a **flash drive** when plugged into your computer.  This makes it easy to drag and drop new payloads over - or exfiltrate files from a target device!

This is where you can also modify the [configuration]() file.

##### Payload Organization
You'll notice that payloads are organized by Operating System, and Sub-categories on the flash drive.  Since you don't know what types of systems you'll encounter in the wild, you can have hundreds ready to deploy at the press of a button!  

Try out one of our example prank payloads for your target operating system... they're harmless ;)

## Running An Attack
![](/images/update.JPG)

Use the D-Pad to navigate the on-screen interface.  You'll notice it matches the folder / file structure on your ScriptKitty flash drive!

Use the `UP`/`DOWN` buttons to scroll through the current directory.  Use `LEFT` to enter a directory or run a file.  `RIGHT` will take you back!

Try out the RickRoll payload for your target operating system.

{{< alert icon="ℹ️" context="warning" text="Check out the dedicated sections for more info on writing payloads / ScriptKitty configuration." />}}
## Add New Payloads 
Adding new payloads is as simple as dragging & dropping them over to the USB Drive!  Payload must end in `.txt` extension and are written in [DuckyScript]().  Check out our [payload guide]() to learn the syntax!

Thanks to Hak5, hundreds of payloads are already developed & ready to deploy.  Check out their repo for inspiration!  Only USB RubberDucky Payloads are compatible at the moment.

- [Hak5 Ducky Payload Repo](https://payloadhub.com/blogs/payloads)
- [Official ScriptKitty Payloads](https://github.com/DevKitty-io/ScriptKitty-Payloads)

## Emulate USB Devices
By default, the ScriptKitty Firmware emulates an Apple Keyboard to bypass MacOS flagging non-Apple keyboards.  

You can easily modify the type of device it emulates by editing the `config.txt` file on the flash drive!  All you have to do is edit the `VID` and `PID` parameter - which correspond to **Vendor ID** and **Product ID** respectively.  

You can use a USB vendor lookup tool like this [open database](http://www.linux-usb.org/usb.ids) to choose a device to emulate.

On Linux / Mac you can check if this worked using:
```
lsusb
```

On Windows, check your Device Manager!

![](/images/update.JPG)