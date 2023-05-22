export default function getUrl(type: string, url: string) {
  if (type === "profile") {
    return `http://34.70.123.231:80/${url}`;
  } else if (type === "auth") {
    return `http://34.70.123.231:3001/${url}`;
  } else {
    throw new Error("Invalid type");
  }
}
