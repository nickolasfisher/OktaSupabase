# Securing a Vue Application Built with Supabase using Okta

This repository shows you how to use create an application with Vue.js that using Supabase to store its data.  The application is secured by Okta. Please read [How to Build an Express Application using Prisma][blog] to see how it was created.

**Prerequisites:**

- [VS Code or other IDE](https://code.visualstudio.com/)
- [A Supabase Account](https://app.supabase.com/)
- [Node.js version 15.0 or higher](https://nodejs.org/en/)
- [Okta CLI](https://cli.okta.com)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

## Getting Started

To run this example, run the following commands:

```bash
git clone https://github.com/nickolasfisher/OktaSupabase.git
cd OktaSupabase
npm i
```

### Create an OIDC Application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI. 

Provide the required information. Once you register, create a client application in Okta with the following command:

```shell
okta apps create
```

Before you begin, you’ll need a free Okta developer account. Install the Okta CLI and run okta register to sign up for a new account. If you already have an account, run okta login. Then, run okta apps create. Select the default app name, or change it as you see fit. Choose Web and press Enter.

Select Web. Then, change the Redirect URI to http://localhost:3000/login/callback and accept the default Logout Redirect URI of http://localhost:3000.

The application configuration will be printed to the terminal.

Create a file called `.env` in the `OktaSupabase` directory.  Add the following code and replace the values with yours.

```bash
VITE_SUPABASE_URL={yourSupabaseUrl}
VITE_SUPABASE_ANON_KEY={yourSupabaseAnonKey}
VITE_OKTA_DOMAIN={yourOktaDomain}
VITE_OKTA_CLIENTID={yourClientId}
```

### Create a Supabase project and populate the database

Navigate to [your supabase admin page](https://app.supabase.com/).  If you havne't created a project yet, do so now.

Under *Table Editor* click **Create a new table** and name it `Entries`.  Add the following columns to it.

> id : int8 : Is Identity *note: supabase will add this automatically for you*  
> created_at : timestamptz : not null *note: supabase will add this automatically for you*  
> description : text : not null  
> date : timestamptz : not null  
> title : text : not null  
> isPublic : bool : not null  

Populate some sample data in your name by using the **Insert Row** button.

## Start the Application.

Run the command `npm run dev` and then open `https://localhost:3000` in your favorite browser and you should be able to see the home page.

## Links

This example uses the following open source libraries from Okta:

* [Okta CLI](https://github.com/okta/okta-cli)

## Help

Please post any questions as comments on the [blog post][blog], or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).

[blog]: ()
