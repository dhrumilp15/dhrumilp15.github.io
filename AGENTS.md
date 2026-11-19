# Repository instructions

## Resume cache busting

Whenever `assets/resume.pdf` is replaced or updated, update the `v` query parameter in the Resume link in `index.html` so browsers and CDNs fetch the new file instead of a cached copy.

Use a unique version matching the update date, for example:

```html
<a href="/assets/resume.pdf?v=20261119">Resume</a>
```

Do not remove the query parameter; increment or change its value for each resume replacement.
