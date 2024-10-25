import { z, defineCollection } from "astro:content";

const bioCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      theme: z.enum(["dark", "light"]),
      blur: z.enum(["no blur", "blur"]),
      avatar: image(),
      background: image(),
    }),
});

const socialsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    url: z.string(),
    order: z.number(),
    icon: z.enum([
      "github",
      "twitter",
      "mastodon",
      "linkedin",
      "instagram",
      "threads",
      "facebook",
      "youtube",
      "twitch",
      "tiktok",
      "snapchat",
      "reddit",
      "pinterest",
      "medium",
      "dev",
      "dribbble",
      "behance",
      "codepen",
      "producthunt",
      "discord",
      "slack",
      "whatsapp",
      "telegram",
      "email",
    ]),
  }),
});

const linksCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  socials: socialsCollection,
  bio: bioCollection,
  links: linksCollection,
};
