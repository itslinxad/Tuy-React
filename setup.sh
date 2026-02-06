#!/bin/bash

# ============================================================================
# Tuy Municipality Website - Development Setup Script
# ============================================================================
# This script sets up the development environment for the Tuy website project.
# It checks system requirements, installs dependencies, validates the setup,
# and starts the development server.
# ============================================================================

set -e  # Exit on error (except where explicitly handled)

# Color codes for output
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly CYAN='\033[0;36m'
readonly BOLD='\033[1m'
readonly NC='\033[0m' # No Color

# Minimum required Node.js version
readonly MIN_NODE_MAJOR=18

# ============================================================================
# Utility Functions
# ============================================================================

print_header() {
    echo -e "\n${CYAN}${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${CYAN}${BOLD}  $1${NC}"
    echo -e "${CYAN}${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_step() {
    echo -e "\n${BOLD}▶ $1${NC}"
}

# ============================================================================
# System Requirements Check
# ============================================================================

check_requirements() {
    print_header "Checking System Requirements"
    
    local all_good=true
    
    # Check Node.js
    print_step "Checking Node.js installation..."
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        echo -e "  ${YELLOW}Please install Node.js v${MIN_NODE_MAJOR}.0 or higher from: https://nodejs.org/${NC}"
        all_good=false
    else
        local node_version=$(node --version | cut -d'v' -f2)
        local node_major=$(echo "$node_version" | cut -d'.' -f1)
        print_success "Node.js found: v${node_version}"
        
        if [ "$node_major" -lt "$MIN_NODE_MAJOR" ]; then
            print_error "Node.js version is too old (minimum required: v${MIN_NODE_MAJOR}.0)"
            echo -e "  ${YELLOW}Please upgrade Node.js from: https://nodejs.org/${NC}"
            all_good=false
        else
            print_success "Node.js version meets requirements (>= v${MIN_NODE_MAJOR}.0)"
        fi
    fi
    
    # Check npm
    print_step "Checking npm installation..."
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        echo -e "  ${YELLOW}npm typically comes with Node.js. Please reinstall Node.js.${NC}"
        all_good=false
    else
        local npm_version=$(npm --version)
        print_success "npm found: v${npm_version}"
    fi
    
    if [ "$all_good" = false ]; then
        echo -e "\n${RED}${BOLD}System requirements not met. Please fix the above issues and try again.${NC}\n"
        exit 1
    fi
    
    print_success "All system requirements are met!"
}

# ============================================================================
# Existing Setup Detection
# ============================================================================

check_existing_setup() {
    print_header "Checking Existing Setup"
    
    if [ -d "node_modules" ]; then
        print_warning "Dependencies are already installed (node_modules/ exists)"
        echo -e "\nWhat would you like to do?"
        echo -e "  ${BOLD}u${NC} - Update dependencies (npm update)"
        echo -e "  ${BOLD}r${NC} - Reinstall from scratch (removes node_modules and package-lock.json)"
        echo -e "  ${BOLD}s${NC} - Skip installation and continue"
        echo -e "  ${BOLD}q${NC} - Quit\n"
        
        while true; do
            read -p "Enter your choice [u/r/s/q]: " choice
            case "$choice" in
                u|U)
                    print_step "Updating dependencies..."
                    npm update
                    print_success "Dependencies updated successfully!"
                    return 0
                    ;;
                r|R)
                    print_step "Removing existing node_modules and package-lock.json..."
                    rm -rf node_modules package-lock.json
                    print_success "Removed existing installation"
                    return 1  # Signal that we need fresh install
                    ;;
                s|S)
                    print_info "Skipping dependency installation"
                    return 0
                    ;;
                q|Q)
                    echo -e "\n${YELLOW}Setup cancelled by user.${NC}\n"
                    exit 0
                    ;;
                *)
                    print_error "Invalid choice. Please enter u, r, s, or q."
                    ;;
            esac
        done
    else
        print_info "No existing installation found. Will proceed with fresh install."
        return 1  # Signal that we need fresh install
    fi
}

# ============================================================================
# Dependency Installation
# ============================================================================

install_dependencies() {
    print_header "Installing Dependencies"
    
    print_step "Running npm install..."
    print_info "This may take a few minutes depending on your internet connection..."
    
    if npm install; then
        print_success "Dependencies installed successfully!"
        
        # Verify node_modules was created
        if [ -d "node_modules" ]; then
            local module_count=$(find node_modules -maxdepth 1 -type d | wc -l)
            print_info "Installed $((module_count - 1)) packages"
        fi
    else
        print_error "Failed to install dependencies"
        echo -e "\n${RED}${BOLD}Please check the error messages above and try again.${NC}"
        echo -e "${YELLOW}Common solutions:${NC}"
        echo -e "  • Check your internet connection"
        echo -e "  • Try running: npm cache clean --force"
        echo -e "  • Delete node_modules and package-lock.json, then try again\n"
        exit 1
    fi
}

# ============================================================================
# Environment Configuration Check
# ============================================================================

check_env_files() {
    print_header "Checking Environment Configuration"
    
    local env_ok=true
    
    # Check .env file
    print_step "Checking .env file..."
    if [ -f ".env" ]; then
        print_success ".env file found"
    else
        print_error ".env file not found"
        echo -e "  ${YELLOW}The .env file contains important API keys and configuration.${NC}"
        echo -e "  ${YELLOW}Please create a .env file with the following variables:${NC}"
        echo -e "    • VITE_FACEBOOK_PAGE_ID"
        echo -e "    • VITE_FACEBOOK_ACCESS_TOKEN"
        echo -e "    • VITE_GOOGLE_MAPS_API_KEY"
        echo -e "    • VITE_DEV_PASSWORD"
        echo -e "    • VITE_BASE_PATH"
        env_ok=false
    fi
    
    # Check .env.local file
    print_step "Checking .env.local file..."
    if [ -f ".env.local" ]; then
        print_success ".env.local file found"
    else
        print_warning ".env.local file not found"
        echo -e "  ${YELLOW}The .env.local file is used for local development overrides.${NC}"
        echo -e "  ${YELLOW}You may want to create one if you need custom local settings.${NC}"
    fi
    
    if [ "$env_ok" = false ]; then
        echo -e "\n${YELLOW}${BOLD}Warning: Missing environment files may cause runtime errors.${NC}"
        echo -e "${YELLOW}The setup will continue, but the application may not work correctly.${NC}\n"
        
        read -p "Continue anyway? [y/N]: " continue_choice
        case "$continue_choice" in
            y|Y)
                print_info "Continuing with setup..."
                ;;
            *)
                echo -e "\n${YELLOW}Setup cancelled. Please create the required environment files and try again.${NC}\n"
                exit 1
                ;;
        esac
    else
        print_success "All environment files are present!"
    fi
}

# ============================================================================
# Post-Setup Validation
# ============================================================================

run_validation() {
    print_header "Running Validation Tests"
    
    local validation_passed=true
    
    # Run lint check
    print_step "Running code quality check (npm run lint)..."
    if npm run lint; then
        print_success "Code quality check passed!"
    else
        print_error "Code quality check failed"
        echo -e "  ${YELLOW}There are linting errors in the codebase.${NC}"
        echo -e "  ${YELLOW}You may want to fix these before continuing development.${NC}"
        validation_passed=false
    fi
    
    echo ""  # Add spacing between tests
    
    # Run build test
    print_step "Running production build test (npm run build)..."
    if npm run build; then
        print_success "Production build test passed!"
        
        # Check if dist folder was created
        if [ -d "dist" ]; then
            local dist_size=$(du -sh dist 2>/dev/null | cut -f1)
            print_info "Build output size: ${dist_size}"
        fi
    else
        print_error "Production build test failed"
        echo -e "  ${YELLOW}There are build errors in the project.${NC}"
        echo -e "  ${YELLOW}You may want to fix these before continuing development.${NC}"
        validation_passed=false
    fi
    
    if [ "$validation_passed" = false ]; then
        echo -e "\n${YELLOW}${BOLD}Warning: Some validation tests failed.${NC}"
        echo -e "${YELLOW}The development server will still start, but you should address these issues.${NC}\n"
        
        read -p "Continue to development server? [Y/n]: " continue_choice
        case "$continue_choice" in
            n|N)
                echo -e "\n${YELLOW}Setup completed but development server not started.${NC}"
                echo -e "${INFO}Run 'npm run dev' when you're ready to start development.${NC}\n"
                exit 0
                ;;
            *)
                print_info "Continuing to development server..."
                ;;
        esac
    else
        print_success "All validation tests passed!"
    fi
}

# ============================================================================
# Start Development Server
# ============================================================================

start_dev_server() {
    print_header "Starting Development Server"
    
    print_success "Setup completed successfully!"
    echo -e "\n${GREEN}${BOLD} Starting development server...${NC}\n"
    
    print_info "The application will be available at: ${BOLD}http://localhost:5173${NC}"
    print_info "Press ${BOLD}Ctrl+C${NC} to stop the server\n"
    
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
    
    # Start the dev server (this will run until interrupted)
    npm run dev
}

# ============================================================================
# Main Execution Flow
# ============================================================================

main() {
    # Print welcome banner
    echo -e "\n${BOLD}${CYAN}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                                                              ║"
    echo "║       Tuy Municipality Website Development Setup            ║"
    echo "║                                                              ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    
    # Step 1: Check system requirements
    check_requirements
    
    # Step 2: Check for existing setup
    if check_existing_setup; then
        # Existing setup handled (updated or skipped)
        :
    else
        # Need fresh install
        install_dependencies
    fi
    
    # Step 3: Check environment files
    check_env_files
    
    # Step 4: Run validation tests
    run_validation
    
    # Step 5: Start development server
    start_dev_server
}

# Run main function
main
