---
title: "👨‍💻  Developer Guide"
description: "Get started contributing to DevKitty Hardware & Firmware."
lead: "Contribute to DevKitty!"
date: 2023-05-11T00:52:00-07:00
lastmod: 2023-05-11T00:52:00-07:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "dev-kit-assembly-5560147284bbc5e978bad89bf75506a4"
weight: 100
toc: true
---
{{< alert icon="ℹ️" context="warning" text="This page is under construction." />}}
![](/images/update.JPG)

## Hardware
Currently not accepting PR's, but fixes & suggestions are welcome!
- [PCB](): Designed in KiCAD
- [Enclosure](): Designed in FreeCAD

## Firmware
{{< alert icon="ℹ️" context="warning" text="Coming soon" />}}

## Tools

### ESPTool
ESPTool is the official tool for managing Espressif chips.  It can identify boards, modify flash space, and more!

##### Install ESPTool
```
pip3 install esptool.py
```

##### Create a Binary
After developing and writing custom firmware to the ESP32, you may wish to extract a fullsize binary that contains your application, and perhaps files on the flash space.  

This is how our ScriptKitty Binary includes default examples in the flash drive.

```bash
esptool.py read_flash 0 0x400000 <vx.x_binary_ddmmyy>.bin
```

##### Flash a Binary
We suggest using ESPtool for writing binaries, but our [web flasher](https://update.devkitty.io) is more accessible for beginners.
```bash
esptool.py write_flash 0 <vx.x_binary_ddmmyy>.bin
```

## Documentation
Our documentation is written in Markdown, and rendered as a static site using [Hugo]() with the [Doks Theme]().  The source code is [hosted on our GitHub](), and new updates are automatically rendered & hosted on [GitHub pages]().

This makes it really easy for anyone to contribute a pull request!