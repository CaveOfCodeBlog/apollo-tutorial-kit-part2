# apollo-tutorial-kit

Starting point for the CaveOfCode.com Apollo GraphQL Server tutorial.

Up-to-date documentation and explanations for Apollo Server can be found on [docs.apollostack.com](http://dev.apollodata.com/tools/apollo-server/index.html)

## Getting started

```sh
git clone https://github.com/apollostack/apollo-starter-kit
cd apollo-starter-kit
npm install
npm start
```

Then open [http://localhost:8080/graphql](http://localhost:8080/graphql)

When you paste this on the left side of the page:

```
{
  testString
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
  "data": {
    "testString": "It works!"
  }
}
```  
