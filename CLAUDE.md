# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Mintlify documentation site that creates a modern documentation website with guides and API references. The project uses `docs.json` as its main configuration file (replacing the legacy `mint.json`).

## Essential Commands

### Development Setup
```bash
# Install Mintlify CLI globally (required)
npm i -g mintlify

# Start development server (default port 3000)
mintlify dev

# Start on custom port
mintlify dev --port 3333

# Validate all reference links
mintlify broken-links

# Re-install dependencies if issues occur
mintlify install
```

**Note:** Requires Node.js version 19 or higher.

## Architecture & Structure

### Configuration
- **`docs.json`**: Main configuration file defining:
  - Site theme, colors, and branding
  - Navigation structure with tabs for "Guides" and "API Reference"
  - Footer links and social connections
  - Uses Mint theme with green primary color (#16A34A)

### Content Organization
- **`/api-reference/`**: API documentation with OpenAPI 3.1.0 spec
  - Individual endpoint examples in `/endpoint/` subdirectory
  - OpenAPI specification in `openapi.json`
- **`/essentials/`**: Core documentation guides (markdown, code, images, etc.)
- **`/snippets/`**: Reusable content snippets for consistency
- **`/images/` and `/logo/`**: Visual assets

### Key Files
- **`index.mdx`**: Homepage content
- **`quickstart.mdx`**: Getting started guide
- **`development.mdx`**: Development instructions
- All content uses MDX format with Mintlify components

## Important Notes

1. This is not a Node.js project - there's no `package.json`. It uses Mintlify CLI directly.
2. Navigation structure is defined in `docs.json` under the `tabs` property.
3. The site supports both light and dark modes with corresponding logo variants.
4. Deployment happens automatically via Mintlify's GitHub App when pushing to the default branch.
5. The API Reference section uses OpenAPI specification for automatic documentation generation.