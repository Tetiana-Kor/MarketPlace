import axios from 'axios';
import qs from 'qs';
const ApiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IlRldHlhbmEgS29yb2JrbyIsImlhdCI6MTY0MjE3NzY0NCwiZXhwIjoxNjQ3MzYxNjQ0fQ.2fAuMCqI9mzGQa3w2Tb7RTAsgZu-VuQwzs-nAOUBrXk';
const httpClient = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api/v1/',
  headers: {
    Authorization: ApiKey,
  },
});

export async function fetchAllProducts(params) {
  return await httpClient.get('products', {
    params: {
      origins: params,
      minPrice: params,
      maxPrice: params,
      page: params,
      perPage: params,
    },
    paramsSerializer: function ({
      origins,
      minPrice,
      maxPrice,
      page,
      perPage,
    }) {
      return qs.stringify((origins, minPrice, maxPrice, page, perPage), {
        arrayFormat: 'comma',
      });
    },
  });
}

export async function fetchProductsDetails(productId) {
  return await httpClient.get(`products/${productId}`);
}

export async function postProduct(product) {
  try {
    return await httpClient.post(
      'products',
      {
        product,
      },
      { 'content-type': 'application/json' },
    );
  } catch (error) {
    if (error.response) {
      console.log('error.response.data: ', error.response.data);
      return error.response.data;
    } else {
      console.log('Error.message', error.message);
    }
    console.log(error.config);
  }
}

export async function updateProduct(productId, product) {
  try {
    return await httpClient.patch(`products/${productId}`, { product });
  } catch (error) {
    if (error.response) {
      console.log('error.response.data: ', error.response.data);
      return error.response.data;
    } else {
      console.log('Error.message', error.message);
    }
    console.log(error.config);
  }
}

export async function postOrder(orders) {
  const orderItem = orders.map(item => {
    return {
      productId: item.id,
      count: item.count,
    };
  });

  const data = {
    order: {
      pieces: orderItem,
    },
  };

  try {
    return await httpClient.post('orders', data, {
      'content-type': 'application/json',
    });
  } catch (error) {
    if (error.response) {
      console.log('error.response.data: ', error.response.data);
      return error.response.data;
    } else {
      console.log('Error.message', error.message);
    }
    console.log(error.config);
  }
}

export async function getOrder(order) {
  try {
    return await httpClient.get(
      'orders',
      { order },
      {
        'content-type': 'application/json',
      },
    );
  } catch (error) {
    if (error.response) {
      console.log('error.response.data: ', error.response.data);
      return error.response.data;
    } else {
      console.log('Error.message', error.message);
    }
    console.log(error.config);
  }
}

export async function orderDetails(orderId) {
  try {
    return await httpClient.get(`orders/${orderId}`, {
      'content-type': 'application/json',
    });
  } catch (error) {
    if (error.response) {
      console.log('error.response.data: ', error.response.data);
      return error.response.data;
    } else {
      console.log('Error.message', error.message);
    }
    console.log(error.config);
  }
}
