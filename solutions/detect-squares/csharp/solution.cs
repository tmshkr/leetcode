public class DetectSquares
{

  private List<(int x, int y)> _points = new();
  private PointCounter _counter = new();

  public DetectSquares() { }

  public void Add(int[] point)
  {
    var p = (point[0], point[1]);
    _points.Add(p);
    _counter.Add(p);
  }

  public int Count(int[] point)
  {
    int px = point[0], py = point[1];
    int count = 0;

    foreach (var (x, y) in _points)
    {
      if (Math.Abs(px - x) != Math.Abs(py - y)) continue;
      if (x == px || y == py) continue;
      count += _counter.Count((px, y)) * _counter.Count((x, py));
    }
    return count;
  }

  private class PointCounter
  {
    private Dictionary<(int x, int y), int> _counter = new();

    public void Add((int x, int y) p)
    {
      _counter[p] = _counter.GetValueOrDefault(p, 0) + 1;
    }

    public int Count((int x, int y) p)
    {
      return _counter.GetValueOrDefault(p, 0);
    }
  }
}
