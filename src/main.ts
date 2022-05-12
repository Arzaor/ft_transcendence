"use strict";

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

const httpsOptions = {
	key: fs.readFileSync('./secrets/private-key.pem'),
	cert: fs.readFileSync('./secrets/public-certificate.pem'),
};

const server = express();
async function bootstrap() {
	const app = await NestFactory.create(
		AppModule,
		new ExpressAdapter(server),
	);
	await app.init();
}
bootstrap();

http.createServer(server).listen(3000);
https.createServer(httpsOptions, server).listen(443);
