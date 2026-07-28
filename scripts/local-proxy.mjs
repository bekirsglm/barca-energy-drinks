import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "dist", "client");
const upstreamPort = 4173;
const types = { ".css":"text/css; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".svg":"image/svg+xml", ".woff2":"font/woff2" };

createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);
  const candidate = normalize(join(root, pathname));
  if (candidate.startsWith(root) && existsSync(candidate) && statSync(candidate).isFile()) {
    res.writeHead(200, { "content-type": types[extname(candidate)] ?? "application/octet-stream", "cache-control":"no-cache" });
    createReadStream(candidate).pipe(res);
    return;
  }
  const proxy = createServer;
  import("node:http").then(({ request }) => {
    const upstream = request({ hostname:"127.0.0.1", port:upstreamPort, path:req.url, method:req.method, headers:req.headers }, response => {
      res.writeHead(response.statusCode ?? 500, response.headers);
      response.pipe(res);
    });
    upstream.on("error", () => { res.writeHead(502); res.end("Local app is starting…"); });
    req.pipe(upstream);
  });
}).listen(5000, "0.0.0.0");
