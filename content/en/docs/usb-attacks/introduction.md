---
title: "Introduction"
description: "An Introduction to USB Attacks"
lead: "A Brief Introduction to USB Attacks"
date: 2022-08-27T08:48:57+00:00
lastmod: 2022-08-27T08:48:57+00:00
draft: false
images: ['ScriptKitty.png']
menu:
  docs:
    parent: "get-started"
weight: 1
toc: true
---

<img src="/images/update.JPG" title="Thumbnail Image"/> <br/><br/>

From time to time, a new exploit in ubiquitous hardware (like USB) is engendered.  Taking advantage of such vulnerabilities often requires specialized knowledge, or is patched quickly enough that the attack surface is practically non-existent in real world applications.

However, Keystroke Injection is an exploit that has stood the test of time by taking advantage of [a computer's inherent trust of USB Keyboards]()!

## What is Keystroke Injection?
[Human Interface Devices](https://en.wikipedia.org/wiki/Human_interface_device) (HID) encompass things like mice and keyboards - devices that require practically no setup or authorization to use.  

Keystroke Injection, [coined by Hak5](), is a type of HID attack that uses a microcontroller to emulate a keyboard - and delivers pre-programmed keystrokes at devastating speeds!

## In The Wild
- [Fin7 Social Engineered](https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/would-you-exchange-your-security-for-a-gift-card/) victims into plugging malicious USB's into their computers
- [Samy Kamkar's USB Driveby](https://github.com/samyk/usbdriveby) creates a DNS backdoor on victim devices
- [Emulate Razer Devices](https://github.com/hak5/bashbunny-payloads/tree/master/payloads/library/execution/RazerSystemShell) to take advantage of a [privilege escalation bug](https://www.bleepingcomputer.com/news/security/razer-bug-lets-you-become-a-windows-10-admin-by-plugging-in-a-mouse/)!

<!-- ##### Tools
- [USB RubberDucky]() looks like a flash drive but deploys keystroke injection attacks for stealthy engagements
- [BashBunny]() can store multiple payloads
- [O.MG Cable]() -->


## Preventative Measures
Some EDR's can detect & prohibit devices typing at speeds "faster than a human should".  

Solutions like [USB Guard](https://usbguard.github.io/) can be used to create policies for whitelisting or blacklisting USB devices - so you can lock your computer into using the default keyboard or certain trusted peripherals.