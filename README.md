---
page_type: sample
description: This sample demonstrates how to use the Microsoft Graph JavaScript SDK to access data in Microsoft 365 from React Native apps using Microsoft Entra ID authentication.
products:
- ms-graph
- microsoft-365
- entra-id
languages:
- typescript
- javascript
---

# Microsoft Graph React Native Sample with Entra ID

[![React Native CI](https://github.com/microsoftgraph/msgraph-training-react-native/actions/workflows/react-native.yml/badge.svg)](https://github.com/microsoftgraph/msgraph-training-react-native/actions/workflows/react-native.yml) ![License.](https://img.shields.io/badge/license-MIT-green.svg)

This sample demonstrates how to use the Microsoft Graph JavaScript SDK to access data in Microsoft 365 from React Native mobile apps using Microsoft Entra ID for authentication and authorization.

> **NOTE:** This sample was originally built from a tutorial published on the Microsoft Graph tutorials page. That tutorial has been removed.

## Features

This sample app demonstrates the following capabilities:

- **Microsoft Entra ID Authentication**: Secure user sign-in using OAuth 2.0 with PKCE
- **Microsoft Graph Integration**: Access Microsoft 365 data and services
- **Cross-Platform Support**: Runs on both iOS and Android devices
- **Modern React Native**: Built with latest React Native practices and TypeScript
- **Calendar Management**: View and create calendar events
- **User Profile**: Display user information from Microsoft Graph

## Prerequisites

To run this sample, you need:

- **Development Environment**: A configured React Native development environment using React Native CLI
  - For setup instructions, see [React Native - Setting up the development environment](https://reactnative.dev/docs/environment-setup)
  - Choose "React Native CLI Quickstart" (not Expo CLI)
- **Microsoft Account**: Either a personal Microsoft account with a mailbox on Outlook.com, or a Microsoft work or school account
- **Node.js**: Version 16 or higher
- **Mobile Development Tools**:
  - For iOS: Xcode (macOS only)
  - For Android: Android Studio with Android SDK

## Getting a Microsoft Account

If you don't have a Microsoft account, here are your options:

- **Personal Account**: [Sign up for a new personal Microsoft account](https://signup.live.com/signup?wa=wsignin1.0&rpsnv=12&ct=1454618383&rver=6.4.6456.0&wp=MBI_SSL_SHARED&wreply=https://mail.live.com/default.aspx&id=64855&cbcxt=mai&bk=1454618383&uiflavor=web&uaid=b213a65b4fdc484382b6622b3ecaa547&mkt=E-US&lc=1033&lic=1)
- **Developer Account**: [Sign up for the Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) to get a free Microsoft 365 subscription with sample data

## Register an Application with Microsoft Entra ID

1. **Navigate to the Microsoft Entra admin center**
   - Open a browser and go to the [Microsoft Entra admin center](https://entra.microsoft.com)
   - Sign in using a **personal account** (Microsoft Account) or **Work or School Account**

2. **Access App Registrations**
   - In the left navigation, select **Identity** > **Applications** > **App registrations**
   - Alternatively, you can use the [Azure portal](https://portal.azure.com) and navigate to **Microsoft Entra ID** > **App registrations**

3. **Create a New Registration**
   - Select **New registration**
   - Configure the application with these settings:
     - **Name**: `React Native Graph Sample`
     - **Supported account types**: `Accounts in any organizational directory (Any Microsoft Entra ID tenant - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)`
     - **Redirect URI**: 
       - Platform: `Public client (mobile & desktop)`
       - URI: `graph-sample://react-native-auth/`

4. **Complete Registration**
   - Select **Register**
   - On the app's overview page, copy the **Application (client) ID** and save it securely - you'll need this in the configuration step below

5. **Configure API Permissions (Recommended)**
   - Navigate to **API permissions** in the left menu
   - You'll see that `User.Read` permission is already configured by default
   - To add the additional permissions needed for this sample:
     1. Click **Add a permission**
     2. Select **Microsoft Graph**
     3. Choose **Delegated permissions**
     4. Search for and select the following permissions:
        - `Calendars.ReadWrite` (to read and write calendar events)
        - `MailboxSettings.Read` (to read mailbox settings)
     5. Click **Add permissions**
   - **Note**: The app will request these permissions dynamically when needed, but pre-configuring them here provides better visibility and can help with admin consent scenarios

## Configure the Sample

1. **Set up Authentication Configuration**
   - In your file explorer or IDE, navigate to the root project folder you downloaded/cloned (`msgraph-sample-react-native`)
   - Go to the `GraphRNSample/auth/` directory within the project
   - **Rename** the file `AuthConfig.example.ts` to `AuthConfig.ts` (this removes the example file and creates your config file):
     ```bash
     # Bash/macOS/Linux:
     mv GraphRNSample/auth/AuthConfig.example.ts GraphRNSample/auth/AuthConfig.ts
     # Windows CMD:
     ren GraphRNSample\auth\AuthConfig.example.ts AuthConfig.ts
     # Windows PowerShell:
     Rename-Item GraphRNSample\auth\AuthConfig.example.ts AuthConfig.ts
     ```
   - Open the newly renamed `AuthConfig.ts` in your code editor and replace `YOUR_APP_ID_HERE` with your **Application (client) ID** from the app registration step above
   - **⚠️ CRITICAL**: Do NOT copy the example file and leave the original - if both `AuthConfig.ts` and `AuthConfig.example.ts` exist, the TypeScript compiler will include both files in the build, causing the app to use the placeholder "YOUR_APP_ID_HERE" instead of your actual App ID

2. **Install Dependencies**
   - Open a terminal/command prompt
   - Navigate to the `GraphRNSample` directory within your project root:
     ```bash
     # Bash/macOS/Linux:
     cd ./GraphRNSample
     
     # Windows CMD:
     cd .\GraphRNSample
     
     # Windows PowerShell:
     cd .\GraphRNSample
     ```
     > **Note**: This assumes you're starting from the root project directory (`msgraph-sample-react-native`)
   - Install Node.js dependencies:
     ```bash
     npm install
     ```
   - For iOS development, install iOS dependencies:
     ```bash
     npx pod-install ios
     ```

## Run the Sample

> **Important**: All commands below should be run from the `GraphRNSample` directory. If you followed the setup steps above, you should already be in this directory after running `cd ./GraphRNSample`.

### Using Metro Bundler (Recommended)

1. **Start the Metro bundler**:
   ```bash
   npm start
   ```

2. **Use the interactive menu** to launch your app:
   
   Once Metro starts, you'll see an interactive menu with these options:
   
   ```
   r - reload the app
   d - open developer menu
   i - run on iOS
   a - run on Android
   ```
   
   - **Press `i`** - Run on iOS simulator (macOS only)
   - **Press `a`** - Run on Android emulator
   - **Press `r`** - Reload the app if it's already running
   - **Press `d`** - Open the developer menu in the running app

   > **Note**: The Metro CLI will automatically start the appropriate emulator/simulator if one isn't already running. The first build may take several minutes as React Native compiles the app and installs it on your device.

### Alternative: Direct Commands

If you prefer using direct commands instead of the interactive menu:

- **iOS Simulator**: 
  ```bash
  npm run ios
  ```
- **Android Emulator**: 
  ```bash
  npm run android
  ```
- **Specific iOS Simulator**: 
  ```bash
  npx react-native run-ios --simulator="iPhone 15"
  ```

## Troubleshooting

### Common Issues

1. **"YOUR_APP_ID_HERE" not found error**
   - This error occurs when the app is still using cached or placeholder values
   - **First, verify your configuration**:
     - Ensure you've renamed `AuthConfig.example.ts` to `AuthConfig.ts`
     - Confirm you've replaced `YOUR_APP_ID_HERE` with your actual App ID in `AuthConfig.ts`
   
   - **⚠️ CRITICAL**: **Ensure only `AuthConfig.ts` exists (not both files)**:
     ```bash
     # Check that only AuthConfig.ts exists in the auth directory
     # If you see both AuthConfig.ts AND AuthConfig.example.ts, delete the example:
     # Bash/macOS/Linux:
     rm GraphRNSample/auth/AuthConfig.example.ts
     # Windows CMD:
     del GraphRNSample\auth\AuthConfig.example.ts
     # Windows PowerShell:
     Remove-Item GraphRNSample\auth\AuthConfig.example.ts
     ```
     **Why this matters**: If you copied `AuthConfig.example.ts` to create `AuthConfig.ts` instead of renaming it, both files will exist. The TypeScript compiler will include both files in the build, causing the app to use the placeholder "YOUR_APP_ID_HERE" from the example file instead of your actual App ID from `AuthConfig.ts`. This is the most common cause of persistent authentication errors even when `AuthConfig.ts` is correctly configured.
   
   - **Try these troubleshooting steps**:
     ```bash
     # 1. Clear Metro cache:
     npx react-native start --reset-cache
     
     # 2. If that doesn't work, stop Metro (Ctrl+C) and try a complete clean:
     npx react-native clean
     
     # 3. Remove node_modules and reinstall:
     # Bash/macOS/Linux:
     rm -rf node_modules
     # Windows CMD:
     rmdir /s node_modules
     # Windows PowerShell:
     Remove-Item -Recurse -Force node_modules
     
     npm install
     
     # 4. For iOS, reinstall pods:
     npx pod-install ios
     
     # 5. For Android, clean gradle:
     # Bash/macOS/Linux:
     cd android && ./gradlew clean && cd ..
     # Windows CMD:
     cd android && gradlew.bat clean && cd ..
     # Windows PowerShell:
     cd android; .\gradlew.bat clean; cd ..
     
     # 6. Start Metro fresh:
     npm start
     ```
   - **Alternative approach**: Try deleting the Metro cache directory manually:
     ```bash
     # Windows CMD:
     rmdir /s "%LOCALAPPDATA%\Temp\metro-*"
     
     # Windows PowerShell:
     Remove-Item -Recurse -Force "$env:LOCALAPPDATA\Temp\metro-*"
     
     # macOS/Linux/Bash:
     rm -rf $TMPDIR/metro-*
     ```
   
   - **Still getting the error?** Double-check these details:
     - Open `auth/AuthConfig.ts` and verify your App ID is correctly formatted
     - Ensure no extra characters, spaces, or quotes around your App ID
     - Check that the file doesn't have any import errors or syntax issues
     - Try restarting your code editor/IDE to refresh its cache

2. **Metro bundler port conflict**
   - If port 8081 is in use, start Metro on a different port:
     ```bash
     npm start -- --port 8082
     ```

3. **iOS build errors**
   - Clean build folder: `npx react-native clean`
   - Reinstall pods: 
     ```bash
     # Bash/macOS/Linux:
     cd ios && pod install && cd ..
     # Windows CMD:
     cd ios && pod install && cd ..
     # Windows PowerShell:
     cd ios; pod install; cd ..
     ```
   - Make sure you're running these commands from the `GraphRNSample` directory

4. **Android build errors**
   - Clean gradle cache: 
     ```bash
     # Bash/macOS/Linux:
     cd android && ./gradlew clean && cd ..
     # Windows CMD:
     cd android && gradlew.bat clean && cd ..
     # Windows PowerShell:
     cd android; .\gradlew.bat clean; cd ..
     ```
   - Ensure Android SDK and build tools are installed
   - Make sure you're running these commands from the `GraphRNSample` directory

   > **Note**: Build warnings about deprecated APIs or CMake versions are normal and don't prevent the app from running. Look for "BUILD SUCCESSFUL" in the output - that indicates a successful build.

5. **Authentication issues**
   - Verify your App ID is correctly configured in `AuthConfig.ts`
   - Ensure the redirect URI matches exactly: `graph-sample://react-native-auth/`

6. **"Possible Unhandled Promise Rejection" errors**
   - This usually indicates an async operation failed without proper error handling
   - **To get more details**:
     - Check the Metro console (terminal where you ran `npm start`) for full error details
     - In the emulator, press `Ctrl+M` (Android) or `Cmd+D` (iOS) and select "Debug"
     - Look at the browser console for detailed stack traces
   - **Common causes**:
     - Authentication failures due to incorrect App ID configuration
     - Network connectivity issues preventing Microsoft Graph API calls
     - Invalid redirect URI configuration
     - Missing internet connection in emulator
   - **Solutions**:
     - Verify your App ID is correct in `auth/AuthConfig.ts`
     - Check that your emulator has internet access
     - Ensure the redirect URI in Entra ID matches `graph-sample://react-native-auth/`
     - Try authentication on a different network to rule out network issues

## Project Structure

```
msgraph-sample-react-native/          # Root project directory
├── README.md                         # This file
├── GraphRNSample/                    # React Native app directory
│   ├── auth/                         # Authentication configuration and management
│   │   ├── AuthConfig.ts            # App registration settings (you create this)
│   │   └── AuthManager.ts           # Authentication logic
│   ├── graph/                       # Microsoft Graph integration
│   │   ├── GraphAuthProvider.ts
│   │   └── GraphManager.ts
│   ├── screens/                     # App screens
│   │   ├── SignInScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── CalendarScreen.tsx
│   │   └── NewEventScreen.tsx
│   ├── menus/                       # Navigation components
│   ├── images/                      # Static assets
│   ├── package.json                 # Node.js dependencies
│   └── ios/, android/               # Platform-specific code
└── README.md, LICENSE, etc.         # Project documentation
```

## Key Dependencies

- **@microsoft/microsoft-graph-client**: Microsoft Graph SDK for JavaScript
- **react-native-app-auth**: OAuth 2.0 and OpenID Connect client for React Native
- **@react-navigation/**: Navigation library for React Native
- **date-fns**: Modern JavaScript date utility library

## Learn More

- [Microsoft Graph documentation](https://docs.microsoft.com/graph/)
- [Microsoft Entra ID documentation](https://docs.microsoft.com/entra/)
- [React Native documentation](https://reactnative.dev/)
- [Microsoft Graph JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript)

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CODE_OF_CONDUCT.md) for details.

## Security

If you discover a security vulnerability, please follow our [Security Policy](SECURITY.md) for reporting it.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Code of conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
