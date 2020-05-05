import axios from 'axios'
import { API_ROUTES } from '@/constants'
import PlantsTransformer from '@/transformers/Plants'

class PlantsService {
  async findPlant(name) {
    const params = {
      q: name,
      complete_data: true,
      page_size: 10
    }

    const response = await axios.get(API_ROUTES.ALL_PLANTS, { params })
    return PlantsTransformer.fetchCollection(response.data)
  }
}

export default new PlantsService()
