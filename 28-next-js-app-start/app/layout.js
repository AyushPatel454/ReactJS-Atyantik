import "./globals.css";

// metadata ---> is an object that contains the title and description of the app. (automatic add in head tag)
// RootLayout ---> is a component that wraps the entire app.
// reserved name ---> metadata is reserved named in Next.js and it is used to define the title and description of the app.


// Pages ---> are the content of the app. They are the components that are rendered when a user visits a specific URL.
// Layouts ---> are the wrappers around the pages. They are the components that are rendered around the pages.
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}