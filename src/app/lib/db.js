// src/app/lib/db.js
'use server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
    return open({
        filename: './db.sqlite',
        driver: sqlite3.Database,
    });
}
