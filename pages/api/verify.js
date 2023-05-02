export default async function handler(req, res) {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token != "test") {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      return res.status(200).json({ message: "Authorized" });
    }
  }
  return res.status(401).json({ message: "Unauthorized" });
}
