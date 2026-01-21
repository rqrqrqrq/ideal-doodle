# CLAUDE.md - AI Assistant Guide for ideal-doodle

This document provides comprehensive guidance for AI assistants (like Claude) working with the ideal-doodle repository.

## Repository Overview

**Repository Name:** ideal-doodle
**Current State:** Initial setup - minimal codebase
**Primary Branch:** `main` (or default branch)
**Development Branch Pattern:** `claude/claude-md-*` for AI-assisted development

### Current Structure

```
ideal-doodle/
├── README.md          # Project title and description
├── CLAUDE.md          # This file - AI assistant guide
└── .git/              # Git repository metadata
```

**Status:** This is a fresh repository at the initialization stage. The project structure, technology stack, and architecture are yet to be defined.

## Repository State & History

### Git Configuration
- **Repository URL:** Local development environment
- **Current Branch:** `claude/claude-md-mko4q0ub331bnb96-2o5CI`
- **Initial Commit:** "Create README.md" (583feeb)
- **Created:** January 21, 2026

### Current Files
- **README.md** - Contains only the project title, needs expansion
- **CLAUDE.md** - This guide for AI assistants

## Development Guidelines for AI Assistants

### 1. Git Workflow

#### Branch Management
- **Feature Branches:** Always develop on branches starting with `claude/` prefix
- **Branch Naming:** Follow pattern `claude/claude-md-<session-id>`
- **Never** push directly to main/master without explicit permission
- Create branches locally if they don't exist yet

#### Commit Practices
- Write clear, descriptive commit messages
- Focus on "why" rather than "what" in commit messages
- Follow conventional commit format when appropriate (feat:, fix:, docs:, etc.)
- Never commit files with secrets (.env, credentials, etc.)

#### Push Operations
```bash
# Always use -u flag for first push
git push -u origin <branch-name>

# Branch must start with 'claude/' and match session ID
# Retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s) on network errors
```

#### Pull/Fetch Operations
```bash
# Prefer fetching specific branches
git fetch origin <branch-name>

# For pulls
git pull origin <branch-name>

# Retry up to 4 times with exponential backoff on network failures
```

### 2. Code Quality Standards

#### General Principles
- **Avoid Over-Engineering:** Only make changes that are directly requested or clearly necessary
- **Keep It Simple:** Don't add features, refactorings, or "improvements" beyond what was asked
- **Minimal Abstractions:** Don't create helpers or utilities for one-time operations
- **No Premature Optimization:** Don't design for hypothetical future requirements

#### Security
- Always check for security vulnerabilities:
  - Command injection
  - XSS (Cross-Site Scripting)
  - SQL injection
  - OWASP Top 10 vulnerabilities
- If insecure code is written, fix it immediately
- Never commit credentials or secrets

#### Code Changes
- **Always read files before modifying them**
- Understand existing code before suggesting modifications
- Only add error handling for realistic scenarios
- Trust internal code and framework guarantees
- Validate only at system boundaries (user input, external APIs)

#### Documentation
- Don't add docstrings or comments to unchanged code
- Only add comments where logic isn't self-evident
- Update documentation when making functional changes

### 3. Tool Usage Guidelines

#### File Operations
- **Read:** Use `Read` tool, not `cat/head/tail` bash commands
- **Edit:** Use `Edit` tool, not `sed/awk` bash commands
- **Write:** Use `Write` tool for new files, not `echo >` or `cat <<EOF`
- **Search Files:** Use `Glob` tool, not `find` or `ls` commands
- **Search Content:** Use `Grep` tool, not `grep` or `rg` bash commands

#### Task Management
- Use `TodoWrite` tool frequently for planning and tracking
- Break complex tasks into smaller, manageable steps
- Mark tasks as `in_progress` before starting work
- Mark tasks as `completed` immediately after finishing
- Only one task should be `in_progress` at a time

#### Exploration
- For codebase exploration, use `Task` tool with `subagent_type=Explore`
- Don't run multiple grep/glob commands manually for open-ended searches
- Let specialized agents handle complex research tasks

#### Parallel Operations
- Run independent operations in parallel using multiple tool calls in one message
- Run dependent operations sequentially (e.g., mkdir before cp, Write before Bash for git)
- Use `&&` to chain dependent bash commands

### 4. Communication Style

#### Tone
- Short and concise responses
- Professional and objective
- No emojis unless explicitly requested
- Use GitHub-flavored markdown for formatting

#### Code References
- Reference specific code locations using pattern: `file_path:line_number`
- Example: "Error handling occurs in src/services/process.ts:712"

#### Planning
- Provide concrete implementation steps without time estimates
- Never suggest timelines like "this will take 2-3 weeks"
- Focus on what needs to be done, not when
- Break work into actionable steps

### 5. Project-Specific Conventions

**Note:** This repository is in its initial stage. As the project evolves, document conventions here:

#### To Be Defined
- [ ] Programming language(s) and version(s)
- [ ] Framework(s) and key dependencies
- [ ] Build system and commands
- [ ] Test framework and testing approach
- [ ] Linting and formatting tools
- [ ] Code style guidelines
- [ ] Directory structure conventions
- [ ] Naming conventions
- [ ] Module/package organization
- [ ] Configuration management approach

## Common Tasks & Commands

### Initial Project Setup
When setting up the project for the first time, consider:

1. **Choose Technology Stack**
   - Define primary programming language
   - Select frameworks and libraries
   - Document version requirements

2. **Create Project Structure**
   - Establish directory layout
   - Create configuration files
   - Set up dependency management

3. **Initialize Development Tools**
   - Configure linters and formatters
   - Set up testing framework
   - Create build scripts

4. **Documentation**
   - Expand README.md with:
     - Project description and purpose
     - Installation instructions
     - Usage examples
     - Contributing guidelines
   - Create additional docs as needed

### Working with Git

```bash
# Check current status
git status

# View recent commits
git log --oneline -10

# View changes
git diff

# Create and switch to feature branch
git checkout -b claude/<session-id>

# Stage and commit changes
git add <files>
git commit -m "descriptive message"

# Push to remote
git push -u origin claude/<session-id>
```

### Creating Pull Requests

When creating PRs:
1. Analyze all commits included (not just the latest)
2. Draft a comprehensive summary with:
   - Summary section (1-3 bullet points)
   - Test plan (bulleted markdown checklist)
3. Use heredoc format for PR body
4. Return the PR URL when complete

Example:
```bash
gh pr create --title "Title" --body "$(cat <<'EOF'
## Summary
- Change description

## Test plan
- [ ] Test item 1
- [ ] Test item 2
EOF
)"
```

## Future Development Roadmap

As this repository grows, update this section with:

### Architecture Decisions
- Document key architectural choices
- Explain patterns and practices adopted
- Note any technical debt or constraints

### Module Documentation
- List key modules/components and their purposes
- Document inter-module dependencies
- Explain data flow and control flow

### Testing Strategy
- Unit testing approach
- Integration testing approach
- E2E testing approach
- Test coverage expectations

### Deployment & Release
- Deployment process
- Release versioning strategy
- Environment configurations

## Questions & Support

- For git issues: Check git status and logs
- For build issues: Review configuration files
- For unclear requirements: Use `AskUserQuestion` tool
- For complex exploration: Use `Task` tool with appropriate agent type

## Maintenance Notes

**Last Updated:** January 21, 2026
**Last Reviewed By:** Claude (Initial creation)
**Next Review:** After major architectural decisions or significant codebase changes

---

**For AI Assistants:** This document should be consulted at the beginning of each session to understand the current state and conventions of the repository. Update this document as the project evolves and new patterns emerge.
