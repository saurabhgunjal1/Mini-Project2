import React, { useState } from "react";
import "./pagination.css";
import { useEffect } from "react";
export default function Pagination() {
    const [user, setUser] = useState([]);
    const [page, setpage] = useState(1);
    const getData = async () => {
        const res = await fetch(
            "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        const data = await res.json();
        setUser(data);
    };
    console.log(user);

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
        <div>
            <h1>Employee Data Table</h1>

            <div className="rowdiv">
                <ul id="row1">
                    <h5>id</h5>

                    {user.length > 0 && (
                        <div className="ul">
                            {user.slice(page * 10 - 10, page * 10).map((data) => {
                                return <ul>{data.id}</ul>;
                            })}
                        </div>
                    )}
                </ul>
                <ul id="row2">
                    <h5>Name</h5>
                    {user.length > 0 && (
                        <div className="ul">
                            {user.slice(page * 10 - 10, page * 10).map((data) => {
                                return <ul>{data.name}</ul>;
                            })}
                        </div>
                    )}
                </ul>
                <ul id="row3">
                    <h5>Email</h5>
                    {user.length > 0 && (
                        <div className="ul">
                            {user.slice(page * 10 - 10, page * 10).map((data) => {
                                return <ul>{data.email}</ul>;
                            })}
                        </div>
                    )}
                </ul>
                <ul id="row4">
                    <h5>Role</h5>
                    {user.length > 0 && (
                        <div className="ul">
                            {user.slice(page * 10 - 10, page * 10).map((data) => {
                                return <ul>{data.role}</ul>;
                            })}
                        </div>
                    )}
                </ul>
            </div>
            <table />
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
                    {/* <button onClick={() => selectedPageHandler()}>1</button> */}
                    <button onClick={() => selectedPageHandler(page + 1)}>Next</button>
                </div>
            )}
        </div>
    );
}
