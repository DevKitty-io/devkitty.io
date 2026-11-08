---
title: "Introduction"
description: "What DevKitty UI is and what it supports"
lead: "A UI Standard Library for 1-bit Screens"
date: 2026-11-07T00:00:00-08:00
lastmod: 2026-11-07T00:00:00-08:00
draft: false
images: []
weight: 1
toc: true
---

DevKitty UI is a UI standard library we're building so anyone can write apps for our devices and conference badges. Every app built on it shares the same headers, footers, menus and popups, so apps look and feel consistent no matter who wrote them.

## Supported Screens
DevKitty UI targets small monochrome (1-bit) OLED screens. Right now the only supported resolution is **128x64**.

|Spec|Value|
|---|---|
|Resolution|128 × 64 px|
|Color|1-bit monochrome|
|Panels|SH1106 / SSD1306|
|Graphics library|[u8g2](https://github.com/olikraus/u8g2)|
|Language|C++ (Arduino / ESP32)|

## Screen Layout
Every screen is split into three horizontal zones. The header and footer are each optional. If a screen skips one, the body grows to fill that space.

|Zone|Rows (y)|Height|
|---|---|---|
|Header|0 – 9|10 px|
|Body|12 – 53|42 px|
|Footer|54 – 63|10 px|

{{< oled caption="Screen layout: header, body and footer" >}}

## Screens & Apps
An app is a stack of **screens**. Opening something pushes a new screen onto the stack, and going back pops it off. Each screen describes itself with a few building blocks:

- a **header** with the screen's title
- a **body**, usually a menu
- a **footer** with hints or extra info
- an optional **modal** popup

See the [API](../api/) page for how each element works.

---

{{< alert context="warning" text="This page contains AI-generated placeholder content and will be replaced." />}}
