package _535_encode_and_decode_tinyurl;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  @DisplayName("https://leetcode.com/problems/design-tinyurl")
  void CodecDriver0() {
    Codec c = new Codec();
    String shortUrl = c.encode("https://leetcode.com/problems/design-tinyurl");
    System.out.println(shortUrl);

    assertTrue(shortUrl.startsWith("http://tinyurl.com/"));

    String longUrl = c.decode(shortUrl);
    assertEquals(c.decode(shortUrl), longUrl);
  }
}
