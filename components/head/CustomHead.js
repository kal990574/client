import React from 'react';
import Head from "next/head";

export default function CustomHead({title, content}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={content}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
}
