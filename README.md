# Project Questing
###### Git Workflow

With multiple developers working on the same project, we're bound to run into version control conflicts.
Use the following workflow to prevent that:

-   Always `git pull master` before checking out to a new branch
-   Before setting up a pull request to master remotely, always follow the following steps:
    NOTE - BEFORE PROCEEEDING FURTHER:
    If you made _any_ changes to database models (i.e. adding models, adding/changing fields to models, etc) you must first
    update the migration scripts in `./backend/migrations/versions/`. To do this, run `flask db migrate` followed by `flask db upgrade`.
    This will update the scripts so that anyone else who later pulls the branch from remote can simply `flask db upgrade`.
    1. Switch to your current feature/bug/hotfix branch you'd like to push.
        - If you haven't already, make sure you `git status` to see whether or not you've added & committed your changes.
        - If you still need to add, use `git add NameOfFileOrFolder` all of the files/folders you want to add.
        - If you still need to commit, us `git commit -m "Description of whatever you did here"`
    2. `git pull` to update your local repository (we use this mainly to update your local master repo).
    3. `git merge master` to integrate any changes that may have been merged to master while you were working on your branch.
    4. `git push -u origin The-Name-Of-Your-Current-Branch` to push your current branch to the remote repository.
        - For a shortcut, if you globally configure git to always push your current branch: `git config --global push.default current`
          then you can simply `git push` to push whatever branch you're currently on.
    5. Head over to the Questing repository on github.com
    6. Create a PR to merge your branch into master.
    7. Optional (But HIGHLY recommended): Ping another developer the URL to your PR to review before merging.
    8. Accept merge request and merge on github.com
    9. Update relevant Trello card
    10. Notify the group of a merge on discord (so that everyone can do a `git pull` and `git merge master` to update whatever they're working on)
-   Helpful GIT commands:
    -   To search for a branch by name: `git branch --all | grep "Hotfix"` will output a list of all branches with "Hotfix" in the name.
    -   To temporarally stash your current SAVED but not ADDED OR COMMITTED changes (so if you want to switch to another branch for w/e reason)
        `git stash`
        -   Note: this will clear your current branch of ALL saved work and take you back to your PREVIOUS commit.
        -   To reapply your saved work to your working directory: `git stash apply` (essentially undos `git stash`)
    -   If you accidently `git add somefile.py` you can remove it from staging (and keep your saved changes) with `git rm somefile.py`
    -   To start fresh and rewrite/delete changes to your last commit: `git reset --hard`

TODO: Create a development branch to be used on a staging server -> Update git workflow to incorporate development branch.