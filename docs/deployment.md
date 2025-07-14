---
sidebar_position: 31
---

# Deployment Guide

Guide for deploying DesignVault to GitHub Pages using GitHub Actions.

## 🚀 GitHub Pages Deployment

DesignVault includes automated GitHub Actions workflow for deploying to GitHub Pages. Every push to the `main` branch will automatically build and deploy your site.

### Prerequisites

1. **GitHub Repository**: Push your DesignVault code to a GitHub repository
2. **GitHub Pages Enabled**: Enable GitHub Pages in your repository settings

### Setup Steps

#### 1. Update Configuration

Update the `docusaurus.config.js` file with your GitHub details:

```javascript
const config = {
  title: 'DesignVault',
  // Replace with your GitHub username/organization
  url: 'https://yourusername.github.io',
  // Replace with your repository name
  baseUrl: '/designvault/',
  
  // Replace with your GitHub username and repo name
  organizationName: 'yourusername',
  projectName: 'designvault',
  // ... rest of config
};
```

#### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to `main`

#### 3. Push to GitHub

```bash
git add .
git commit -m "Initial DesignVault setup"
git push origin main
```

The GitHub Action will automatically:
- Install dependencies
- Build the Docusaurus site
- Deploy to GitHub Pages

### 📋 Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) includes:

- **Trigger**: Pushes to `main` branch
- **Node.js Version**: 18.x
- **Build Command**: `npm run build`
- **Deploy Target**: GitHub Pages
- **Permissions**: Configured for GitHub Pages deployment

### 🔧 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `static` directory:
   ```
   static/CNAME
   ```
   
2. Add your domain to the file:
   ```
   designvault.yourdomain.com
   ```

3. Update `docusaurus.config.js`:
   ```javascript
   url: 'https://designvault.yourdomain.com',
   baseUrl: '/',
   ```

4. Configure DNS with your domain provider

### 🐛 Troubleshooting

#### Build Failures

Check the Actions tab in your GitHub repository for detailed error logs.

Common issues:
- **Node.js version**: Ensure compatibility with Node 18+
- **Dependencies**: Check for missing or incompatible packages
- **Memory**: Large sites may need increased memory allocation

#### Broken Links

The build will fail if there are broken internal links. Check:
- Markdown link syntax
- File paths are correct
- Referenced files exist

#### 404 Errors

If you get 404s after deployment:
- Verify `baseUrl` matches your repository name
- Check that `url` matches your GitHub Pages URL
- Ensure GitHub Pages is enabled and source is set to "GitHub Actions"

### 🔄 Manual Deployment

For manual deployment without GitHub Actions:

```bash
npm run build
npx gh-pages -d build
```

**Note**: This requires the `gh-pages` package and proper Git configuration.

---

Your DesignVault site will be available at:
`https://yourusername.github.io/designvault/`

Replace `yourusername` with your actual GitHub username! 