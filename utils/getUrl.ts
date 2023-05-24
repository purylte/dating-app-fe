export default function getUrl(type: string, url: string) {
  // if (type === "profile") {
  //   return `http://127.0.0.1:8000/${url}`;
  // } else if (type === "auth") {
  //   return `http://127.0.0.1:3000/${url}`;
  // } else if (type === "recommendation") {
  //   return `http:///127.0.0.1:8001/${url}`;
  // } else if (type === "swipe") {
  //   return `http:///127.0.0.1:8002/${url}`;
  // } else if (type === "chat") {
  //   return `http://127.0.0.1:3002/${url}`;
  // } else {
  //   throw new Error("Invalid type");
  // }
  if (type === "profile") {
    return `http://34.70.123.231:80/${url}`;
  } else if (type === "auth") {
    return `http://34.70.123.231:3001/${url}`;
  } else if (type === "recommendation") {
    return `http://34.28.50.95/${url}`;
  } else if (type === "swipe") {
    return `http://35.208.158.26/${url}`;
  } else if (type === "chat") {
    return `http://35.223.12.163:3000/${url}`;
  } else {
    throw new Error("Invalid type");
  }
}
