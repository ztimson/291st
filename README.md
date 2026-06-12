<!-- Header -->
<div id="top" align="center">
  <br />
  
  <!-- Logo -->
  <img src="./public/assets/img/logo.png" alt="Logo" width="200" height="200">


  <!-- Title -->
  ### 291st Joint Task Force
  
  <!-- Description -->
  Clan website for the _291st Joint Task Force_

  <!-- Repo badges -->
  [![Version](https://img.shields.io/badge/dynamic/json.svg?label=Version&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/291st/tags&query=$[0].name)](https://git.zakscode.com/ztimson/291st/tags)
  [![Pull Requests](https://img.shields.io/badge/dynamic/json.svg?label=Pull%20Requests&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/291st&query=open_pr_counter)](https://git.zakscode.com/ztimson/291st/pulls)
  [![Issues](https://img.shields.io/badge/dynamic/json.svg?label=Issues&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/291st&query=open_issues_count)](https://git.zakscode.com/ztimson/291st/issues)

  <!-- Links -->

  ---
  <div>
    <a href="https://git.zakscode.com/ztimson/291st/releases" target="_blank">Release Notes</a>
    • <a href="https://git.zakscode.com/ztimson/291st/issues/new?template=.github%2fissue_template%2fbug.md" target="_blank">Report a Bug</a>
    • <a href="https://git.zakscode.com/ztimson/291st/issues/new?template=.github%2fissue_template%2fenhancement.md" target="_blank">Request a Feature</a>
  </div>

  ---
</div>

## Table of Contents
- [291st](#top)
  - [About](#about)
    - [Demo](https://291st.ca)
    - [Built With](#built-with)
  - [Setup](#setup)
    - [Production](#production)
    - [Development](#development)
  - [License](#license)

## About

This website was created for the _291st Joint Task Force_ to act as a simple landing page for their domain.

### Demo
Website: https://291st.ca

### Built With
[![Docker](https://img.shields.io/badge/Docker-384d54?style=for-the-badge&logo=docker)](https://docker.com/)
[![Momentum](https://img.shields.io/badge/Momentum-4c7bbc?style=for-the-badge)](https://momentum.zakscode.com)

## Setup

<details>
<summary>
  <h3 id="production" style="display: inline">
    Production
  </h3>
</summary>

#### Prerequisites
- [Docker](https://docs.docker.com/install/)

#### Instructions
1. Run the docker image: `docker run -p 80:80 git.zakscode.com/ztimson/291st:latest`
2. Open [http://localhost](http://localhost)
</details>

<details>
<summary>
  <h3 id="development" style="display: inline">
    Development
  </h3>
</summary>

#### Prerequisites
- [Node.js](https://nodejs.org/en/download)

#### Instructions
1. Install the dependencies: `npm install`
2. Start the Angular server: `npm run start`
3. Open [http://localhost:4200](http://localhost:4200)

</details>

## License
Copyright © 2023 Zakary Timson | All Rights Reserved

See the [license](./LICENSE) for more information.
