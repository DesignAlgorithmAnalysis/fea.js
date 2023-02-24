class Matrix {
  constructor(data) {
    let columnLengths = data.map((row) => row.length);
    let allColumnsEqual = columnLengths.every((length) => length === columnLengths[0]);

    if (!allColumnsEqual) {
      throw new Error("All columns must be of equal length");
    }

    this.data = data;
    this.rows = data.length;
    this.cols = data[0].length;
  }
}
