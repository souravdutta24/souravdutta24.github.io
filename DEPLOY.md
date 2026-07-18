# Deploy notes

## Default branch renamed master → main (2026-07-18)

The repo's default branch was renamed from `master` to `main` on GitHub (via
`POST /repos/{owner}/{repo}/branches/master/rename`) and locally
(`git branch -m master main`). All `.github/workflows/*.yml` trigger
branches and doc references (`README.md`, `CLAUDE.md`) were updated from
`master` to `main` in the same change.

**Gotcha hit during the rename**: GitHub's branch-rename endpoint does
*not* update the repo's Pages source setting. `deploy.yml` still uses
`actions/deploy-pages` (build_type `workflow`), but the Pages API's
`source.branch` field was left pointing at the deleted `master`, and the
`deploy` job failed instantly (no steps ran) until it was manually
repointed:

```
gh api -X PUT repos/<owner>/<repo>/pages -f "source[branch]=main" -f "source[path]=/"
```

If this repo's default branch is ever renamed again, re-check
`gh api repos/<owner>/<repo>/pages --jq .source` and fix it the same way —
the deploy workflow will build successfully and still fail at the deploy
step otherwise.

Renaming the default branch requires admin permission on the repo. If
`gh auth status` is logged in under a collaborator account without admin
(`gh api repos/<owner>/<repo> --jq .permissions` shows `admin: false`),
switch to the owner account first: `gh auth login` (device flow), then
`gh auth switch --user <owner>`.
