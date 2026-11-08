---
title: "Fox Hunting for Bugs: TCSM on a Budget with DevKitty"
date: 2026-11-07
author: "Alex Lynd"
tags: [tcsm, counter-surveillance, ble, wifi, fox-hunting, devkitty, wardriving]
description: "What counter surveillance actually looks like, what detectors exist, & how DevKitty makes hunting BLE & WiFi bugs way less of a pain."
draft: true
---


> ⚠️ This article is still in progress! Expect updates as DevKitty firmware evolves.

<!-- TODO: swap in a real opening scene, e.g. a specific sweep, an AirTag incident, or a Hak5 episode -->
A while back I was sweeping a space with a cheap "bug detector" off Amazon, & it beeped at basically everything: the router, my phone, the microwave. It told me nothing useful. So I wondered, **could I build something that actually tells you *what* it's hearing & *where* it's coming from?**

That question turned into DevKitty. Before getting into the build, here's some background on how counter surveillance works.

---

## So What is Technical Counter Surveillance?

**Technical Surveillance Countermeasures (TCSM)** is a fancy name for finding stuff that's spying on you: trackers, bugs, hidden cameras, rogue access points. The good news is that **almost everything that phones home leaves a signature**, & signatures can be detected.

- **WiFi**: rogue APs, devices probing for saved networks, sketchy clients on your network
- **Bluetooth / BLE**: AirTags, Tiles, SmartTags, beacons, & BLE audio bugs
- **Cellular**: GSM/LTE bugs & GPS trackers that report back over the cell network
- **Hidden cameras**: these are my favorite trick. Camera lenses are retroreflective, so if you sweep a light (especially IR) across a room, **a hidden lens shows up as a weird little glint**.

<!-- TODO: lens glint photo / BLE scan GIF -->

---

## What Tracker Detectors Are Out There?

There's a huge range here, from $20 gadgets to gear that costs more than my car:

- **Off-the-shelf "bug detectors"** [~$20–$100 on Amazon]: broadband RF meters that beep when signal goes up. Super noisy, & they can't tell an AirTag from your toaster.
- **Phone apps** [free]: Apple & Android unknown-tracker alerts, AirGuard. Decent, but they only catch tracker types the vendor supports, & alerts can take hours.
- **Wardriving tools** [free–$$]: the WiGLE app, Kismet, ESP32 Marauder. Wardriving is my favorite lazy recon technique, & it's great for logging *everything* nearby, but it's built for mapping, not pinpointing.
- **NLJD (Non-Linear Junction Detector)** [$$$$]: detects electronics whether they're powered on or not. This is the real pro sweep gear, & it's priced like it.

<!-- TODO: which of these have you actually used & what annoyed you most? -->

---

## Why We Built DevKitty

The goal with DevKitty is simple: **make it easier to start hunting the bugs most people are actually likely to run into.**

> ⚠️ **Limitations:** DevKitty focuses on **BLE & WiFi only**. It won't find cellular bugs, wired mics, or anything that's powered off. It also **requires tuning** for your environment & **some intuition**. The tool shows you the data, but deciding what's sketchy is still on you.

### Why Off-the-Shelf Detectors Kinda Suck

- A lot of them are **tuned to specific MAC addresses or vendor prefixes**.
- Modern trackers use **rotating IDs** (randomized MACs, rolling keys), so a hardcoded list stops working pretty fast.
- New evasion techniques come out way faster than closed products get firmware updates.

We want DevKitty to **keep up with the latest tech** by being open source, hackable, & updated as new tricks show up.

<!-- TODO: link to DevKitty repo / store -->

### Antennas: Omni vs. Directional

An **omnidirectional** antenna (like a dipole) hears everything around it, which is great for answering "is something here?" but useless for telling you where. A **directional** antenna (Yagi, patch, panel) listens in a narrow cone, so you can sweep it around & chase the peak right to the source. Just make sure it matches your band: BLE & most WiFi are at **2.4 GHz**, while newer WiFi also uses **5 & 6 GHz**.

### Signal Hunting Techniques

- **Hot/cold walk**: move around & watch RSSI go up or down. Classic fox hunting.
- **Body shielding**: your body blocks RF, so turn in a slow circle. Where the signal dips hardest is behind you, which means the source is in front.
- **Attenuation**: up close, everything maxes out. Add an attenuator (or ditch the antenna) to get your resolution back.
- **Lock on first**: filter down to one device (or one *behavior pattern* if its IDs rotate) before you start walking around.

<!-- TODO: DevKitty hunting workflow + screenshots -->

### Trilateration

Take RSSI readings from **3+ known spots**, estimate distance from each with a path-loss model, & **the device is roughly where the circles overlap**. Walls & reflections make indoor results pretty messy, but it's good enough to narrow a whole house down to a room.

### WiFi CSI

**Channel State Information** gives you amplitude & phase for every subcarrier instead of a single RSSI number. That's enough detail to pick up motion, people, & changes in the RF environment, & cheap chips like the **ESP32** can export it.

<!-- TODO: shipping in DevKitty now, or roadmap? -->

### Beamforming & BFMSense

WiFi 5/6 devices send **beamforming feedback** to the AP so it can aim signal at them, & these frames go out **unencrypted**. Any sniffer in monitor mode can grab them, no custom firmware required. Research like **BFMSense** shows you can use this feedback for sensing kind of like CSI, using normal off-the-shelf hardware.

<!-- TODO: link BFMSense paper -->

---

## Open Source Databases Know Where You Live

This is the part that freaks people out. Wardriving databases like **[WiGLE](https://wigle.net)** have billions of crowdsourced WiFi, BLE, & cell sightings, all tagged with GPS.

- Look up a router's BSSID or SSID on WiGLE & you can often **pin it to a street address**.
- Your phone's probe requests for saved networks (like `HomeWiFi-1234`) can leak **where you live & work**.
- On the TCSM side, the same lookups help you check whether an unknown AP or beacon **actually belongs nearby or just showed up**.

<!-- TODO: redacted personal example -->

---

## Other Use Cases

<!-- TODO: trim / add -->
- Sweeping your own home or office for rogue devices
- Checking Airbnbs & hotel rooms
- Vehicle sweeps for GPS & BLE trackers
- Red team / pentest recon
- RF fox hunts, CTFs, & teaching

---

## What's Next

<!-- TODO: roadmap items -->
I'm planning to keep adding detection modes as new tracker tricks come out, so stay tuned. If you want to follow along, check out <!-- TODO: GitHub / YouTube / Discord -->, & if you find this stuff useful, consider <!-- TODO: support link -->!

*Only sweep spaces & devices you own or have permission to test. Check your local laws on RF monitoring.*
