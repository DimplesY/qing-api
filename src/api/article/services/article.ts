/**
 * article service
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreService('api::article.article', ({ strapi }) => ({

  /**
   * 给指定 ID 的文章增加阅读量
   * @param id 文章的 ID
   */
  async incrementView(id: number): Promise<boolean> {
    const db = strapi.db.query('api::article.article')

    const entity = await db.findOne({
      where: {
        id,
      },
    })

    const result = await db.update({
      where: {
        id,
      },
      data: {
        view: entity.view + 1,
      },
    })
    return !!result
  },

}))
