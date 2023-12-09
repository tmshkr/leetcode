import random
import string


class Codec:
    def __init__(self):
        self.long2short = {}
        self.short2long = {}
        self.base = "http://tinyurl.com/"

    def encode(self, longUrl: str) -> str:
        if longUrl not in self.long2short:
            shortUrl = self.base + "".join(
                random.choice(string.ascii_lowercase) for _ in range(6)
            )
            self.long2short[longUrl] = shortUrl
            self.short2long[shortUrl] = longUrl
        return self.long2short[longUrl]

    def decode(self, shortUrl: str) -> str:
        return self.short2long[shortUrl]


# https://leetcode.com/problems/encode-and-decode-tinyurl/
