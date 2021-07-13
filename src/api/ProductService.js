import Api from '../utils/Api';
import Config from '../config/Config';

class BandAgentService {
  constructor() {
    this.url = Config.BASE_URL_API;
    this.api = new Api({ url: this.url });
    this.api.createEntities([{ name: 'products' },{ name: 'discounts' }]);
  }

  getProducts() {
    return this.api.endpoints.products
      .getAll()
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  getDiscounts() {
    return this.api.endpoints.discounts
      .getAll()
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

}

export default new BandAgentService();
