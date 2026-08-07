/**
 * Conventional Commits, unmodified.
 *
 * Allowed types: build, chore, ci, docs, feat, fix, perf, refactor, revert,
 * style, test. There is deliberately no `update` — use `feat` for new
 * behaviour, `fix` for a bug, `refactor` for a rewrite that changes nothing
 * observable, and `chore` for everything else.
 *
 * Format:  type(optional-scope): subject
 * Example: feat(starfield): repel stars around the cursor
 */
const config = {
  extends: ["@commitlint/config-conventional"],
};

export default config;
