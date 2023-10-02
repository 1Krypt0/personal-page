---
title: Building my Personal Website
description: This is a showcase of how I designed and built my very own website from scratch
pubDate: Aug 18, 2023
heroImage: "../../assets/personal-page.png"
category: Web Dev
ghLink: https://github.com/1Krypt0/personal-page
---

# 💻 Creating my place on the Internet

I always wanted to have a website for posting my thoughts. Seeing people like Thomas Frank, Ali Abdaal and other bloggers having a place where they could talk about their passions and have people actually interested gave me inspiration to try it for my own. What you are looking at now is the result of that desire.

## 🌱 How it started

This is actually not the first time I attempted this. Back in 2019, during the COVID lock down, I asked for my birthday gift to be a domain name that I could rent out. That was the first time I ever had my place in the internet. However, I didn't really know what to do with it.

I spent the first week just trying to find a good design for my website, only to discover that I had no clue how to design a proper website. I wanted it not only to be a blog, but also a place where I could showcase my skills and progress, much like a personal portfolio.

The solution was to go with a pre-built template from [Hugo](https://gohugo.io/), which in all fairness was not bad, but it was never what I really wanted. Since I didn't have the skills to improve it myself, I stuck with it.

I stuck with it for a long time actually, and I got what I asked for. I had a place to showcase my skills, my interests, and share my thoughts with everyone that cared to read it. This also came at a point in my life where a lot of things changed, and I got into the whole world of productivity, health and much more (which I still like today, but I learned to be less extreme in my actions, thankfully).

The blog ran for a solid amount of time, however very quickly life got in the way. That time at University, the whole of the Second Semester, was a specially stressful one, probably the worst in my whole journey, with too many things happening all at once, academic or otherwise, besides me also wanting to have my own interests.

To put it simply, 24 hours was far too little time to do everything I wished. Something had to give. And so, this adventure through writing online was one of the low-hanging pieces that got cut out quickly.

## 🔥 Re-igniting the flame

A long time went by where the website went completely dark. The last post that was launched dates to the 21st of April, 2022. From then, up until these days, I had a place to write, sure, but lost my interest in keep sharing my thoughts, the things I was writing about stopped, and life in general just took a big shift.

I also gained other priorities in life. I started living with my girlfriend, was part of a student association, and decided to put a lot more focus into learning things well at Uni, instead of just coasting along.

My whole 4th year went like this, and I don't really regret it. It was some time I needed for other things. However...

During all that time I always kept the idea of having a place to showcase my skills. As I am close to finishing my studies and going into the world of job-hunting, creating a portfolio could (hopefully) make me stand out, and by this time I actually had some relevant projects to add.

I also got pretty good at creating websites and web apps. During my 4th year I invested into learning on that front, and it paid off. I felt confident that I could build my own page and it wouldn't suck. I also wanted something tailored to my needs. It needed to have:

- A compelling starter page, giving an overview of everything contained in the website
- An Intro section, to show who I am and what I am doing with my life
- A Projects page, to highlight what I have been working on with pages like this one
- A Blog section, to write my thoughts just like I could in the old one

And so, as soon as I had some time on my hands, the work could begin.

# 🔨 The building process

The process started by figuring out the design and the visuals I wanted my website to have. I started searching through Figma looking for inspiration, and I found [this portfolio](https://www.figma.com/community/file/882879599442878081), which seemed exactly what I wanted. I also had a weird fixation with the Playfair Display font in particular, which I believed made great Hero Sections.

As such, I based my design around it, and adapted it to build the final version. This was also a way to update my [Figma](https://www.figma.com/) skills, which is something I want to expand further in the future.

With the design finished, I could on to the actual construction. I already had a tech stack in mind, suited for the needs of my website.

Since I didn't need it to have a lot of interactivity (it is all static content), and [Astro](https://astro.build/) was gaining traction, it was the obvious choice. For styling, I don't think you can go wrong with [Tailwind](https://tailwindcss.com/). I have used consistently and can't think of a better tool for styling HTML.

### 🧱 Building the foundation

Building with Astro is a breeze, their components work really intuitively, they have a lot of support for breaking pages down, and it is heavily content-centered (also one of the reasons for choosing it over others).

Also, their documentation is amazing. Every question I had, they had a full tutorial on how to solve it easily, and in an elegant fashion. Very quickly, the full layout was built.

### 🖌 Problems with styling

The troubles started to appear the moment I had to pass the styling from Figma design to proper HTML and CSS.

My biggest weakness was definitely trying to convert the styles. In Figma, everything works, and making designs that are responsive, beautiful and simple is a breeze.

However, passing all that design to code is not an easy feat, and it is definitely where the website is lacking the most.

Some things still don't look quite right (although I'm probably nitpicking), and they just don't function as well as they did in Figma. This is especially true for 2 things:

- Making the design responsive
- Handling images

Responsive design is also a pain, even with Tailwind's excellent support. Nonetheless, I struggled with it a bit, and I still don't consider that everything is consistent with the design.

This is something I intend to improve, and some projects on going from Figma to code are already planned.

Handling images is by far the biggest problem. Since they are assets mostly out of my control (as I am terrible in generating and editing images), creating a layout that was general enough to fit any type of image is a problem I am still facing.

As of this moment, I have really no solution but to adapt the images to fit the layout, and finding the ones that respect the aspect sizes.

### 🚧 Plans for the future

While the things described above are issues that affect the overall quality of the page, I still consider it a success. It has (in my humble opinion), a stunning design, clean interface, and it is intuitive. If I were to improve things, they would definitely be:

- Making use of [Astro 3.0's new features](https://astro.build/blog/astro-3/), like their View Transition API, and the Image optimizations they have
- Fixing the image problems, either by changing the layout of the pages, or by learning how to design better images for the layout
- Simplifying some of the CSS hacks I did, creating a more defined style palette, and being truly able to go from Figma to CSS without issues.

# Conclusion

Even though my perfectionist attitude is not helping me to consider this a finished job, it's at least a good enough starting point that I feel confident in sharing with the world. In the future, I hope to improve it and customize it to my ever-changing needs, now that I am in full control of what I have built.

Maybe this will be a standout project that will be the start of a lot more 👀. Or maybe, it will just amount to a small space where I showcase who I am when trying to get a job. Either way, I got what I came for. I finally have my spot on the internet. Cheers! 🎉
