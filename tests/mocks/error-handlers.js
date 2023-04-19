import { rest } from "msw";

export default [
  rest.get(
    "https://api.storyblok.com/v1/cdn/stories/beasts",
    (req, res, ctx) => {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not allowed",
        })
      );
    }
  ),
  rest.get(
    "https://api.storyblok.com/v1/cdn/stories/magical-beasts/:name",
    (req, res, ctx) => {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not allowed",
        })
      );
    }
  ),
];
