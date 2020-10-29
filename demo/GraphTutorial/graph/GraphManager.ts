//  Copyright (c) Microsoft.
//  Licensed under the MIT license.

import { Client } from '@microsoft/microsoft-graph-client';
import { GraphAuthProvider } from './GraphAuthProvider';

// Set the authProvider to an instance
// of GraphAuthProvider
const clientOptions = {
  authProvider: new GraphAuthProvider()
};

// Initialize the client
const graphClient = Client.initWithMiddleware(clientOptions);

export class GraphManager {
  static getUserAsync = async() => {
    // GET /me
    return graphClient.api('/me').get();
  }
}
