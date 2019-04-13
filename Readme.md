### MySQL Express Angular JWT Authentication

### How to get a copy of the code

```
cd desktop
git clone https://github.com/ammonk/mysql-express-angular-auth.git
```

### Install Dependencies (Express)

```
npm install
```

### Install Dependencies (Angular)

```
cd client
npm install
```

### MySQL configuration

MySQL is configured through the `config/config.json` file. Make sure that the username, password, and host are appropriate for your local installation.

### Express

Express uses BCrypt and JsonWebToken to encrypt user passwords when an account is created and JWT (Json Web Token) as a cookie to authenticate requests.

When a login request is received, the username and password are validated and then a `jwt cookie` is added to the response.

The `profile` route will attempt to read the jwt cookie, and if it is successfully decrypted will respond with the appropriate profile information.

### Angular

The only additional package added to Angular was for bootstrap.

#### User Service

`user.service.ts` controls access to the express routes, it provies four methods

- login(user)
- logout
- register(user)
- profile

There is also a local property called `options` that allows for the jwt cookie to be sent with all requests after it has been received.

Another local property, `loggedIn`, is false by default. This value is set to true when a user logs in successfuly, and false when a user logs out. The `Header` component uses this value to toggle navigation items.

### What if a user refreshes the page?

This resets the loggedIn state in `user.service.ts`, which will think the user is logged out. This is solved by adding in a method for `app.component.ts` that checks to see if the current token is valid or not and use that as the loggedIn in state.

Express route: `validateToken` was added for this purpose.
