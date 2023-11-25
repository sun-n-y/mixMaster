import { Form, Link, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await axios.post(newsletterUrl, data);
  toast.success(response.data.msg);

  return redirect('/');
};

const NewsLetter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* firstName */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          first name
        </label>
        <input
          type="text"
          name="name"
          id="name"
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
    </Form>
  );
};
export default NewsLetter;
