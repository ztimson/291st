![291st Logo](./src/assets/img/header.png)

---

Clan website built for the _291st Joint Task Force_

## Table of Contents
- [291st JTF](#291st-jtf)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Stack](#stack)
  - [Setup](#setup)
    - [Development](#development)
	- [Production](#production)
  - [Cheatsheet](#cheatsheet)

## Demo
[https://291st.ca](https://291st.ca)

## Stack
| Technology | Version |
|------------|---------|
| Node       | 16      |
| Angular    | 14      |
| Docker     |         |

## Setup
<details>
<summary>
  <h3 id="development" style="display: inline">
    Development
  </h3>
</summary>

#### Prerequisites
- [NodeJS](https://nodejs.org/en/)

#### Instructions
1. Install the dependencies: `npm install`
2. Start the Angular server: `npm run start`
3. Open [http://localhost:4200](http://localhost:4200)
</details>

<details>
<summary>
  <h3 id="production" style="display: inline">
    Production
  </h3>
</summary>

#### Prerequisites
- [Docker](https://docs.docker.com/install/)

#### Instructions
1. Build the docker image: `docker build -t 291st:<TAG> .`
2. Start the new image: `docker run -p 4200:80 291st:<TAG>`
3. Open [http://localhost:4200](http://localhost:4200)

</details>

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
