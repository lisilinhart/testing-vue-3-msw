import { rest } from 'msw'

import BeastPageMock from '@mocks/beasts'
import NifflerMock from '@mocks/niffler'

export default [
  rest.get('https://api.storyblok.com/v1/cdn/stories/beasts', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(BeastPageMock)
    )
  }),
  rest.get('https://api.storyblok.com/v1/cdn/stories/magical-beasts/:name', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(NifflerMock)
    )
  })
]