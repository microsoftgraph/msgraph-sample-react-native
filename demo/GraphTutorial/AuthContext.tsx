// Copyright (c) Microsoft.
// Licensed under the MIT license.

// <AuthContextSnippet>
import * as React from 'react';

type AuthContextType = {
  signIn: () => Promise<void>;
  signOut: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  signIn: async () => {},
  signOut: () => {}
});
// </AuthContextSnippet>
