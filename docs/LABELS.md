# GitHub Label Strategy

This document outlines the label system used in the WattWise project to categorize and track issues and pull requests effectively.

## Label Categories

### Type Labels

Labels that indicate the nature of the issue or pull request.

| Label | Description | Color |
|-------|-------------|-------|
| `type:feature` | New features or enhancements | `#0E8A16` |
| `type:bug` | Bugs and issues that need fixing | `#D73A4A` |
| `type:docs` | Documentation improvements | `#0075CA` |
| `type:chore` | Maintenance tasks and updates | `#FBCA04` |
| `type:test` | Testing-related changes | `#A2EEEF` |
| `type:refactor` | Code refactoring and improvements | `#7057FF` |

### Priority Labels

Labels that indicate the urgency and importance of the issue.

| Label | Description | Color |
|-------|-------------|-------|
| `priority:high` | Urgent issues that need immediate attention | `#B60205` |
| `priority:medium` | Important but not urgent issues | `#D93F0B` |
| `priority:low` | Issues that can be addressed later | `#0E8A16` |

### Status Labels

Labels that indicate the current state of the issue or pull request.

| Label | Description | Color |
|-------|-------------|-------|
| `status:ready` | Ready for development/review | `#0E8A16` |
| `status:blocked` | Blocked by other issues/dependencies | `#B60205` |
| `status:in-progress` | Currently being worked on | `#FBCA04` |

## Best Practices

### Applying Labels

1. **Multiple Labels**: Each issue should have at least one label from each category (type, priority, status)
2. **Updating Status**: Keep the status label up-to-date as work progresses
3. **Priority Changes**: Regularly review and update priority labels based on project needs

### Label Combinations

- New features should have: `type:feature` + priority label + status label
- Bug reports should have: `type:bug` + priority label + status label
- Documentation changes should have: `type:docs` + priority label + status label

### Label Management

1. Only repository maintainers should create new labels
2. Follow the established naming convention: `category:name`
3. Use consistent colors within each category
4. Keep labels focused and avoid creating duplicates

## Label Usage Examples

### Feature Development
```
type:feature
priority:medium
status:ready
```

### Critical Bug
```
type:bug
priority:high
status:in-progress
```

### Documentation Update
```
type:docs
priority:low
status:ready
```

## Automation

We use GitHub Actions to:
- Automatically add `status:ready` to new issues
- Automatically add `status:in-progress` when a PR is linked
- Automatically add `status:blocked` when the "blocked" keyword is used

## Additional Resources

- [GitHub Labels Documentation](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work)
- [Contributing Guide](https://github.com/hamedshahidi/WattWise/blob/main/CONTRIBUTING.md) 