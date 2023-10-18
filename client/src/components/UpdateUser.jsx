function UpdateUser() {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Type Name"
              id="name"
              name="name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="Type Email"
              id="email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              placeholder="Type Age"
              id="age"
              name="age"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success mt-4">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
