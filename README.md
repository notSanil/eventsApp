# Sample events app

This project is made to simulate an events app such as BookMyShow with the necessary frontend.

## Program structure

The entire app consists of a single page, with two primary components.

- Header
- MainContent

The header is composed of all the buttons that it needs, and the search bar.

The main content is composed of the main text of the body, infinite horizontal scrolling carousel of 8 [recommended events](app/Components//Recommendations.tsx), and a lazy loaded [upcoming events](app/Components/UpcomingEvents.tsx) section.

## Running the project

### 1. Clone the repo

```sh
git clone https://github.com/notSanil/eventsApp.git

cd eventsApp
```

### 2. Install dependencies

This project uses npm, although yarn or bun may also be used.

```sh
npm install
```

### 3. Create the enviornment file

On Windows

```cmd
echo "PUBLIC_NEXT_API_KEY = <API_KEY>" > .env.local
```

On Linux

```sh
echo "PUBLIC_NEXT_API_KEY = <API_KEY>" | .env.local
```

### 4. Run

```sh
npm run dev
```

## Technical design

Next.js is used in this project since it allows most of the app to be rendered server side. There are however certain components that **must** be rendered client side.

One such component is the scrolling upcoming events section which needs to make api calls in order to lazily load the data as needed.

Other than these cards a few other smaller components such as the search bar are client rendered due to [limitations](https://github.com/styled-components/styled-components/issues/4025) in **Material UI**.
