import axios from '@/http'
import { API_ROUTES } from '@/constants'
import PlantsTransformer from '@/transformers/Plants'
import PlantTransformer from '@/transformers/Plant'

class PlantsService {
  async findPlant(name) {
    const params = {
      q: name,
      complete_data: true,
      page_size: 10
    }

    try {
      const response = await axios.get(API_ROUTES.ALL_PLANTS, { params })
      return PlantsTransformer.fetchCollection(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  async fetchPlantWithURL(id) {
    try {
      const response = await axios.get(`${API_ROUTES.ALL_PLANTS}/${id}`)
      return PlantTransformer.fetch(response.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export default new PlantsService()
