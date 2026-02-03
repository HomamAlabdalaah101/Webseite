#!/bin/bash

# Automated deployment script for Homam Portfolio
# This script handles building, testing, and deploying the application

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="homam-portfolio"
DEPLOY_ENV=${1:-"production"}
VERCEL_ORG_ID=${VERCEL_ORG_ID:-""}
VERCEL_PROJECT_ID=${VERCEL_PROJECT_ID:-""}

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_dependencies() {
    log_info "Checking dependencies..."

    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi

    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed. Please install npm first."
        exit 1
    fi

    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        log_warning "Vercel CLI is not installed. Installing..."
        npm install -g vercel
    fi

    log_success "Dependencies check passed"
}

install_dependencies() {
    log_info "Installing dependencies..."

    if [ ! -d "node_modules" ]; then
        npm install
        log_success "Dependencies installed"
    else
        log_info "Dependencies already installed"
    fi
}

run_tests() {
    log_info "Running tests..."

    if [ -f "package.json" ] && grep -q '"test"' package.json; then
        npm run test:ci
        log_success "Tests passed"
    else
        log_warning "No test script found in package.json"
    fi
}

run_linting() {
    log_info "Running linting..."

    if [ -f "package.json" ] && grep -q '"lint"' package.json; then
        npm run lint:ci
        log_success "Linting passed"
    else
        log_warning "No lint script found in package.json"
    fi
}

run_type_check() {
    log_info "Running TypeScript type check..."

    if [ -f "package.json" ] && grep -q '"type-check"' package.json; then
        npm run type-check:ci
        log_success "Type check passed"
    else
        log_warning "No type-check script found in package.json"
    fi
}

build_application() {
    log_info "Building application for $DEPLOY_ENV..."

    if [ "$DEPLOY_ENV" = "production" ]; then
        npm run build
    else
        npm run build:analyze
    fi

    if [ $? -eq 0 ]; then
        log_success "Build completed successfully"
    else
        log_error "Build failed"
        exit 1
    fi
}

check_build_size() {
    log_info "Checking build size..."

    if [ -d ".next" ]; then
        BUILD_SIZE=$(du -sh .next | cut -f1)
        log_info "Build size: $BUILD_SIZE"
    fi

    if [ -d "out" ]; then
        STATIC_SIZE=$(du -sh out | cut -f1)
        log_info "Static export size: $STATIC_SIZE"
    fi
}

deploy_to_vercel() {
    log_info "Deploying to Vercel..."

    if [ -z "$VERCEL_ORG_ID" ] || [ -z "$VERCEL_PROJECT_ID" ]; then
        log_warning "Vercel Org ID or Project ID not set. Using interactive deployment."
        vercel --prod
    else
        vercel --prod --yes
    fi

    if [ $? -eq 0 ]; then
        log_success "Deployment to Vercel completed successfully"
    else
        log_error "Deployment to Vercel failed"
        exit 1
    fi
}

run_security_audit() {
    log_info "Running security audit..."

    if [ -f "package.json" ]; then
        npm audit --audit-level moderate
        if [ $? -ne 0 ]; then
            log_warning "Security vulnerabilities found. Please review and fix them."
        else
            log_success "Security audit passed"
        fi
    fi
}

cleanup() {
    log_info "Cleaning up..."

    # Remove temporary files
    rm -rf .next/cache
    rm -rf out/cache

    log_success "Cleanup completed"
}

generate_deployment_report() {
    log_info "Generating deployment report..."

    REPORT_FILE="deployment-report-$(date +%Y%m%d-%H%M%S).txt"

    {
        echo "Deployment Report"
        echo "================="
        echo "Date: $(date)"
        echo "Environment: $DEPLOY_ENV"
        echo "Project: $PROJECT_NAME"
        echo ""
        echo "Build Information:"
        if [ -d ".next" ]; then
            echo "Build Size: $(du -sh .next | cut -f1)"
        fi
        echo ""
        echo "Node Version: $(node --version)"
        echo "NPM Version: $(npm --version)"
        echo ""
        echo "Deployment Status: SUCCESS"
    } > "$REPORT_FILE"

    log_success "Deployment report saved to $REPORT_FILE"
}

# Main deployment process
main() {
    log_info "Starting deployment process for $PROJECT_NAME"
    log_info "Environment: $DEPLOY_ENV"

    check_dependencies
    install_dependencies
    run_security_audit
    run_linting
    run_type_check
    run_tests
    build_application
    check_build_size
    deploy_to_vercel
    cleanup
    generate_deployment_report

    log_success "🎉 Deployment completed successfully!"
    log_info "Your application should be live at your Vercel domain"
}

# Handle command line arguments
case "$1" in
    --help|-h)
        echo "Usage: $0 [environment]"
        echo ""
        echo "Environments:"
        echo "  production    Deploy to production (default)"
        echo "  preview       Deploy to preview"
        echo ""
        echo "Environment variables:"
        echo "  VERCEL_ORG_ID     Vercel organization ID"
        echo "  VERCEL_PROJECT_ID Vercel project ID"
        echo ""
        echo "Examples:"
        echo "  $0 production"
        echo "  $0 preview"
        exit 0
        ;;
    *)
        main "$@"
        ;;
esac
