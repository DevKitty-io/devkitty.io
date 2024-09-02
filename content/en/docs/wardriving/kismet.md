---
title: "📡 | Kismet"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "wardriving"
weight: 130
toc: true
---
## What is Kismet?
[Kismet]() is a popular wardriving & wireless recon tool that lets you sniff WiFi, Bluetooth, Cellular, and other protocols in a streamlined web app!  When you're ready to take your wardriving skills to the next level, we recommend trying out this project.

<!-- video here -->

This is an example of Kismet in action in one of Alex's old videos!

## DevKitty Kismet Interface
You can use your DevKitty board as a Kismet Interface!  Thanks to Kismet [Scan Mode](), we can report basic WiFi, Bluetooth, and GPS telemetry to the web app!  

The interface works by sending that wireless data over a Serial connection, and using a Rust Script that creates Scan Reports to the Kismet API.

## DevKitty Scan Mode