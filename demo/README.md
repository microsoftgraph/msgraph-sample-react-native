# How to run the completed project

## Prerequisites

To run the completed project in this folder, you need the following:

- At least one of the following:
  - [Android Studio](https://developer.android.com/studio/) **and** [Java Development Kit](https://jdk.java.net) (required to run the sample on Android)
  - [Xcode](https://developer.apple.com/xcode/) (required to run the sample on iOS)
- [Node.js](https://nodejs.org)
- Either a personal Microsoft account with a mailbox on Outlook.com, or a Microsoft work or school account.

> **Note:** This tutorial was written using the React Native CLI, which has specific prerequisites depending on your operating system and target platforms. See [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started) for instructions on configuring your development machine. The versions used for this tutorial are listed below. The steps in this guide may work with other versions, but that has not been tested.
>
> - Android Studio version 3.6.2 with the Android 9.0 SDK
> - Java Development Kit version 12.0.2
> - Xcode version 11.4
> - Node.js version 12.16.2

If you don't have a Microsoft account, there are a couple of options to get a free account:

- You can [sign up for a new personal Microsoft account](https://signup.live.com/signup?wa=wsignin1.0&rpsnv=12&ct=1454618383&rver=6.4.6456.0&wp=MBI_SSL_SHARED&wreply=https://mail.live.com/default.aspx&id=64855&cbcxt=mai&bk=1454618383&uiflavor=web&uaid=b213a65b4fdc484382b6622b3ecaa547&mkt=E-US&lc=1033&lic=1).
- You can [sign up for the Office 365 Developer Program](https://developer.microsoft.com/office/dev-program) to get a free Office 365 subscription.

## Register an application with the Azure Active Directory admin center

1. Open a browser and navigate to the [Azure Active Directory admin center](https://aad.portal.azure.com) and login using a **personal account** (aka: Microsoft Account) or **Work or School Account**.

1. Select **Azure Active Directory** in the left-hand navigation, then select **App registrations** under **Manage**.

    ![A screenshot of the App registrations ](/tutorial/images/aad-portal-app-registrations.png)

1. Select **New registration**. On the **Register an application** page, set the values as follows.

    - Set **Name** to `React Native Graph Tutorial`.
    - Set **Supported account types** to **Accounts in any organizational directory and personal Microsoft accounts**.
    - Under **Redirect URI**, change the dropdown to **Public client (mobile & desktop)**, and set the value to `graph-tutorial://react-native-auth`.

    ![A screenshot of the Register an application page](/tutorial/images/aad-register-an-app.png)

1. Select **Register**. On the **React Native Graph Tutorial** page, copy the value of the **Application (client) ID** and save it, you will need it in the next step.

    ![A screenshot of the application ID of the new app registration](/tutorial/images/aad-application-id.png)

1. Under **Manage**, select **Authentication**. On the **Redirect URIs** page, add another redirect URI of type **Public client (mobile & desktop)**, with the URI `urn:ietf:wg:oauth:2.0:oob`. Select **Save**.

    ![A screenshot of the Redirect URIs page](/tutorial/images/aad-redirect-uris.png)

## Configure the sample

1. Rename the **GraphTutorial/auth/AuthConfig.ts.example** file to **AuthConfig.ts**.
1. Edit the **AuthConfig.ts** file and make the following changes.
    1. Replace `YOUR_APP_ID_HERE` with the **Application Id** you got from the App Registration Portal.

1. In your command-line interface (CLI), navigate to the **GraphTutorial** directory and run the following command to install requirements.

    ```Shell
    npm install
    ```

1. In your command-line interface (CLI), navigate to the **GraphTutorial/ios** directory and run the following command to install requirements.

    ```Shell
    pod install
    ```

## Run the sample

### Run on iOS Simulator

Run the following command in your CLI to start the application in an iOS Simulator.

```Shell
react-native run-ios
```

### Run on Android emulator

Launch and Android emulator instance and run the following command in your CLI to start the application in an Android emulator.

```Shell
react-native run-android
```
