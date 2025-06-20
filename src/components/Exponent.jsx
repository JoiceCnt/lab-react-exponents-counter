function Exponent({ num, exponent }) {
  const result = Math.pow(num, exponent);
  const equation = Array(exponent).fill(num).join(" * ");

  return (
    <div className="exponent-card">
      <h3>
        {num}
        <sup>{exponent}</sup>
      </h3>
      <p>
        {equation} = <strong>{result}</strong>
      </p>
    </div>
  );
}

export default Exponent;
