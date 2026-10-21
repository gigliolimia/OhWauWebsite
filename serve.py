#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class NoCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 5173), NoCache)
    print("Serving Oh Wau, Patitas! at http://127.0.0.1:5173  (no cache)")
    server.serve_forever()
