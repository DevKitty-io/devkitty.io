---
title: "WiFi Interface"
description: "Deploy remote attacks with the ScriptKitty firmware"
lead: "Deploy remote USB attacks on your DevKitty."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "fundamentals"
weight: 100
toc: true
---
<!-- 
<img src="/images/Wifi_Interface.png" title="WiFi Interface Image"/>

<br /><br /> -->

The ScriptKitty Firmware has a WiFi interface that enables remote access for wireless-triggered USB attacks. Let's try it out!

## Connecting
By default, the ScriptKitty firmware uses the following credentials.  Just join the access point from your phone or laptop!

```
Network: ScriptKitty
Password: 12345678
```
Next, navigate to `192.168.4.1` in a web browser.  This brings you to the ScriptKitty attack interface.

## Running & Creating Payloads
`docs coming soon`

## Settings
To modify the WiFi credentials, open the `scriptkitty.conf` file on the flash drive, and change the `network` & `password` parameters.  You'll need to restart after this.

*The ability to change settings from the web interface is coming soon!*
