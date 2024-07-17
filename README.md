# Itunes Podcast App

This project is an application developed in Angular 17 that provides a list of Itunes podcast. The application displays top 100 podcasts cards on the main page. Each card allows access to detailed information about the podcast, including the episodes that belong to the program.

## Features

- **Landing Page**: Displays 100 podcast cards with basic information.
- **Detailed Information**: Clicking on a card provides detailed information about the podcast and related episodes.
- **Modular Structure**: The application is organized into folders to facilitate maintenance and scalability.

## Folder Structure

The project folder structure is as follows:

- `src/app`
  - `pages/` : Contains the main pages of the application.
  - `components/` : Contains reusable components.
  - `layout/` : Contains components related to the application's layout (e.g., header, footer).
  - `services/` : Contains the application's services to handle business logic and API calls.
  - `utils/` : Contains utilities and helper functions.
  - `environments/` : Contains configuration files for different environments (e.g., development, production).

## Installation

To clone and run this application, follow these steps:

1. Clone this repository into a folder where you want to save the project:
    ```bash
    git clone https://gitlab.com/mario.villar/prueba-angular-podcast.git
    ```

2. Navigate to the project directory:
    ```bash
    cd projectFolderName
    ```

3. Install the project dependencies:
    ```bash
    npm install
    ```

## Usage

To run the application in a development environment, use the following command:
```bash
ng serve

