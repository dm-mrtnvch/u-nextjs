import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"nextjs, rent" + keywords}></meta>
                <title>main page</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text="main"/>
                <A href={"/users"} text="users"/>
            </div>
            {children}
        </>
    );
};

export default MainContainer;