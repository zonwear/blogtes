# Welcome to Landing Pad 🚀

This is a free theme for Astro created by [Cosmic Themes](https://cosmicthemes.com/). It is a great place to house links to your various projects and socials.

[website demo](https://landingpad.cosmicthemes.com/)

## Quickstart

1. Fork this project to your own repository, and clone it to your local machine
2. Install all necessary packages with `npm install`
3. Run `npm run dev` to start the dev server
   - By default, it will be available at `localhost:4321`
4. Edit the content either with Keystatic CMS at `localhost:4321/admin` or by editing the markdown files in `src/content/`
   - There's also an "Admin Dashboard" button you'll see in the demo that will take you to the CMS editor
5. Update the colors if desired in `tailwind.config.cjs`, or any other code to adjust the looks
6. Update the site URL in `astro.config.mjs` and `/public/robots.txt` to match your domain
7. After you're happy, update your changes to your repo and [deploy to Netlify, Vercel, Cloudflare](https://cosmicthemes.com/deployment/), or other provider of your choice

## Features

- A production-ready landing page inspired by linktree, made to be hosted as a static site
- Optional Keystatic CMS integration for editing content
- Built-in image optimiation using `astro:assets`
- Tailwind CSS for styling

## Other Resources

- See my blog post on [recommended Astro web development setup](https://cosmicthemes.com/blog/astro-web-development-setup/).
- You can learn more information from the [theme docs](https://cosmicthemes.com/docs/) pages.

## License

This project is open source and available under the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

However, If you have purchased [All Access](https://cosmicthemes.com/all-access/) from Cosmic Themes, there is a no attribution required license you can view at [License details](https://cosmicthemes.com/license/).

## General Astro Info

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory. I also frequently use `src/assets` for images when using Astro asssets for image optimization.

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Want to learn more?

Feel free to check out the [Astro documentation](https://docs.astro.build).
