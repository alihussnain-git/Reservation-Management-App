import Oauth from './OAUTH';

export const commonHeaders = async (): Promise<Record<string, string>> => {
  const headers = await Oauth.getAuthorizationHeader();
  headers['source-id'] = '';
  return headers;
};
