import { BaseTransformer } from './Base'
import FamilyTransformer from './Family'

export default class PlantTransformer extends BaseTransformer {
  static fetch(plant) {
    return {
      class: plant.class,
      name: plant.common_name,
      cultivars: plant.cultivars,
      division: plant.division,
      duration: plant.division,
      family: FamilyTransformer.fetch(plant.family),
      familyCommonName: plant.family_common_name,
      forms: plant.form,
      genus: plant.genus,
      hybrids: plant.hybrids,
      id: plant.id,
      images: plant.images,
      mainSpecies: plant.main_species,
      nativeStatus: plant.native_status,
      order: plant.order,
      scientificName: plant.scientific_name,
      completeData: plant.complete_data,
      subSpecies: plant.sub_species,
      varieties: plant.varieties
    }
  }
}
