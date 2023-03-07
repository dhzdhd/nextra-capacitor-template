# Notes

Notes created in the Obsidian app, stored on GitHub, served through Nextra.JS.

- All notes should be stored in the `pages/` directory as `.md` or `.mdx` files.

## Configuration

Note: You need to redeploy without build cache on Vercel if you make changes to file names

- Nextra App
  - Run `npm install`
  - Populate the `.env` file as per `.env-example`
    - You can get your own password hash and salt by running `npm run gen-password <password>`
    - The env key PASSWORD = The hash value output of the script
    - The env key SALT = The salt value output of the script
  - Configure `theme.config.tsx` as per your needs
    - Checkout [Nextra docs](https://nextra.site/docs/docs-theme/start) for more info
  - `npm run dev` to run the app locally
  - Deploy to vercel or any other provider for the production build
    - Remember to setup the env variables on the provider
- Android App (Do this only after the web app is setup)
  - Add the web app URL to `capacitor.config.ts`
  - Configure the appId
    - Rename `dhzdhd` in the `appId` field in `capacitor.config.ts` to a name of your choice
    - Rename the `dhzdhd` in the `android/app/src/main/java/com/dhzdhd/notes` path to the same name
  - Create a `key.jks` file using `keytool` in the `android/app/` folder
    - `keytool -genkey -v -keystore key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias dhzdhd`
  - Create a `keystore.properties` file in `android/` folder with the following contents
    - `storePassword=<storePassword>`
    - `keyPassword=<keyPassword>`
  - Add the following to the `.gitignore` in the `android/` folder
    - `keystore.properties`
    - `app/*.jks`

## TODO

- Add workflow config
- Fix android/ folder
