import { getBaseUrl } from './url.client';

const detailsAPIRequest = async (id: string) => {
  const url = `${getBaseUrl()}/api/services/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error');
  }

  const test = await response.json();
  console.log(test);
  return test;
};

export default detailsAPIRequest;
