/**
 * author controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::author.author', () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: 'deep',
    }
    return await super.find(ctx)
  },
}));
