# NPM Publishing Checklist

## ✅ Pre-Publishing Checklist

### 1. Update package.json
- [ ] Change `name` to `@your-username/swagger-ui-configurable`
- [ ] Set `version` to `1.0.0`
- [ ] Update `author` with your name and email
- [ ] Update `repository` URL with your GitHub repo
- [ ] Update `homepage` URL
- [ ] Add `description` and `keywords`

### 2. Create GitHub Repository
```bash
# Create a new repo on GitHub: swagger-ui-configurable
# Then push your code:

git init
git add .
git commit -m "Initial commit: Configurable Swagger UI"
git branch -M main
git remote add origin https://github.com/your-username/swagger-ui-configurable.git
git push -u origin main
```

### 3. Build the Package
```bash
# Clean previous builds
npm run clean

# Build all bundles
npm run build

# Verify dist/ folder contains:
# - swagger-ui.js
# - swagger-ui.css
# - swagger-ui-bundle.js
# - swagger-ui-standalone-preset.js
# - etc.
```

### 4. Test Locally
```bash
# Create a test package
npm pack

# This creates: your-username-swagger-ui-configurable-1.0.0.tgz

# Test in another project:
cd /path/to/test-project
npm install /path/to/swagger-ui/your-username-swagger-ui-configurable-1.0.0.tgz

# Verify it works:
# - Import the package
# - Test configuration props
# - Check all features work
```

### 5. Login to NPM
```bash
npm login
# Enter your NPM username, password, and email
```

### 6. Publish to NPM
```bash
# For scoped package (@your-username/...)
npm publish --access public

# Or for non-scoped package
npm publish
```

### 7. Verify Publication
```bash
# Check on NPM
https://www.npmjs.com/package/@your-username/swagger-ui-configurable

# Install from NPM
npm install @your-username/swagger-ui-configurable

# Test the installed package
```

## 📋 Publishing Commands (Quick Reference)

```bash
# 1. Clean and build
npm run clean && npm run build

# 2. Test locally
npm pack

# 3. Login to NPM
npm login

# 4. Publish
npm publish --access public

# 5. Verify
npm view @your-username/swagger-ui-configurable
```

## 🔄 Updating the Package

When you make changes and want to publish a new version:

```bash
# 1. Update version in package.json
# Follow semantic versioning:
# - 1.0.0 -> 1.0.1 (patch: bug fixes)
# - 1.0.0 -> 1.1.0 (minor: new features, backward compatible)
# - 1.0.0 -> 2.0.0 (major: breaking changes)

# 2. Commit changes
git add .
git commit -m "Version 1.0.1: Bug fixes"
git push

# 3. Create git tag
git tag v1.0.1
git push --tags

# 4. Build and publish
npm run clean && npm run build
npm publish
```

## 🚨 Common Issues

### Issue: "You do not have permission to publish"
**Solution:** Make sure you're logged in with `npm login` and the package name is available.

### Issue: "Package name already exists"
**Solution:** Use a scoped package name like `@your-username/swagger-ui-configurable`

### Issue: "403 Forbidden"
**Solution:** For scoped packages, use `npm publish --access public`

### Issue: "No README data"
**Solution:** Rename `README_NPM.md` to `README.md` before publishing

## 📝 Files to Include/Exclude

### Files to INCLUDE (in package.json "files" field):
```json
{
  "files": [
    "dist/",
    "src/",
    "README.md",
    "LICENSE",
    "AUTHORIZATION_CONFIG.md"
  ]
}
```

### Files to EXCLUDE (.npmignore):
```
node_modules/
dev-helpers/
test/
cypress/
.github/
*.log
.DS_Store
```

## ✅ Final Checklist Before Publishing

- [ ] All tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] README.md is complete and accurate
- [ ] package.json has correct name, version, and metadata
- [ ] GitHub repository is created and code is pushed
- [ ] Tested locally with `npm pack`
- [ ] Logged in to NPM (`npm login`)
- [ ] Ready to publish!

## 🎉 After Publishing

1. **Announce** on GitHub, Twitter, or relevant communities
2. **Add badges** to README (NPM version, downloads, etc.)
3. **Create releases** on GitHub for each version
4. **Monitor** for issues and user feedback
5. **Maintain** the package with updates and bug fixes
