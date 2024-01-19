### Advantages of Next JS

- Routing
- Pre rendering(Static Generation & Server side rendering)
- API endpoints

#### Pre Rendering

- Naked React APP it sends an empty file as a response to the initial request &
  when react/JS is downloaded to the browser that it generates the content of
  the page
- Pre generate the HTML on server and send it with the response in `Next.js`.
  So, we now have HTML with data rendered on the server and sent to the client
- Pre rendering can happen at 2 times =>

1. Build Time
2. Generate at request time

#### API Endpoints

- API folders inside of pages directory.
- Anything inside that will turn an API
- IN app Router, you can accomplish same thing by creating route handler
- Next.js 13 introduced App Router built on top of React Server Components &
  Suspense

#### Routing

1. Two Types

- Page Routing (/pages folder)
- App Routing(Latest), define under `app/` directory.

2. Terminologies

- Segments => Route Segments/URL segments.
- Path
- Root Segment => Defined by `/`. Done initially by using the `page.jsx` &
  `layout.jsx` inside our `app/` directory.

3. Routing in Next.js

- File System based Routing.
- Done by creating files/folders.
- Folders are used to create route-segment.
- Files are used to create the UI(React Server Component).
- about will not be publicly accessible unless there is a `page.jsx`/`route.jsx`

4. Nested Routes

- Created by nesting folders inside one another
- Pages are react server components by default.

#### LAYOUTS

- Another Special file
- Shared UI that can be used across multiple pages
- Can be defined by exporting a react component from a layout.jsx file
- Should accept a children prop
- Will be populated by child segments/layouts if they exist.
- Can also be client components, by default are React Server Components.
- Outermost `Layout.jsx` is a root layout
- Required File shared by all the pages of the application.
- Root Layout is by default a React Server component and cannot be a client
  component.
- Other layouts can be server/client component.
- You can create layouts inside of route segments
- When you create a layout inside a route segment, all of it's children will
  share the layout
- By default, these layouts in `app/about/` are react server components, which
  preserves state and can fetch data, you don't have to re fetch/re render the
  layout if it is shared among all of the child components.

#### Templates

- Similar to Layouts.
- Wrap the children in the nested layouts
- Templates are re-rendered, layouts do not.
- New instance is created on every navigation
- State is not preserved.

#### Navigation

2 ways of navigating between pages

1. Link Component
2. useRouter hook

##### Link Component

- React component extends html `<a>` tag.
- Provides Client side Navigation and pre fetching.

<strong>Whenever you want to use a client component, you have to tell NextJS by
using the `use client` directive at the top of the component you want should be
using react component/hooks/browser APIs</strong>

##### useRouter hook

- Allows programatically to navigate between pages/routes in client components.
- Encourage to use Link component unless some specific need to do `useRouter`
  hook
- Syntax to use `const router = useRouter()`
- useRouter from nextRouter works in the pages directory
- But to use `useRouter` in the appRouter, import it from the `next/navigation`
- Similar to Link, performs soft navigation/client side navigation instead of
  re-rendering the whole page
- Only use the routerpush or replace if you have a specific use case.

##### How Navigation Works

- Route transition is triggered by a `link component`/`router.push` method
- Updates the URL
- Prevent the default behaviour of the browser to send a request to the server
  to reload the entire page
- Reuse the segments that haven't changed
- Only update the segment that have changed
- For that it is going to fetch the cache on the client-side cache first.
- If it doesn't exist, fetches from the server and then render and update that
  specifc segment
- With the client side cache, the router stores the result of the payload in the
  cache and then navigation happens and fetches from the cache if it exists.
- If it does not exist, we are going to hard navigation(going to the server,
  fetching that segment)

##### Prefetching feature

- Way to pre load the route in the background, before they are actually visited
- When using the link component, by default all the routes are pre fetched when
  they are visible in the view port.
- Result of that payload is going to be stored in the cache.
- Prefetching is only enabled in the server.
- Can be disabled by passing `prefetch-false` to the link component

#### Dynamic Routes
