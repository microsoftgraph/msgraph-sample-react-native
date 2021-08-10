<!-- markdownlint-disable MD002 MD041 -->

In this exercise you will extend the application from the previous exercise to support authentication with Azure AD. This is required to obtain the necessary OAuth access token to call the Microsoft Graph. To do this, you will integrate the [react-native-app-auth](https://github.com/FormidableLabs/react-native-app-auth) library into the application.

1. Create a new directory in the **GraphTutorial** directory named **auth**.
1. Create a new file in the **GraphTutorial/auth** directory named **AuthConfig.ts**. Add the following code to the file.

    :::code language="typescript" source="../demo/GraphTutorial/auth/AuthConfig.example.ts":::

    Replace `YOUR_APP_ID_HERE` with the app ID from your app registration.

> [!IMPORTANT]
> If you're using source control such as git, now would be a good time to exclude the **AuthConfig.ts** file from source control to avoid inadvertently leaking your app ID.

## Implement sign-in

In this section you will create an authentication helper class, and update the app to sign in and sign out.

1. Create a new file in the **GraphTutorial/auth** directory named **AuthManager.ts**. Add the following code to the file.

    :::code language="typescript" source="../demo/GraphTutorial/auth/AuthManager.ts" id="AuthManagerSnippet":::

1. Open the **GraphTutorial/App.tsx** file and add the following `import` statement to the top of the file.

    ```typescript
    import {AuthManager} from './auth/AuthManager';
    ```

1. Replace the existing `authContext` declaration with the following.

    :::code language="typescript" source="../demo/GraphTutorial/App.tsx" id="AuthContextSnippet" highlight="4-6,9":::

1. Open the **GraphTutorial/menus/DrawerMenu.tsx** file and add the following `import` statement to the top of the file.

    ```typescript
    import {AuthManager} from '../auth/AuthManager';
    ```

1. Add the following code to the `componentDidMount` function.

    ```typescript
    try {
      const accessToken = await AuthManager.getAccessTokenAsync();

      // TEMPORARY
      this.setState({userFirstName: accessToken, userLoading: false});
    } catch (error) {
      Alert.alert(
        'Error getting token',
        JSON.stringify(error),
        [
          {
            text: 'OK'
          }
        ],
        { cancelable: false }
      );
    }
    ```

1. Save your changes and reload the application in your emulator.

If you sign in to the app, you should see an access token displayed on the **Welcome** screen.

## Get user details

In this section you will create a custom authentication provider for the Graph client library, create a helper class to hold all of the calls to Microsoft Graph and update the `DrawerMenuContent` class to use this new class to get the logged-in user.

1. Create a new directory in the **GraphTutorial** directory named **graph**.
1. Create a new file in the **GraphTutorial/graph** directory named **GraphAuthProvider.ts**. Add the following code to the file.

    :::code language="typescript" source="../demo/GraphTutorial/graph/GraphAuthProvider.ts" id="AuthProviderSnippet":::

1. Create a new file in the **GraphTutorial/graph** directory named **GraphManager.ts**. Add the following code to the file.

    ```typescript
    import {Client} from '@microsoft/microsoft-graph-client';
    import {GraphAuthProvider} from './GraphAuthProvider';

    // Set the authProvider to an instance
    // of GraphAuthProvider
    const clientOptions = {
      authProvider: new GraphAuthProvider(),
    };

    // Initialize the client
    const graphClient = Client.initWithMiddleware(clientOptions);

    export class GraphManager {
      static getUserAsync = async () => {
        // GET /me
        return await graphClient
          .api('/me')
          .select('displayName,givenName,mail,mailboxSettings,userPrincipalName')
          .get();
      };
    }
    ```

1. Open the **GraphTutorial/views/DrawerMenu.tsx** file and add the following `import` statements to the top of the file.

    ```typescript
    import {GraphManager} from '../graph/GraphManager';
    import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
    ```

1. Replace the `componentDidMount` method with the following.

    :::code language="typescript" source="../demo/GraphTutorial/menus/DrawerMenu.tsx" id="ComponentDidMountSnippet":::

If you save your changes and reload the app now, after sign-in the UI is updated with the user's display name and email address.
