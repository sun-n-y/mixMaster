const NewsLetter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* firstName */}
      <div className="form-row">
        <label htmlFor="firstName" className="form-label">
          first name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-input"
          defaultValue="john"
        />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          defaultValue="smigla"
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          name
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '.5rem' }}
      >
        submit
      </button>
    </form>
  );
};
export default NewsLetter;
