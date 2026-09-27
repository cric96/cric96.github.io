---
title: "Three Researchers' Nights with a Swarm"
description: "Three years of bringing our swarm robotics demo to the European Researchers' Night: from six noisy robots to a swarm that writes letters."
date: 2026-09-27
tags: ["outreach", "swarm robotics", "research life"]
---

This is the third year that my group and I have tried to bring a demo to the [European Researchers' Night](https://marie-sklodowska-curie-actions.ec.europa.eu/event-type/european-researchers-night), to show that the research we do can also be applied in "realistic" settings.

I really love that moment, because the whole group is in the same place, helping each other to make it the best it can be.

<figure>
  <img src="/researcher-night/over-year.jpg" width="1280" height="960" alt="Three robots side by side on a table: a large black commercial rover, a rectangular 3D-printed robot with four wheels, and a small round white robot." loading="lazy" />
  <figcaption>Three years, three robots: the one we bought the first year, Nicolas's first design, and this year's one.</figcaption>
</figure>

This is something I really care about. In my opinion, science is not only about producing new knowledge (which I really love), but also about trying to <mark>disseminate that knowledge to "non-peers"</mark>.

I had dreamed of doing these demos since my PhD. I was fascinated by swarms that move cohesively, harmoniously. I did several of these things in simulation, but it seemed to me that something was missing.

So, after three years of my PhD spent trying to make such a demo happen, I convinced my supervisor to do it. I also wrote some research papers on how to engineer this kind of behaviour (which eventually led to a publication I'm very proud of: [MacroSwarm](https://doi.org/10.46298/lmcs-21(3:13)2025)).

***

## Year one: the seed

We found a small budget allocated to the Researchers' Night and bought 6 robots (in our simulations, we ran those same examples with hundreds :)).

I knew the demo would be messy: with just 6 robots, it is hard to see any interesting shape. Moreover, to make things more challenging, I had only a few weeks to get it done.

The architecture itself was not that simple either. For our demo we needed a positioning system, so we tried to use [ArUco markers](https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html) with a webcam, but the positions were really, really noisy. And even though the program was already written in simulation, reality brought several new concerns: robots may not follow the right velocity vector, and so on.

At the time, Nicolas and Davide (two PhD students from our group) helped me to, at least, have something.

<figure>
  <video src="/researcher-night/first-year.mp4#t=0.1" width="720" height="1280" controls muted loop playsinline preload="metadata"></video>
  <figcaption>Year one: one of our first tests in the lab.</figcaption>
</figure>

We went to the night knowing about several limitations:

<aside class="callout callout--ledger" data-label="What we did not have">

No obstacle avoidance.

Just a few simple shapes.

No dashboard.

A really noisy positioning system.

</aside>

But this was the start, our seed. I know it was really messy, but we got that demo done.

## Year two: a true engineer joins

The year after, a true engineer (not a "crazy-ish" scientist like me :)) decided to help me. Nicolas organized the whole thing: we designed the system properly, with a well-organized structure and codebase, and with different protocols. Moreover, Nicolas decided to design the robot himself (because he LOVED to).

I was so lucky to have someone even more passionate than me: I don't have his level of dedication, of precision, etc.

We also got a little funding through crowdfunding ([here](https://experiment.com/projects/project-emerge-an-open-source-swarm-robotics-platform) is where Project Emerge was born).

As a product of all this, we created a very cheap swarm robotics platform: <mark>each robot costs around 60 euros</mark>, you can print it at home (wheels, body, everything), and you can use a third-party service to print the PCB.

<div class="stats">
  <div class="stat"><span class="stat__value">~60 €</span><span class="stat__label">per robot</span></div>
  <div class="stat"><span class="stat__value">100%</span><span class="stat__label">3D-printable body</span></div>
  <div class="stat"><span class="stat__value">3rd-party</span><span class="stat__label">PCB print</span></div>
</div>

<figure>
  <img src="/researcher-night/third-year-photo.jpg" width="960" height="1280" alt="Nine black rectangular robots with ArUco markers on a tiled floor in a library." loading="lazy" />
  <figcaption>Year two: Nicolas's first robots, ready for the night.</figcaption>
</figure>

The jump was crazy, but there were still several concerns: the movement was slow, the vision system was still lagging, there were not that many shapes, and the robots could get stuck on each other because of their rectangular shape.

<figure>
  <video src="/researcher-night/second-year.mp4#t=0.1" width="720" height="1280" controls muted loop playsinline preload="metadata"></video>
  <figcaption>Year two: a crazy jump, but the movement was still slow.</figcaption>
</figure>

## Year three: the idea I had in year one

So, again, Nicolas decided to improve it. This year he really showed his mastery: he designed a new robot that is smaller, doesn't get stuck, and moves better. I saw his work. It was hard, and long. He did everything alone, just for the love of his idea. I would have loved to help him, but I had no idea how to :)

<figure>
  <img src="/researcher-night/last-year-photo.jpg" width="960" height="1280" alt="Nine small round white robots with ArUco markers arranged in a formation on a tiled floor." loading="lazy" />
  <figcaption>Year three: the new robot, smaller and round (no more getting stuck :)).</figcaption>
</figure>

I tried to do my best to improve the rest:

- the vision system: **3 cameras instead of 1**, giving us a much larger area to show very complex structures;
- new formations, and a chat to "talk" with the swarm;
- the movement logic, to reduce collisions and make the movement smoother.

I need to be honest: this was done with the help of recent AI tools. I saw how, <mark>if you know what you want</mark>, they can bring ideas to reality in seconds. I remember spending weeks tuning the movement the first year; this time it was almost instantaneous.

The demo this year was, from my point of view, a complete(-ish) success: the movement was smooth, the formations were flawless, and we could also draw ad hoc shapes (different letters, etc.) that drove people crazy.

<figure>
  <video src="/researcher-night/last-year.mp4#t=0.1" width="720" height="1280" controls muted loop playsinline preload="metadata"></video>
  <figcaption>Year three: the swarm keeps its formation, even when someone messes with it :)</figcaption>
</figure>

<!-- 🎥 VIDEO (optional): the swarm drawing letters / someone using the chat -->

<figure class="pull-quote">

After three years, I finally reached the idea I had in the first one.

</figure>

***

## What these three years taught me

These three years left me with several thoughts:

1. **Start soon, even if you know it may fail.** Having something is better than nothing: you may motivate others and make people love what you do.
2. **Learn to delegate, and to trust.** I'm used to doing things by myself, but the first year made me really understand that, even if I think I know several things at different levels of abstraction, it is very hard to master everything. Having a heterogeneous team (with real masters, like Nicolas :)) eventually leads to excellence.
3. **Take the best from others.** I invested a LOT of time in this, knowing that nobody was following me, just for the love of my idea. Eventually, though, this led people to help me, even with a little effort, and all those little efforts led to this final result.
4. **One project may start several outcomes you cannot know in advance.** I never thought of creating our own platform when I started this demo: thanks to Nicolas, we have it. Several new research works also emerged from it (new ideas on how to create formations, the platform, interaction, theses). It was a side project that brought a lot.

***

So, to conclude, I'm really happy with how things have evolved and with what we showed this year, even if several things (still) need to improve (but here, perhaps, it is also my "excellence-seeking" side speaking): removing the cameras, introducing full decentralization, better interaction through voice. These are all things I would love to include.

Anyway, I have also learned to "enjoy" success, and this, for me, was one.

Again, thank you to my whole group (and in particular to Nicolas, who was the REAL lead on this :)), and to all the students who helped, this year but also in the past, from the very first one.

I hope to keep doing these kinds of activities, to bring what I love outside the scientific community (and I hope that those who came were fascinated, at least a bit, as much as I am).
