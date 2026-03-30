# ESAD Federated Module Template 🧩

This is a high-performance Federated Module (Mini-App) bootstrapped with **ESAD (Easy Super App Development)**.

## 🚀 Key Features
- **Cloud-Dev Sync**: Use `esad dev` to build and upload your module to the cloud for real-time previewing on any device.
- **Rspack Powered**: Blazing fast compilation and hot module replacement.
- **ESAD SDK Ready**: Seamlessly share state with the Host app via `useESADState`.

## 🛠️ development Workflow

### 1. Cloud-Sync (Recommended)
Build and push your current code to the ESAD Dev-Cloud slot:
```bash
npx esad dev
```
Then, ensure your module ID is in the Host's `devModeFor` list to see changes instantly.

### 2. Standard Build
Prepare your module for production:
```bash
npx esad build --platform android
```

### 3. Deploy
Push a versioned release to the Production track:
```bash
npx esad deploy --version 1.0.0
```

---

## ⚡ State Sharing
```javascript
import { useESADState } from '@codemoreira/esad/client';

const [user] = useESADState('user');
```

Built with ❤️ by the ESAD Ecosystem.
