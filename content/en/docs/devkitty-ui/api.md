---
title: "API"
description: "Headers, footers, menus and other DevKitty UI elements"
lead: "DevKitty UI Element API"
date: 2026-11-07T00:00:00-08:00
lastmod: 2026-11-07T00:00:00-08:00
draft: false
images: []
weight: 10
toc: true
---

## Screens
Every screen is a `Screen` subclass. You build its layout in `onEnter`, and repeat the same calls in `onResume` so the screen comes back correctly after a child screen closes.

```cpp
class MyScreen : public Screen {
 public:
  ScreenId id() const override { return kScreenMine; }

  void onEnter(ScreenManager& sm) override {
    Screen::onEnter(sm);
    addHeader("My App");
    addFooterMarquee();
    addMenu(&menu_);
  }

  void onResume(ScreenManager& sm) override {
    Screen::onResume(sm);
    addHeader("My App");
    addFooterMarquee();
    addMenu(&menu_);
  }

  void handleInput(const InputEdges& e, ScreenManager& sm) override {
    menu_.nav(e);
    if (e.confirmPressed) sm.pushScreen(kScreenChild);
    if (e.cancelPressed)  sm.popScreen();
  }

 private:
  StaticMenu menu_;
};
```

|Call|What it does|
|---|---|
|`sm.pushScreen(id)`|Opens a screen (calls its `onEnter`)|
|`sm.popScreen()`|Goes back (calls `onResume` on the screen below)|

Screen changes fade out and back in automatically.

## Header
`addHeader(title, inverted = true)`

The header is 10 px tall and has two parts:
- **Title tab** on the left: the title in upper case, in a rounded tab. Inverted (filled) by default, or an outline with `inverted = false`. Pass `nullptr` for no title.
- **Status group** on the right: system icons for battery, USB, Bluetooth and Wi-Fi. These are drawn by the library and screens can't change them.

A 1 px line along the top joins the two. Titles fit about 14–20 characters, depending on how many status icons are showing.

{{< oled caption="Header with title tab and status icons" >}}

### Header Arrow
`setHeaderArrow(Chrome::HeaderArrow)`

An optional arrow to the left of the title that hints at the key for going back. A screen whose only footer hint would be **BACK** shows a ◀ in the header instead and drops the footer.

{{< oled caption="Header with back arrow, no footer" >}}

## Footer
Each screen uses at most one footer form. All forms share the same 10 px slot at the bottom of the screen.

|Form|API|Use|
|---|---|---|
|Static text|`addFooterText(text)`|A fixed, centered line|
|Marquee|`addFooterMarquee()`|Scrolls long text, usually the selected menu item's description|
|Status|`addFooterStatus(fn)`|Live status that updates every frame|
|Buttons|`addFooterButtons(left, right)`|Shows what LEFT and RIGHT do|

### Text / Marquee
A 1 px line above centered text. A marquee scrolls when its text is too long to fit. Call `resetMarquee()` when the text changes.

{{< oled caption="Marquee footer" >}}

### Buttons
Filled buttons in the bottom corners, each with a one-word label in caps and an arrow. Either side can be `nullptr`.

```cpp
addFooterButtons("Back", "Save");
```

{{< oled caption="Buttons footer: BACK / SAVE" >}}

## Menus
Menus fill the body. Attach one with `addMenu(&menu)` and pass input to it with `menu.nav(e)`. Every menu gets the same animated selector and a scrollbar on the right edge.

### StaticMenu
A fixed list of items, as text rows or rows with an 11×11 icon.

```cpp
const MenuItem kItems[] = {
  { "Scan",     "Scan for nearby devices", scan_11_bits },
  { "Settings", "Change device settings",  settings_11_bits },
};
menu_.setItems(kItems, 2);
```

{{< oled caption="StaticMenu with icons" >}}

### InfoMenu
A read-only list of label / value pairs. Values are formatted by a function that runs every frame, so live values update on their own.

```cpp
const InfoMenu::Row kRows[] = {
  { "Uptime", fmtUptime },
  { "Heap",   fmtHeap },
};
info_.setRows(kRows, 2);
addMenu(&info_);
```

{{< oled caption="InfoMenu" >}}

### BigIconMenu
Text rows on the left with a large 64×64 image on the right for the selected item. Good for top-level menus with only a few items.

{{< oled caption="BigIconMenu" >}}

### TabMenu
Up to 3 tabs, each with its own list. Pick a tab from a row of pills, then press DOWN to enter its list. The tab slides up into the header.

```cpp
const TabMenu::Tab kTabs[] = {
  { "Passive", &passiveMenu_ },
  { "Active",  &activeMenu_ },
};
tabs_.setTabs(kTabs, 2);
addTabMenu(&tabs_, "Campaign");
```

{{< oled caption="TabMenu: pill mode" >}}

{{< oled caption="TabMenu: list mode" >}}

### Custom Menus
Subclass `Menu` and implement `itemCount()` and `drawRow()` for dynamic or data-driven rows. `drawRow()` always draws the row as unselected; the selector inverts it for you.

## Switch
`Chrome::drawSwitch(d, x, y, on)`

A 13×7 on/off switch for setting rows. RIGHT toggles it.

{{< oled caption="Menu rows with switches" >}}

## Modal
A popup drawn on top of the screen. While it's open it takes all input.

```cpp
const Modal kModal = {
  Modal::Layout::kBody,
  "Save changes?",
  "Yes",
  "No",
};
addModal(&kModal);
```

|Layout|Covers|
|---|---|
|`kFull`|Whole screen|
|`kBelowHeader`|Everything below the header|
|`kAboveFooter`|Everything above the footer|
|`kBody`|Only the body, keeping header and footer|

With one button, any key dismisses it. With two buttons, RIGHT picks the primary button and LEFT picks the secondary one.

{{< oled caption="Modal (kBody) with two buttons" >}}

## Input
Screens receive `InputEdges`, no matter which hardware produced it (buttons, joystick, or tilt gestures).

|Field|Meaning|
|---|---|
|`upPressed` / `downPressed`|Move in a list (repeats while held)|
|`confirmPressed`|RIGHT: select / open|
|`cancelPressed`|LEFT: back|

## Fonts
DevKitty UI uses a small, fixed set of fonts:

|Role|Font|
|---|---|
|Header / footer / modal|`u8g2_font_profont10_tr`|
|Menu rows|`u8g2_font_boutique_bitmap_9x9_tr` (bold when selected)|
|Compact lists & settings|`u8g2_font_5x8_tf`|

---

{{< alert context="warning" text="This page contains AI-generated placeholder content and will be replaced." />}}
