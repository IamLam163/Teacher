# Git Concepts with Practical Examples

## Setting Up a Repository

### `git init`

The `git init` command initializes a new Git repository in the current directory. This creates a `.git` folder that tracks all changes.

```sh
mkdir my_project
cd my_project
git init
```

After running this command, the directory is now a Git repository, and you can start tracking files.

### `git clone`

Cloning a repository means creating a local copy of a remote repository.

```sh
git clone https://github.com/user/repository.git
```

This downloads all files and the commit history of the remote repository to your local machine.

### `git config`

Configures Git settings for identity and behavior.

```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

You can also configure the default branch name:

```sh
git config --global init.defaultBranch main
```

### `git alias`

Creates shortcuts for commonly used Git commands, making work more efficient.

```sh
git config --global alias.co checkout
git config --global alias.st status
```

Example usage:

```sh
git co main  # Instead of 'git checkout main'
```

## Saving Changes

### `git add`

Moves changes from the working directory to the staging area.

```sh
git add file.txt  # Adds a specific file
git add .  # Adds all changed files
```

### `git commit`

Creates a snapshot of staged changes.

```sh
git commit -m "Initial commit"
```

To make detailed commits:

```sh
git commit -m "Fix login issue" -m "Added error handling in the login component"
```

### `git diff`

Displays differences between working, staged, and committed files.

```sh
git diff  # Shows unstaged changes
git diff --staged  # Shows staged changes before commit
```

### `git stash`

Temporarily saves uncommitted changes without committing them.

```sh
git stash  # Stashes all tracked changes
git stash list  # Shows stashed changes
git stash pop  # Restores the most recent stash
```

### `.gitignore`

Specifies files and directories that should not be tracked by Git.
Example `.gitignore` file:

```
node_modules/
.env
.DS_Store
debug.log
```

## Inspecting a Repository

### `git tag`

Tags specific commits, typically for versioning.

```sh
git tag v1.0.0  # Creates a tag
git push origin v1.0.0  # Pushes the tag to remote
```

To list all tags:

```sh
git tag
```

### `git blame`

Shows who last modified each line in a file and when.

```sh
git blame file.txt
```

Useful for tracking changes and accountability.

## Undoing Changes

### `git clean`

Removes untracked files and directories.

```sh
git clean -f  # Removes untracked files
git clean -fd  # Also removes untracked directories
```

### `git revert`

Creates a new commit that undoes changes from a previous commit.

```sh
git revert HEAD  # Reverts the last commit
git revert <commit-hash>  # Reverts a specific commit
```

This does not remove the commit but creates a new one that negates it.

### `git reset`

Moves the branch pointer to a previous commit.

```sh
git reset --soft HEAD~1  # Moves HEAD back one commit but keeps changes staged
git reset --hard HEAD~1  # Moves HEAD back one commit and discards all changes
```

### `git rm`

Deletes a file and removes it from Git tracking.

```sh
git rm file.txt
git commit -m "Removed file.txt"
```

Use `git rm --cached file.txt` to remove a file from tracking but keep it in the working directory.

## Rewriting History

### `git rebase`

Moves or combines commits onto another branch.

```sh
git checkout feature-branch
git rebase main  # Moves feature branch commits to follow main branch
```

### `git reflog`

Shows a history of HEAD movements, allowing recovery of lost commits.

```sh
git reflog
```

If a branch was deleted accidentally, use:

```sh
git checkout -b new-branch <commit-hash>
```

This restores the branch from the reflog.

---

These Git commands help manage code efficiently and ensure proper version control for projects.
