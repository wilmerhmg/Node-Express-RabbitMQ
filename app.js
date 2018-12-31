import express from 'express';
import consign from 'consign';

const app = express();

// Routes
consign({cwd: __dirname})
    .include('config/init.js')
    .then('config/db.js')
    .then('core/middleware.js')
    .then('controllers')
    .then('routes')    
    .then('workers')
    .then('core/boot.js')
.into(app);