import messages from "@application/constants/messages";

const errorHandler = (error) => {
  let { status, message } = error.response;
  const debug = "console";

  switch (status) {
  case 401:
    message = messages[401];
    break;
  case 403:
    message = messages[403];
    break;
  case 404:
    message = messages[404];
    break;
  case 500:
    message = messages[500];
    break;
  default:
    debug.log("default");
  }

  return message;
};

export default errorHandler;
