# overview
- the basecamp api wrapper, written in deno.
- not all functions are included ( as of 2024-04-12 )

# based on basecamp api auth instructions
- Configure your OAuth 2 library with
  - client_id
  - client_secret
  - redirect_uri

- request authorization via :
  - https://launchpad.37signals.com/authorization/new

- get access tokens via : 
  - https://launchpad.37signals.com/authorization/token

- testing by making authorized request via :
  - https://launchpad.37signals.com/authorization.json

- Check out the Get authorization endpoint for a description of what this returns.
