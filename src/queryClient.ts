import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

type AnyObj = { [key: string]: any };
export const getQueryClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient();
    return client;
  };
})();

const BASE_URL = 'https://fakestoreapi.com';

export const fetcher = async ({
  method,
  path,
  body,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  body?: AnyObj;
  params?: AnyObj;
}) => {
  try {
    const url = `${BASE_URL}/${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
    };
    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
};
