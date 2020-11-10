// Copyright (c) Microsoft.
// Licensed under the MIT license.

// <AuthProviderSnippet>
import { AuthManager } from '../auth/AuthManager';

// Used by Graph client to get access tokens
// See https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/CustomAuthenticationProvider.md
export class GraphAuthProvider {
  getAccessToken = async() => {
    const token = await AuthManager.getAccessTokenAsync();
    return token || '';
  }
}
// </AuthProviderSnippet>
