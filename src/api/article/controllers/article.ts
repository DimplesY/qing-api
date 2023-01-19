/**
 * article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({ strapi }) => ({

  async findOne(ctx) {
    const { id } = ctx.params
    const { query } = ctx
    const entity = await strapi.service('api::article.article').findOne(id, query)
    await strapi.service('api::article.article').incrementView(id)
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanitizedEntity)
  },
}))
