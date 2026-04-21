const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export const api = {
  getProducts: (category?: string) => {
    if (!category || category === 'all') {
      return fetcher('/api/products');
    }
    return fetcher(`/api/products?category=${category}`);
  },

  getProduct: (id: number) => {
    return fetcher(`/api/products/${id}`);
  },

  getCategories: () => {
    return fetcher('/api/categories');
  },

  createOrder: (data: any) => {
    return fetch(`${BASE_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json());
  }
};