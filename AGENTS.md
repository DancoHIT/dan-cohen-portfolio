# Portfolio maintenance

This is Dan Cohen's existing Hebrew portfolio draft. Make only the requested changes; preserve the design and other project content. Translate to English only when requested.

The website source is index.html, styles.css, app.js and assets/. Do not publish source CV Word documents, temporary files, or unrelated workspace materials.

Publication destination: GitHub account DancoHIT, dedicated repository dan-cohen-portfolio, main branch, GitHub Pages from / (root). Confirm repository ownership and actual settings before publishing. No repository or Pages site exists merely because this file names it.

The user requested ongoing publication of authorized website edits to the same URL. After an authorized change, validate local asset links and JavaScript syntax, then commit and push the relevant changes to main using available authenticated tools. Check deployment success. Report if authentication or Pages settings prevent publication; never claim a local edit is already live.

Do not add a background file watcher that publishes unfinished edits. Each completed requested change should be published once validated. GitHub Pages will handle deployment after pushes.

Before committing website updates, run work/site/package.py from the task workspace root. It refreshes CSS and JavaScript version hashes in index.html so browsers load changed assets instead of cached copies. Then run work/site/verify.py. Preserve these versioned references when editing the page.
