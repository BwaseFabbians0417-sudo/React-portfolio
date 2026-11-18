# Olorunniyi Oluwapelumi Victor — Developer Portfolio

A responsive React portfolio featuring ten live project links and six interactive or visual demos: Contact List, Calculator, Profile Card, Facebook Login Clone, Price Tag, and Product Designs. The Facebook-inspired login is a static design preview with disabled fields; it does not collect credentials. Other public repositories stay on GitHub and are available through the profile links.

The Work section also loads the complete list of public, non-fork repositories from the configured GitHub profile, with search, source links, and available live-site links.

The portfolio also includes a short developer bio, a print/save-as-PDF resume section, and a freeCodeCamp Responsive Web Design certificate display with a verification link.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Personalize

- Update `githubUsername` in `src/App.jsx` to connect a different public GitHub profile. The profile links, avatar, and complete repository list use this value.
- Edit the name, introduction, about text, skills, and opportunity status in `src/App.jsx` to match your profile.
- Edit the `featuredProjects` list in `src/App.jsx` to update project titles, links, and descriptions. The GitHub links lead to the full repository list.
- The Contact List, Calculator, Profile Card, Facebook Login Clone, Price Tag, and Product Designs are portfolio showcases in `src/App.jsx`.
- The displayed certificate image is `src/assets/responsiveness-certificate-cropped.jpg`; update it and the verification URL in `src/App.jsx` if you replace the credential.
