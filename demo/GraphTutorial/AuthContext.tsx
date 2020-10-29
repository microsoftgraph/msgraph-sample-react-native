//  Copyright (c) Microsoft.
//  Licensed under the MIT license.

// <AuthContextSnippet>
import * as React from 'react';

type AuthContextType = {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  signIn: async (data: any) => {},
  signOut: () => {}
});
// <AuthContextSnippet>
