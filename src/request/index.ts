import xml2js from 'xml2js';

/**
 * Fetch data
 * @param url URL to fetch
 * @param cache cache
 * @returns Data
 */
const get = async (url: string, cache: boolean = false): Promise<Response | null> => {
  try {
    return await fetch(url, cache ? undefined : { cache: 'no-cache' });
  } catch (error) {
    return null;
  }
};

/**
 * Fetch data as string
 * @param url URL to fetch
 * @param cache cache
 * @returns Text data
 */
export const getText = async (url: string, cache: boolean = false): Promise<any> => {
  const response = await get(url, cache);
  const responseText = response && response.ok ? await response.text() : null;

  return responseText;
};

/**
 * Fetch data as JSON object
 * @param url URL to fetch
 * @param cache cache
 * @returns JSON data
 */
export const getJson = async (url: string, cache: boolean = false): Promise<any> => {
  const response = await get(url, cache);
  const responseJson = response && response.ok ? await response.json() : null;

  return responseJson;
};

/**
 * Fetch data as XML object
 * @param url URL to fetch
 * @param cache cache
 * @returns XML data
 */
export const getXml = async (url: string, cache: boolean = false): Promise<any> => {
  const responseText = await getText(url, cache);
  const xmlObject = responseText ? await xml2js.parseStringPromise(responseText, { strict: false, trim: true }) : null;

  return xmlObject;
};
