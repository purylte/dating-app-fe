export default function getUrl(type: string, url: string) {
  if (type === "profile") {
    return `http://34.70.123.231:80/${url}`;
  } else if (type === "auth") {
    return `http://34.70.123.231:3001/${url}`;
  } else if (type === "recommendation") {
    return `http://34.28.50.95/${url}`;
  } else if (type === "swipe") {
    return `http://35.193.64.71/${url}`;
  } else {
    throw new Error("Invalid type");
  }
}
