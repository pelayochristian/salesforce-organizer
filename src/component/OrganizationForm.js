import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OrganizationService from '../services/OrganizationService';

function OrganizationForm() {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        OrganizationService.save(value);
    };

    return (
        <div class="container">
            <div class="card border-light mb-3">
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
                                    value={value.name}
                                    name="name"
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
                            <Link to={'/'}>
                                <button
                                    type="submit"
                                    class="btn btn-warning mr-3"
                                >
                                    Dicard
                                </button>
                            </Link>
                            <button type="submit" class="btn btn-primary mr-3">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrganizationForm;
