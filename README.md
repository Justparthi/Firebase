# 🔥 Firebase Project

This repository contains a Firebase-powered application. Follow the setup instructions below to get started with development.

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project created in the [Firebase Console](https://console.firebase.google.com)

## 🚀 Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Login to Firebase:
```bash
firebase login
```

4. Initialize Firebase in your project:
```bash
firebase init
```

5. Create a `.env` file in the root directory and add your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 🛠️ Firebase Services Used

- **Authentication**: User sign-up, sign-in, and session management
- **Firestore**: NoSQL database for storing application data
- **Storage**: File storage for user uploads
- **Hosting**: Web application deployment
- **Cloud Functions**: Serverless backend functions

## 💻 Development

1. Start the development server:
```bash
npm start
```

2. Run local Firebase emulators:
```bash
firebase emulators:start
```

## 🚢 Deployment

1. Build the production version:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

To deploy only specific services:
```bash
firebase deploy --only hosting
firebase deploy --only functions
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   ├── config/
│   │   └── firebase.js
│   ├── hooks/
│   ├── pages/
│   └── services/
├── functions/
├── firebase.json
├── firestore.rules
├── storage.rules
└── .firebaserc
```

## 🔒 Security Rules

### Firestore Rules
Located in `firestore.rules`:
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Storage Rules
Located in `storage.rules`:
```
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## ⚙️ Environment Setup

### Development
- Create a `.env.development` file for development environment variables
- Use Firebase Emulator Suite for local development

### Production
- Create a `.env.production` file for production environment variables
- Ensure all security rules are properly configured
- Enable appropriate authentication methods in Firebase Console

## 🧪 Testing

1. Run unit tests:
```bash
npm test
```

2. Run integration tests with Firebase emulators:
```bash
npm run test:integration
```

## ❗ Troubleshooting

Common issues and solutions:

1. **Firebase initialization error**
   - Verify Firebase configuration in `.env` file
   - Ensure Firebase project is properly set up in Console

2. **Deployment failures**
   - Check build output for errors
   - Verify Firebase CLI is logged into correct account
   - Ensure proper permissions in Firebase project

3. **Emulator connection issues**
   - Verify ports are not in use
   - Check emulator configuration in `firebase.json`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
