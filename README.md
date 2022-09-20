# 291st JTF
[Clan page](https://291st.ca) for the 291st Joint Task Force

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Table of Contents
[[_TOC_]]

## Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS 16](https://nodejs.org/en/)
- _[Docker](https://docs.docker.com/install/) (Optional)_

## Setup
The project can either be run using NPM or Docker. NPM is recommended for development.
<details>
<summary>NPM</summary>

1. Install the dependencies: `npm install`
2. Start the Angular server: `npm run start`
</details>

<details>
<summary>Docker</summary>

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
