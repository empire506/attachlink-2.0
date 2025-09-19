# 1. Check status and remote
git status
git remote -v

# 2. Stage & commit
git add .
git commit -m "Add project files"    # skip if nothing to commit

# 3. Ensure branch name (use main or remote's branch)
git branch -M main

# 4. Set origin if not set (or update)
git remote add origin https://github.com/empire506/attachlink-2.0.git
# If origin exists and you need to update:
# git remote set-url origin https://github.com/empire506/attachlink-2.0.git

# 5. If remote has commits, pull and merge
git pull origin main --allow-unrelated-histories

# Resolve any merge conflicts, then:
# git add <resolved-files>
# git commit -m "Resolve merge conflicts"

# 6. Push to remote
git push -u origin main

# If you intentionally want to overwrite remote (destructive):
# git push -u origin main --force
