'use client'
import React from 'react'

export default function Leaderboard() {
    return (<section
        className="flex flex-col mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4 bg-(--middleground) rounded-lg border border-(--foreground) shadow-md">
        <div><h2 className="text-3xl font-bold mb-4 text-(--text)">Leaderboard</h2>
            <table
                className="w-[100%] border-spacing-0 border-separate bg-(--background) border border-(--foreground) rounded-lg shadow">
                <thead className="text-(--text) text-left py-8">
                <tr>
                    <th className="px-8 py-2 w-[10%]"> Rang</th>
                    <th className="border-x border-[var(--foreground)] px-8 py-2 w-[60%]"> Pseudo</th>
                    <th className="px-8 py-2 w-[30%]"> Score</th>
                </tr>
                </thead>
                <tbody className="text-(--text) text-left">
                <tr>
                    <td className="border-t border-(--foreground) px-8 py-2 "> 1</td>
                    <td className="border-x border-t border-(--foreground) px-8 py-2 "> Lucascade</td>
                    <td className="border-t border-(--foreground) px-8 py-2 "> 431&nbsp; <span
                        className="text-(--accent)">(+79)</span></td>
                </tr>
                <tr>
                    <td className="border-t border-(--foreground) px-8 py-2 "> 2</td>
                    <td className="border-x border-t border-(--foreground) px-8 py-2 "> amSi</td>
                    <td className="border-t border-(--foreground) px-8 py-2 "> 412&nbsp; <span
                        className="text-(--accent)">(+22)</span></td>
                </tr>
                <tr>
                    <td className="border-t border-(--foreground) px-8 py-2 "> 3</td>
                    <td className="border-x border-t border-(--foreground) px-8 py-2 "> Djédjé le DJ</td>
                    <td className="border-t border-(--foreground) px-8 py-2 "> 297&nbsp; <span
                        className="text-(--accent)">(+54)</span></td>
                </tr>
                <tr>
                    <td className="border-t border-(--foreground) px-8 py-2 "> 4</td>
                    <td className="border-x border-t border-(--foreground) px-8 py-2 "> Rohlala</td>
                    <td className="border-t border-(--foreground) px-8 py-2 "> 10&nbsp; <span
                        className="text-(--accent)">(+10)</span></td>
                </tr>
                </tbody>
            </table>
        </div>
        {/* ---SI CONNECTE--- */}
        <div><h3 className="text-xl font-bold mt-4 text-(--text)">Votre classement</h3>
            <table
                className="w-[100%] border-spacing-0 border-separate mt-2 bg-(--background) border border-(--foreground) rounded-lg shadow">
                <tbody className="text-(--text) text-left">
                <tr>
                    <td className="px-8 py-2 w-[10%]"> 1</td>
                    <td className="border-x border-(--foreground) px-8 py-2 w-[60%]"> Lucascade</td>
                    <td className="px-8 py-2 w-[30%]"> 431&nbsp; <span className="text-(--accent)">(+79)</span></td>
                </tr>
                </tbody>
            </table>
        </div>
        {/* ---SI PAS CONNECTE--- */}
        <div
            className="flex flex-row items-center justify-between px-8 bg-(--background) px-8 py-4 mt-4 rounded-lg border border-(--foreground) shadow">
            <p className="text-(--text)">Connectez-vous pour commencer à accumuler des points.</p>
            <div
                className="cursor-pointer text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none">Se
                connecter
            </div>
        </div>
    </section>)
}