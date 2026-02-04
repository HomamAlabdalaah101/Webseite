# Pre-Deployment Checklist

## Environment Setup
- [ ] Copy `.env.example` to `.env.local` and fill in all required values
- [ ] Verify all environment variables are set correctly
- [ ] Test environment-specific configurations

## Code Quality
- [ ] Run `npm run lint` and fix all ESLint errors
- [ ] Run `npm run type-check` and resolve all TypeScript errors
- [ ] Run `npm run test` and ensure all tests pass
- [ ] Check code coverage meets requirements

## Performance
- [ ] Run `npm run build` successfully
- [ ] Verify bundle size is within acceptable limits
- [ ] Test Core Web Vitals scores
- [ ] Check for any performance regressions

## Security
- [ ] Run `npm run security` and address any vulnerabilities
- [ ] Verify all secrets are properly configured
- [ ] Check for exposed sensitive data
- [ ] Review authentication and authorization

## Deployment
- [ ] Update version number in `package.json`
- [ ] Ensure deployment scripts are working
- [ ] Verify deployment environment is ready
- [ ] Check domain and SSL configuration

## Post-Deployment
- [ ] Test deployed application functionality
- [ ] Verify analytics and monitoring are working
- [ ] Check error logging and reporting
- [ ] Validate all external integrations
