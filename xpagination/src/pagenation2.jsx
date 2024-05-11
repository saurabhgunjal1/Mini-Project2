import React, { useState } from "react";
import "./pagination.css";
import { useEffect } from "react";
export default function Pagination2() {
    const [user, setUser] = useState([]);
    const [page, setpage] = useState(1);
    const getData = async () => {
        try {
            const res = await fetch(
                "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
            );
            const data = await res.json();
            setUser(data);
        }
        catch (error) {
            alert("failed to fetch data")

            console.error("failed to fetch data", error);
        }
    };


    useEffect(() => {
        getData();
    }, []);

    const selectedPageHandler = (selectedpage) => {

        if (
            selectedpage >= 1 &&
            selectedpage <= Math.ceil(user.length / 10) &&
            selectedpage !== page
        ) {
            setpage(selectedpage);
        }
    };

    return (
        <div className="maindiv">
            <h1>Employee Data Table</h1>
            <table>
                <thead >
                    <tr className="heading">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {user.length > 0 && (
                        <div >
                            {
                                user.slice(page * 10 - 10, page * 10).map((data) => {
                                    return (
                                        <tr className="list">
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.role}</td>
                                        </tr>
                                    )
                                })
                            }
                        </div>
                    )}
                </tbody>
            </table>
            {user.length > 0 && (
                <div className="pagination">
                    <button onClick={() => selectedPageHandler(page - 1)}>
                        Previous
                    </button>
                    {[...Array(Math.floor(user.length / 46))].map((_, i) => {
                        return (
                            <button
                                className={page === i + 1 ? "paginationselected" : ""}
                                onClick={() => selectedPageHandler(i + 1)}
                                key={i}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button onClick={() => selectedPageHandler(page + 1)}>Next</button>
                </div>
            )}
        </div>
    );
}
