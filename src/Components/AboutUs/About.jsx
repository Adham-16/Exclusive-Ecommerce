import React from 'react'

import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';
import { SectionThree } from './SectionThree';
import { SectionFour } from './SectionFour';

export function About() {


    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <SectionOne></SectionOne>
                <SectionTwo></SectionTwo>
                <SectionThree></SectionThree>
                <SectionFour></SectionFour>
            </div>
        </>
    )
}
