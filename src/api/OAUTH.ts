import {AxiosRequestConfig} from 'axios';
import {API} from './API';
import {COGNITO_CLIENT_ID, COGNITO_CLIENT_SECRET} from './config';
import {COGNITO_URL} from './urls';

interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

let authToken: string | null = null; // Store the authentication token
let tokenExpirationTimestamp: number | null = null; // Store the token expiration timestamp

export namespace Oauth {
  export async function getAuthorizationHeader(): Promise<
    Record<string, string>
  > {
    if (!authToken || Date.now() > tokenExpirationTimestamp!) {
      await refreshAuthToken(); // Refresh the token if expired or not available
    }

    return {Authorization: `Bearer ${authToken}`};
  }

  export async function refreshAuthToken(): Promise<void> {
    try {
      const tokenRequestConfig: AxiosRequestConfig = {
        params: {
          client_id: COGNITO_CLIENT_ID,
          client_secret: COGNITO_CLIENT_SECRET,
          grant_type: 'client_credentials',
        },
        baseURL: COGNITO_URL,
      };

      const tokenResponse: AuthResponse = await API.post(
        '/oauth2/token',
        null,
        tokenRequestConfig,
      );

      authToken = tokenResponse.access_token;
      tokenExpirationTimestamp = Date.now() + tokenResponse.expires_in * 1000; // Calculate expiration timestamp
    } catch (error) {
      throw new Error('Error obtaining access token: ' + error);
    }
  }
}

export default Oauth;
