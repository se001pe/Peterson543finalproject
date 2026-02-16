'use client';
import React from 'react';
import ButtonUI from "@/layout/ui/button";
const Aside: React.FC = () => {

    return (
        <aside className = "w-64 bg-black-800 p-6 border-r border-black-700">
            <ButtonUI /> 
            <ButtonUI />
            <ButtonUI />
            <ButtonUI />

        </aside>

    )
}
export default Aside;