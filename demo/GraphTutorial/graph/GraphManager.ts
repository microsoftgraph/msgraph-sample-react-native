// Copyright (c) Microsoft.
// Licensed under the MIT license.

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
    return await graphClient
      .api('/me')
      .select('displayName,givenName,mail,mailboxSettings,userPrincipalName')
      .get();
  }

  // <GetCalendarViewSnippet>
  static getCalendarView = async(start: string, end: string, timezone: string) => {
    // GET /me/calendarview
    return await graphClient.api('/me/calendarview')
      .header('Prefer', `outlook.timezone="${timezone}"`)
      .query({ startDateTime: start, endDateTime: end})
      // $select='subject,organizer,start,end'
      // Only return these fields in results
      .select('subject,organizer,start,end')
      // $orderby=createdDateTime DESC
      // Sort results by when they were created, newest first
      .orderby('start/dateTime')
      .top(50)
      .get();
  }
  // </GetCalendarViewSnippet>

  // <CreateEventSnippet>
  static createEvent = async(newEvent: any) => {
    // POST /me/events
    await graphClient.api('/me/events')
      .post(newEvent);
  }
  // </CreateEventSnippet>
}
