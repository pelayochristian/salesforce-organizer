import Link from "next/link";
import Layout from "./Layout";
import { useState } from "react";

function OrgForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(value);
  };

  return (
    <Layout>
      <div class="container">
        <div class="card border-primary mb-3">
          <div class="card-header">Add Organization</div>
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <p class="card-text">
                <form></form>
                <div class="form-group">
                  <select
                    class="form-control"
                    id="exampleSelect1"
                    value={value.type}
                    name="type"
                    onChange={handleChange}
                    required
                  >
                    <option>Choose Environment</option>
                    <option>Production</option>
                    <option>Sandbox</option>
                    <option>Custom Domain</option>
                  </select>
                </div>
                {/* Title */}
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Title"
                    value={value.title}
                    name="title"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                {/* End Title */}

                {/* Username */}
                <div class="form-group">
                  <input
                    type="test"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Username"
                    value={value.username}
                    name="username"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                {/* End Username */}
                {/* Password */}
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={value.password}
                    name="password"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                {/* End Password */}
              </p>
              <div className="buttonWrapper text-center">
                <button type="submit" class="btn btn-primary mr-3">
                  Save
                </button>
                <Link href="/">
                  <button type="button" class="btn btn-warning">
                    Discard
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OrgForm;
