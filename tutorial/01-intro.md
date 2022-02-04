<!-- markdownlint-disable MD002 MD041 -->

This tutorial teaches you how to build an React Native app that uses the Microsoft Graph API to retrieve calendar information for a user.

> [!TIP]
> If you prefer to just download the completed tutorial, you can download or clone the [GitHub repository](https://github.com/microsoftgraph/msgraph-training-react-native).

## Prerequisites

Before you start this tutorial, you should have the following installed on your development machine.

- At least one of the following:
  - [Android Studio](https://developer.android.com/studio/) **and** [Java Development Kit](https://jdk.java.net) (required to run the sample on Android)
  - [Xcode](https://developer.apple.com/xcode/) (required to run the sample on iOS)
- [Node.js](https://nodejs.org)

You should also have either a personal Microsoft account with a mailbox on Outlook.com, or a Microsoft work or school account. If you don't have a Microsoft account, there are a couple of options to get a free account:

- You can [sign up for a new personal Microsoft account](https://signup.live.com/signup?wa=wsignin1.0&rpsnv=12&ct=1454618383&rver=6.4.6456.0&wp=MBI_SSL_SHARED&wreply=https://mail.live.com/default.aspx&id=64855&cbcxt=mai&bk=1454618383&uiflavor=web&uaid=b213a65b4fdc484382b6622b3ecaa547&mkt=E-US&lc=1033&lic=1).
- You can [sign up for the Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) to get a free Microsoft 365 subscription.

> [!NOTE]
> This tutorial was written using the React Native CLI, which has specific prerequisites depending on your operating system and target platforms. See [React Native Getting Started](https://reactnative.dev/docs/environment-setup) for instructions on configuring your development machine. The versions used for this tutorial are listed below. The steps in this guide may work with other versions, but that has not been tested.
>
> - Android Studio version 4.1 with the Android 9.0 SDK
> - Java Development Kit version 12.0.2
> - Xcode version 12.5.1
> - Node.js version 14.15.0

## Feedback

Please provide any feedback on this tutorial in the [GitHub repository](https://github.com/microsoftgraph/msgraph-training-react-native).
