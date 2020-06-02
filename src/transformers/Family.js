import { BaseTransformer } from './Base'

export default class FamilyTransformer extends BaseTransformer {
  static fetch(family) {
    return {
      commonName: family.common_name,
      id: family.id,
      link: family.link,
      slug: family.slug,
      name: family.name
    }
  }
}
