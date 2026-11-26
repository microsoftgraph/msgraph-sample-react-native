# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed - 2025-06-27
#### Critical Authentication Configuration Issue

- **Fixed "YOUR_APP_ID_HERE" error caused by TypeScript compilation conflicts**
  - Added mandatory step to delete `AuthConfig.example.ts` after configuration
  - Updated setup instructions to emphasize the importance of removing the example file
  - Added comprehensive troubleshooting section explaining why both files cannot coexist
  - This resolves the most common authentication error where the app uses placeholder values despite correct `AuthConfig.ts` configuration

### Changed - 2025-06-27
#### Documentation Modernization by Tom Canter

- **Modernized README to use Microsoft Entra ID terminology**
  - Updated all references from "Azure Active Directory" to "Microsoft Entra ID"
  - Updated admin center links to use the new Entra admin center (entra.microsoft.com)
  - Modernized app registration instructions with current UI navigation paths

- **Enhanced documentation structure and developer experience**
  - Added comprehensive Features section highlighting key capabilities
  - Improved Prerequisites with specific version requirements and detailed setup guidance
  - Added "Getting a Microsoft Account" section with clear options for personal and developer accounts
  - Enhanced Registration steps with detailed, step-by-step instructions including API permissions setup

- **Improved setup and installation instructions**
  - Clarified directory navigation throughout the document
  - Updated terminal commands to use consistent directory references (`cd ./GraphRNSample`)
  - Added clear distinction between project root (`msgraph-sample-react-native`) and React Native app directory (`GraphRNSample`)
  - Enhanced dependency installation instructions with better context

- **Added comprehensive troubleshooting and project guidance**
  - Added detailed Troubleshooting section with common issues and solutions
  - Included complete Project Structure overview showing full directory hierarchy
  - Enhanced run instructions with multiple options and better error handling
  - Added Key Dependencies section explaining important packages

- **Improved technical accuracy and usability**
  - Updated product references from "Office 365" to "Microsoft 365"
  - Added security and contributing sections following modern open source practices
  - Enhanced code formatting and readability throughout
  - Added helpful tips and context notes for better developer experience
  - Maintained historical acknowledgment of tutorial origins while modernizing content

- **API Permissions configuration improvements**
  - Detailed step-by-step instructions for adding Microsoft Graph permissions
  - Clarified that User.Read permission is pre-configured by default
  - Added specific guidance for Calendars.ReadWrite and MailboxSettings.Read permissions
  - Explained benefits of pre-configuring permissions for admin consent scenarios

- **Added Windows command line examples to documentation**
  - Added Windows CMD and PowerShell alternatives for all bash commands
  - Updated file path navigation commands for Windows syntax
  - Enhanced troubleshooting commands with platform-specific examples
  - Improved cross-platform developer experience

- **Enhanced error handling and debugging guidance**
  - Added troubleshooting section for "Possible Unhandled Promise Rejection" errors
  - Provided step-by-step debugging instructions for React Native errors
  - Added guidance for using React Native debugger and Metro console
  - Included common causes and solutions for authentication-related promise rejections

### Technical Details
- All changes maintain backward compatibility with existing code
- Enhanced documentation follows current Microsoft documentation standards
- Improved clarity for developers across different experience levels
- Better integration with modern development workflows
