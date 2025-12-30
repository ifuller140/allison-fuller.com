# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project is configured for deployment to **GitHub Pages** with the custom domain **allison-fuller.com**.

### 1. Preparation
- Ensure you have a GitHub repository for this project.
- Make sure your resume is at `public/resume.pdf`.

### 2. Deployment Steps
Run the following command in your terminal:
```sh
npm run deploy
```
This command will:
1. Build the project into the `dist` folder.
2. Push the contents of `dist` to a new `gh-pages` branch on GitHub.

### 3. GitHub Settings
1. Go to your repository on GitHub.com.
2. Click **Settings** > **Pages**.
3. Under **Build and deployment**, ensure **Source** is set to "Deploy from a branch".
4. Set the **Branch** to `gh-pages` and folder to `/(root)`.
5. Under **Custom domain**, ensure `allison-fuller.com` is entered (it should be automatically detected from the `CNAME` file).
6. Check **Enforce HTTPS**.

### 4. Domain Provider (DNS) Setup
To point your domain to GitHub Pages, add these records at your domain provider (e.g., GoDaddy, Namecheap):

**A Records (pointing to GitHub's IPs):**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME Record:**
- Name: `www`
- Value: `YOUR_GITHUB_USERNAME.github.io`

Once complete, your site will be live at [allison-fuller.com](https://allison-fuller.com).

