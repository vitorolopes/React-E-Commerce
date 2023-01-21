// here we are in NODE land so ...
exports.handler = async function (event, context){
  return {
    statusCode: 200,
    body: "Hello World"
  }
}

// domain --> http://localhost:8888/
// domain/.netlify/functions/hello (the extension
// is not needed)