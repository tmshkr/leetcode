package _535_encode_and_decode_tinyurl;

import java.util.HashMap;
import java.util.Random;

public class Codec {

  HashMap<String, String> short2long = new HashMap<>();
  HashMap<String, String> long2short = new HashMap<>();
  String base = "http://tinyurl.com/";

  public String encode(String longUrl) {
    if (!long2short.containsKey(longUrl)) {
      String shortUrl = base + generateKey();
      long2short.put(longUrl, shortUrl);
      short2long.put(shortUrl, longUrl);
    }

    return long2short.get(longUrl);
  }

  public String decode(String shortUrl) {
    return short2long.get(shortUrl);
  }

  private String generateKey() {
    int leftLimit = 97; // letter 'a'
    int rightLimit = 122; // letter 'z'
    int targetStringLength = 5;
    Random random = new Random();
    StringBuilder buffer = new StringBuilder(targetStringLength);
    for (int i = 0; i < targetStringLength; i++) {
      int randomLimitedInt =
        leftLimit + (int) (random.nextFloat() * (rightLimit - leftLimit + 1));
      buffer.append((char) randomLimitedInt);
    }
    return buffer.toString();
  }
}
/*
https://leetcode.com/problems/encode-and-decode-tinyurl/
*/
