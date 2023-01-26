---
page_type: sample
description: This sample demonstrates how to use the Microsoft Graph JavaScript SDK to access data in Office 365 from React Native apps.
products:
- ms-graph
- microsoft-graph-calendar-api
- office-exchange-online
languages:
- typescript
---

# Microsoft Graph sample React Native app

This sample demonstrates how to use the Microsoft Graph JavaScript SDK to access data in Office 365 from React Native mobile apps.

> **NOTE:** This sample was originally built from a tutorial published on the [Microsoft Graph tutorials](https://docs.microsoft.com/graph/tutorials) page. That tutorial has been removed.

## Prerequisites

To run the completed project in this folder, you need the following:

- A configured development environment for React Native using the React Native CLI. For instructions on configuring your environment, see [Setting up the development environment](https://reactnative.dev/docs/environment-setup).
- Either a personal Microsoft account with a mailbox on Outlook.com, or a Microsoft work or school account.

If you don't have a Microsoft account, there are a couple of options to get a free account:

- You can [sign up for a new personal Microsoft account](https://signup.live.com/signup?wa=wsignin1.0&rpsnv=12&ct=1454618383&rver=6.4.6456.0&wp=MBI_SSL_SHARED&wreply=https://mail.live.com/default.aspx&id=64855&cbcxt=mai&bk=1454618383&uiflavor=web&uaid=b213a65b4fdc484382b6622b3ecaa547&mkt=E-US&lc=1033&lic=1).
- You can [sign up for the Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) to get a free Microsoft 365 subscription.

## Register an application with the Azure Active Directory admin center

1. Open a browser and navigate to the [Azure Active Directory admin center](https://aad.portal.azure.com) and login using a **personal account** (aka: Microsoft Account) or **Work or School Account**.

1. Select **Azure Active Directory** in the left-hand navigation, then select **App registrations** under **Manage**.

1. Select **New registration**. On the **Register an application** page, set the values as follows.

    - Set **Name** to `React Native Graph Sample`.
    - Set **Supported account types** to **Accounts in any organizational directory and personal Microsoft accounts**.
    - Under **Redirect URI**, change the dropdown to **Public client (mobile & desktop)**, and set the value to `graph-sample://react-native-auth/`.

1. Select **Register**. On the **React Native Graph Tutorial** page, copy the value of the **Application (client) ID** and save it, you will need it in the next step.

## Configure the sample

1. Rename the **GraphRNSample/auth/AuthConfig.example.ts** file to **AuthConfig.ts**.
1. Edit the **AuthConfig.ts** file and make the following changes.
    1. Replace `YOUR_APP_ID_HERE` with the **Application (client) ID** you got from the App Registration Portal.

1. In your command-line interface (CLI), navigate to the **GraphRNSample** directory and run the following commands to install requirements.

    ```bash
    npm install
    npx pod-install ios
    ```

## Run the sample

1. Run the following command to start the sample.

```bash
npm start
```

1. In another instance of your CLI also in the **GraphRNSample** directory, run one of the following commands:

    - To run on an iOS Simulator: `npm run ios`
    - To run on an Android virtual device: `npm run android` (start an Android virtual device from Android Studio first)

## Code of conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
