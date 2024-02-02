import { getBaseUrl } from './url.client';

const detailsAPIRequest = async (id?: string) => {
  const url = id ? `${getBaseUrl()}/api/services/${id}` : `${getBaseUrl()}/api/services`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error');
  }

  const test = await response.json();

  return test;
};

export default detailsAPIRequest;
