---
title: "Firmware Guide"
description: "Picking the right firmware for your DevKitty."
lead: "Picking the right firmware for your DevKitty."
date: 2023-05-11T00:52:00-07:00
lastmod: 2023-05-11T00:52:00-07:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "dev-kit-assembly-5560147284bbc5e978bad89bf75506a4"
weight: 10
toc: true
---
{{< alert icon="ℹ️" context="info" text="Our firmware is currently experimental as we continue to explore & make improvements to the DevKitty ecosystem." />}}


## Overview
The [ESP32-S2]() is a capable chip that supports WiFi functionality, native USB, and a handful of other nifty features that make it perfect for powering our pocket-sized hacking companions. 

At the moment, we're experimenting with custom firmware that maximizes DevKitty's independent strengths - this includes:
- **DevKitty Wardriver**: Cat-themed wardriving & WiFi reconnaissance
- **DevKitty Invader**: A simple WiFi attack & network defense tool (coming soon)
- **ScriptKitty**: A BadUSB platform with WiFi-triggered attacks & onboard storage!

These tools aren't perfect, but we're building them alongside our educational content and focusing on bringing more functionality to the features & specific tools based off your feedback.


## CircuitPython
Adafruit's CircuitPython is an interpreted [programming language](), that runs *directly* on your DevKitty, and a handful of other capable boards.  

CircuitPython lets you develop code & prototype on any computer - or even your smartphone without needing... finish this thought

