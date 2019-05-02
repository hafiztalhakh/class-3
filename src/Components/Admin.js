import React from 'react';

class Admin extends React.Component {

    state = ({
        FirstName: null,
        lastName: null,
        email: null,
        salary: null,
        jobStartDate: null,
        Employ: []
    })

    addEmploy = () => {

        const { Employ, FirstName, lastName, email, salary, jobStartDate } = this.state;

        Employ.push({
            FirstName: FirstName,
            lastName: lastName,
            email: email,
            salary: salary,
            jobStartDate: jobStartDate,
        })

        this.setState({
            FirstName: "",
            lastName: "",
            email: "",
            salary: "",
            jobStartDate: "",
        })
    }

    handelInput = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        })
    }

    render() {
        return (
            <React.Fragment>

                first name<input
                    type="text"
                    name="FirstName"
                    value={this.state.FirstName}
                    onChange={this.handelInput}
                />

                <br />

                last name<input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handelInput}
                />

                <br />

                email<input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handelInput}
                />

                <br />

                salary<input
                    type="number"
                    name="salary"
                    value={this.state.salary}
                    onChange={this.handelInput}
                />

                <br />

                job start date<input
                    type="date"
                    name="jobStartDate"
                    value={this.state.jobStartDate}
                    onChange={this.handelInput}
                />

                <br />
                <br />

                <button onClick={this.addEmploy}>Add Employ</button>

                <br />
                <br />
                <br />
                <br />

                {
                    <table border="2px">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Job Start Date</th>
                        </tr>
                        {
                        this.state.Employ.map((value, index) =>{
              return (
                <React.Fragment key={index}>


                            <tr>
                                <td>{value.FirstName}</td>
                                <td>{value.lastName}</td>
                                <td>{value.email}</td>
                                <td>{value.salary}</td>
                                <td>{value.jobStartDate}</td>
                            </tr>

                        </React.Fragment>
                        )
                      })
                    }
            </table>
                }

            </React.Fragment>
        );
    }
}

export default Admin;