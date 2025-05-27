function TokenInput({ token, setToken }) {
    return (
      <input
        type="text"
        placeholder="Enter Bearer Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
    );
  }
  
  export default TokenInput;
  