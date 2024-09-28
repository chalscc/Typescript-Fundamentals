# Git Branch and Commit Message Rules

This repository includes custom Husky rules and a commit message script to enforce branch naming conventions and standardized commit message formatting. The goal is to ensure consistency, prevent accidental pushes to critical branches, and automatically prefix commit messages with relevant ticket IDs.

## Branching and Commit Rules

### 1. Forbidden Branches for Commits
- **master**
- **develop**
- **preproduction**

These branches are protected, and direct commits are not allowed to ensure stability in the codebase.

### 2. Allowed Branches for Commits
- **feature/**
- **epic/**
- **bugfix/**
- **hotfix/**

Commits are only allowed on branches with the prefixes above, following the specific branch naming convention: `{feature|epic|bugfix|hotfix}/TEST-{number}-foo-bar`.

### 3. Commit Message Prefix
The script automatically prefixes commit messages with the branch's ticket ID. This ensures that all commits reference the appropriate task or ticket for better traceability.

For example, if the branch is named `feature/TEST-1234-add-new-feature`, the commit message will be automatically prefixed with `[TEST-1234]`.

### 4. Branch Naming Requirements
Commits are only allowed if the branch follows the naming convention:

{feature|epic|bugfix|hotfix}/TEST-{number}-foo-bar

#### Details:
- The `TEST-{number}` pattern in the branch name will be extracted and added as `[TEST-{number}]` at the beginning of the commit message.
- If the branch name does not match this pattern, the commit will be blocked, and an error message will be shown.

## TODO
- **Restrict Merges with Preproduction:** Ensure that merges into the `preproduction` branch are restricted unless part of an authorized workflow.
- **Prevent Pushes to Master and Preproduction:** Implement protection rules to block direct pushes to the `master` and `preproduction` branches.
