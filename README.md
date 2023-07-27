# 291st JTF

---

> "Putting the Damned to Rest"


![Skull Sword and Globe Emblem](./src/assets/img/logo.png)

This is the clan [website](https://291st.ca) for the 291st Joint Task Force.

This project was generated using Angular 14.

## Table of Contents
<!-- TOC -->
* [291st JTF](#291st-jtf)
  * [Table of Contents](#table-of-contents)
  * [Prerequisites](#prerequisites)
  * [Setup](#setup)
  * [Cheatsheet](#cheatsheet)
<!-- TOC -->

## Prerequisites
- [NodeJS](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/install/)

## Setup
The project can either be run using NPM or Docker. NPM is recommended for development.
<details>
<summary>NPM (Development)</summary>

1. Install the dependencies: `npm install`
2. Start the Angular server: `npm run start`
</details>

<details>
<summary>Docker (Production)</summary>

1. Build the docker image: `docker build -t 291st:<TAG> .`
2. Start the new image: `docker run -p 4200:80 291st:<TAG>`

</details>

The website should now be accessible on [http://localhost:4200](http://localhost:4200)

## Cheatsheet
```bash
# Start Angular server
npm run start

# Build production
npm run build:prod

# Build docker image
docker build -t 291st:<TAG>

# Run docker image
docker run -p 4200:80 291st:<TAG>
```
