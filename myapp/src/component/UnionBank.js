import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function () {
    return (
        <div>
            <h1>UnionBank</h1>
            <AndhraBank  location="Tirupati"/>
            <CorporationBank location="Rangampet"/>

        </div>
    )
}
