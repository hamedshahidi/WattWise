# Contributing to the WattWise Project

Thank you for considering contributing to WattWise! To help keep the project organized and ensure smooth collaboration, please follow these guidelines.

## Branch Naming Convention

Please follow the naming convention for your branches. Use the format:

```
<type>/<issueNumber>-<scope>-short-description
```

- **`type`**: The purpose of the branch (e.g., `feature`, `bugfix`, `docs`, `test`, `chore`).
- **`issueNumber`**: The associated issue number (e.g., `#64`).
- **`scope`**: Area of the project (e.g., `cli`, `sync`, `ui`).
- **`short-description`**: A short, kebab-case description of the work.

### Example Branch Names:
- `feature/64-add-new-ui`
- `docs/88-contributing-guide`
- `bugfix/72-fix-date-parsing`

## Commit Message Convention

All commit messages must follow this format:

```
<type>(<scope>): <short-description> (#<issueNumber>)

Closes <issueNumber>
```

- **`type`**: Same as branch type (`feature`, `bugfix`, `docs`, etc.)
- **`scope`**: Area of concern (e.g., `ui`, `cli`, `infra`).
- **`short-description`**: Concise description of the changes made.
- **`(#<issueNumber>)`**: Issue number **at the end** of the title.
- **`Closes <issueNumber>`**: Automatically links and closes the associated issue.

### Example Commit Messages:
- `feat(ui): add new login button (#64)` (for a feature)
- `bugfix(api): fix authentication token issue (#72)` (for a bug fix)
- `docs(contributing): update contribution guidelines (#65)` (for documentation)

## Pull Request Process

1. **Create a Pull Request (PR)**: Once your branch is ready, open a PR to merge into the main branch (`main` or `develop` as defined).
2. **PR Title**: The PR title should match the commit message title.
3. **PR Description**: Provide a description of what’s added, fixed, or improved. Use the template provided in the PR creation form.
4. **Review Process**: All PRs must be reviewed and approved by a team member before merging.

## Code of Conduct

Please adhere to the project's code of conduct, which ensures a welcoming and respectful environment for all contributors.

---

## Links to Other Docs

- [Branching Conventions](docs/BRANCHING.md)
- [Labeling Strategy](docs/LABELS.md)
- [Workflows](docs/WORKFLOWS.md)

---

## Merge Strategy

For all pull requests, we follow the **Squash and Merge** strategy.

- **Squash and Merge** combines all commits into a single commit.
- The commit message should match the PR title and include `Closes #<issueNumber>` to automatically close the issue.

This ensures a clean, linear history and makes it easy to track the issue resolution.

---

## Checklist for Contributors

- [ ] Follow the branch naming conventions
- [ ] Ensure commit messages are formatted correctly
- [ ] Provide a clear and concise PR description
- [ ] Ensure PR titles match commit message titles
- [ ] Link relevant issues with `Closes #<issueNumber>` in PR description
- [ ] Add the appropriate labels to the PR

Thank you for contributing! Your efforts help make WattWise better for everyone.
