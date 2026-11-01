---
title: "The Technical Skill of Programming in the Age of AI"
description: "From falling in love with linguistic abstraction to supervising AI agents: what rebuilding phyelds with Claude taught me about the future of software engineering."
date: 2026-11-01
tags: ["AI", "programming", "software engineering", "research life"]
---

Since I started my journey in computer science, I have been fascinated by technical excellence through <mark>linguistic abstraction</mark>.

I remember the shift from C to Java, where I could finally express some constraints of my domain directly in the programming language. It felt so easy and natural to me that I knew it was something I wanted to study more and more.

This journey brought me to explore more and more abstract and advanced programming languages, where you can say a lot with few expressions, but in a safe and reusable way. I remember moving from inclusion polymorphism, to generic polymorphism, to ad hoc polymorphism: each transition first forced me to get comfortable with the new abstraction, and then let me write more and more complex code to do the same stuff. I was just fascinated by the elegance of combining these concepts.

This led me to do a PhD in computer science, starting from programming language abstractions. Over the years, I was lucky enough to play with metaprogramming and to study category theory (thanks to X for his wonderful material, BTW), monads, and so on.

***

## Then GenAI arrived

At first, I studied it for the sake of curiosity. My PhD had already brought me to multi-agent reinforcement learning and advanced neural architectures (at the time, graph neural networks were one of the things I needed to understand to finish my PhD), so I also tried to understand how these new AIs work inside: transformers, latent spaces, autoregressive generation, all that stuff. It was as interesting as studying programming languages.

Since I'm also a professor at the University of Bologna, we also started to think about how teaching may change with these AIs.

The first AIs (like Copilot) were very far from being autonomous agents able to write a full application in place of developers. Still, I remember being fascinated that an AI could understand (more or less) my programming patterns and help me code my research tools and plotting scripts. Being an expert in the language and a "fast" programmer was still important: the AI was a kind of boost for someone like me, who was expert-ish and could already write a (good) amount of code in a short time.

My colleagues thought AI was kind of useless at the start, and even mocked it a bit. But from GPT-3.5 (Codex), to GPT-4, to GPT-5, something started to change. Everybody (even one of the best programmers I know) started to see the quality of these AIs.

I was more in the AI-assisted loop: I was the one completely in charge of the changes, because, until GPT-5, I was still better than the AI at writing code in my preferred language, thanks to a training that lasted 10 years.

## Losing the joy (and finding it again)

Then GPT-6 and Opus 5.5 arrived (and Anthropic made Opus free for universities, so I started to use it in my daily workflows, e.g., plotting scripts). And I started to lose the joy of programming. I saw that these AIs, when well instructed, write code 100x faster than me, and with similar quality.

At the beginning I was a bit lost: I kind of thought that all the effort I had put in over the years was useless.

But then I started to use them to finish the projects I had started over the years and never managed to complete, because of the infinite time I need to spend on the several research activities I carry on. And, finally, I started to enjoy the time spent <mark>supervising and improving the AI</mark>. It was like having a very smart person in my pocket, whom I can query and brainstorm with at any hour of the day.

So I was able to finish some visual projects I had started (I'm good at the backend part, but quite bad at the frontend-ish stuff). Projects like [scafi-web](https://github.com/scafi/scafi-web) and [scala-boids](https://github.com/cric96/scala-boids) were completely redone, to finally reach the idea I had in mind at the start.

## Phyelds

But the very best moment came with [phyelds](https://phyelds.github.io/phyelds/), a framework for aggregate programming in Python.

I created it to close a research gap in hybrid programming languages (standard abstractions + ML). For years, I lost months trying to integrate these ideas in Scala, with little success. Then, thanks to my colleagues' frustration (and I cannot stand seeing people frustrated), I rewrote part of the Scala version in Python, with a very simple and pragmatic approach. I still did it in the AI-assisted loop: I wrote most of the core, the tests, and the simulator, with the AI helping me complete some functions. This was in spring 2025.

Fast forward to this year: one day, I tried Opus on phyelds, and it was a complete revolution. In a few weeks, with a structured and high-quality workflow (PRs, conventional commits, tests), I brought most of the library's building blocks into the framework (something that, in the past, would perhaps have been the work of a whole thesis, or 2/3 weeks of my own work).

<div class="stats">
  <div class="stat"><span class="stat__value">196</span><span class="stat__label">commits in the first 18 months</span></div>
  <div class="stat"><span class="stat__value">201</span><span class="stat__label">commits in October 2026 alone</span></div>
  <div class="stat"><span class="stat__value">4k → 24k</span><span class="stat__label">lines of Python</span></div>
  <div class="stat"><span class="stat__value">1 → 4</span><span class="stat__label">simulator integrations</span></div>
</div>

Then I tried to implement some visuals that had been in my head for years, but that I never managed to build, because of both time and skill set (e.g., 3D visualization, a playground, etc.). <mark>My ideas took shape in a few days, instead of months or years of work.</mark>

<figure>
  <img src="/phyelds-ai/playground.jpg" width="1512" height="794" alt="The phyelds playground: Python code for a channel on the left, and on the right a 3D network of 90 devices where the ones on the band between a source and a target are highlighted in magenta." loading="lazy" />
  <figcaption>The <a href="https://phyelds.github.io/phyelds/playground/#example=channel">playground</a>: write an aggregate program in the browser and watch the whole network run it.</figcaption>
</figure>

<figure>
  <img src="/phyelds-ai/walkthrough-3d.jpg" width="1512" height="794" alt="The phyelds 3D walkthrough: a temperature field drawn as a coloured point cloud over a plane, sampled by a few dozen devices, with a step-by-step explanation on the right." loading="lazy" />
  <figcaption>The <a href="https://phyelds.github.io/phyelds/walkthrough/">3D walkthrough</a>: a field, sampled by the devices. One of those visuals I had in my head for years.</figcaption>
</figure>

Right now, phyelds has a codebase comparable, in terms of what it can do, to any of the frameworks we implemented over the years (ScaFi, FCPP, or whatever). It contains the experimental features we are working on, and several integrations with simulators (ARGoS, Webots, VMAS, Mesa) that, again, each required a thesis in the past.

Finally, I was also able to put our code inside a robot. This was very hard with ScaFi, and my colleagues and I struggled with it in the past. With Claude, I finished a small demo on a robot (phyelds now also runs on MicroPython), with message-passing performance close to native.

***

## Is programming over?

All of this gave me several things to think about, which kept my head spinning again and again:

<figure class="pull-quote">

Is programming over? Is natural language the new interface to machines? What is the role of software engineering?

</figure>

These are some reflections that came out of these experiments, of my readings, and of what I see in the community:

1. **Programming (finally) became accessible.** Software is now something that (really) everyone can make: with the right model, you can start from an idea and have a PoC in hours or days. This opens new venues for artists, creative people, or just normal humans with an idea in mind who would like to have a piece of software to use, fast.
2. **Average programmers will (perhaps) lose more and more importance.** Recent LLMs reached outstanding quality in coding and in following the team process (e.g., commit quality, awareness of tests, CI, etc.). People who struggled to write code in the past, but were "forced" to do it, will eventually move to querying and reviewing code from LLMs. (As a teacher, this is also the question I keep asking myself: what should our students learn, if writing code is no longer the hard part?)
3. **Public opinion is really fragmented.** Since the evolution of these AIs was incredibly fast, there are still people who avoid using them, because they had frustrating experiences in the past. Or, since you start to lose control, some senior engineers feel all the limits of these AIs. Others, instead, are too optimistic and use them without any control, looping and delegating most of the activity. I think I understand both sides, but I'm closer to the latter: sometimes my supervision was useless, since Claude followed my instructions 99% of the time. When it makes a mistake, I can just look at its reasoning trace and, with the right instruction, put the agent back on the right path.
4. **Context is central.** I've seen the same AI used in different projects: some with a messy and unstable codebase, others (like phyelds) with CI, tests, code quality checks, agent instructions, etc. The AI obviously excelled in the latter: there, I really felt like I had a companion. In messy projects, the quality is more inconsistent: the AI tends to apply very large-scale changes, and we completely lose our grip on the project.
5. **Parallelism is the true limit right now.** I mainly used AI alone, and I think it is the most effective way: I can quickly go from an idea to a solution, by trial and error, without losing too much time syncing, splitting instructions, etc. What I struggle with now is the level of parallelism I can manage: with two or three features in parallel, my cognitive load becomes noticeable, and the token cost becomes relevant too.
6. **Having the vision will be the central part of tomorrow's software engineering.** It is still crucial to have a central, in-depth view of the software you carry on. Just as Linus Torvalds doesn't program much anymore but knows the details of his project really well, we will need to know the architecture, the technologies, the protocols, and so on. Without this in-depth knowledge, you will create a product like the ones you can already find somewhere else. With it, instead, you can create something new and well engineered.

***

I've been chewing on these thoughts for months, trying to understand my (and our) role in the future of software engineering.

So, back to my questions. Is programming over? Writing code line by line, perhaps, yes. Is natural language the new interface to machines? For a lot of things, it already is: I describe what I want, and the agent writes it. But software engineering is not over at all: it moves from writing code to having the vision, and to keeping the context clean enough for the AI to do a good job.

I think the possibilities and the power we have right now are beyond any moment in the past. As software engineers, our work is going down a transformative path, but perhaps for the best :) We will spend more time on ideas and intuition than on writing code.

And, looking back at the beginning of this post: those years spent chasing abstractions were not useless. They are exactly what lets me read what the AI writes, notice when an abstraction is wrong, and know where I want a project to go. Perhaps the technical skill of programming is over for the average programmer, but the knowledge behind it is what makes the difference.
