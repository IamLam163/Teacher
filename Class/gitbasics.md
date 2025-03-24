# GitHub Crash Course 🚀

## **1. Introduction to Git and GitHub**

### **What is Git?**

Git is a distributed version control system that helps developers track changes in their code.

### **What is GitHub?**

GitHub is a cloud-based platform for hosting and collaborating on Git repositories.

---

## **2. Installing Git and Setting Up GitHub**

### **Install Git**

🔗 [Download Git](https://git-scm.com/downloads)

After installing, verify the installation:

```sh
git --version
```

### **Configure Git**

Set up your user information:

```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Check configuration:

```sh
git config --list
```

---

## **3. Basic Git Commands**

### **Initialize a Repository**

```sh
git init
```

### **Clone a Repository**

```sh
git clone <repository-url>
```

### **Check Status**

```sh
git status
```

### **Add Files to Staging**

```sh
git add <file>      # Add a single file
git add .           # Add all files
```

### **Commit Changes**

```sh
git commit -m "Your commit message"
```

### **View Commit History**

```sh
git log
```

---

## **4. Working with Branches**

### **Create a New Branch**

```sh
git branch new-feature
```

### **Switch to a Branch**

```sh
git checkout new-feature
```

or

```sh
git switch new-feature
```

### **Create and Switch to a Branch**

```sh
git checkout -b another-feature
```

or

```sh
git switch -c another-feature
```

### **Merge Branches**

```sh
git checkout main
git merge new-feature
```

### **Delete a Branch**

```sh
git branch -d new-feature
```

---

## **5. Collaborating on GitHub**

### **Connect Local Repo to GitHub**

1. Create a repository on GitHub
2. Link it to your local project:
   ```sh
   git remote add origin <repository-url>
   git branch -M main
   git push -u origin main
   ```

### **Pull Latest Changes**

```sh
git pull origin main
```

### **Push Changes to GitHub**

```sh
git push origin main
```

### **Forking a Repository**

1. Navigate to a repo on GitHub
2. Click **Fork**
3. Clone the forked repo to your machine:
   ```sh
   git clone <your-forked-repo-url>
   ```

### **Making a Pull Request (PR)**

1. Commit and push changes
2. Go to GitHub and create a **Pull Request**
3. Request a review from maintainers
4. Merge the PR when approved

---

## **6. Handling Merge Conflicts**

If you see a merge conflict message, resolve conflicts manually:

```sh
git status
```

Edit conflicting files and then:

```sh
git add <resolved-file>
git commit -m "Resolved merge conflict"
git push origin main
```

---

## **7. Advanced Git Commands**

### **Undo Last Commit (Soft Reset)**

```sh
git reset --soft HEAD~1
```

### **Undo Last Commit (Hard Reset - Deletes Changes)**

```sh
git reset --hard HEAD~1
```

### **Stash Changes (Save Without Committing)**

```sh
git stash
```

Apply stashed changes later:

```sh
git stash pop
```

### **Rebase a Branch**

```sh
git checkout main
git pull origin main
git checkout new-feature
git rebase main
```

---

## **8. Working with GitHub Actions (Automation)**

Create a `.github/workflows/main.yml` file:

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run tests
        run: echo "Running tests"
```

---

## **9. Securing Your GitHub Repo**

- Enable **Two-Factor Authentication**
- Use **.gitignore** to ignore sensitive files
- Use **GitHub Secrets** for API keys in workflows
- Set branch protection rules

---

## **10. Practical Project Idea**

Try building a **To-Do List App** with GitHub collaboration:

1. **Initialize Git**
2. **Create a `develop` branch**
3. **Create a `feature/add-tasks` branch**
4. **Commit and push changes**
5. **Open a Pull Request**
6. **Merge into `main`**

---
